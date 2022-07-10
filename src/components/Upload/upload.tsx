import React, { ChangeEvent } from 'react'
import axios from 'axios'
import { Button } from '../Button/button'
import { UploadList } from './uploadList'
import Dragger from './dragger'

export type UploadFileStatus = 'ready' | 'uploading' | 'success' | 'error'
export interface UploadFile {
  uid: string;
  size: number;
  name: string;
  status?: UploadFileStatus;
  percent?: number;
  raw?: File;
  response?: any;
  error?: any;
}

export interface UploadProps {
  action: string
  onProgress?: (percentage: number, file: File) => void
  onSuccess?: (data: any, file: File) => void
  onError?: (err: any, file: File) => void
  beforeUpload?: (file: File) => boolean | Promise<File>;
  onChange?: (file: File) => void;
  onRemove?: (file: UploadFile) => void;
  defaultFileList?: any
  headers?: { [key: string]: any };
  name?: string;
  data?: { [key: string]: any };
  withCredentials?: boolean;
  accept?: string;
  multiple?: boolean;
  drag?: boolean;
  children?: React.ReactNode
}

export const Upload: React.FC<UploadProps> = (props) => {
  const {
    action,
    onProgress,
    onSuccess,
    onError,
    beforeUpload,
    onChange,
    onRemove,
    defaultFileList,
    name,
    headers,
    data,
    withCredentials,
    accept,
    multiple,
    children,
    drag,
  } = props
  const [fileList, setFileList] = React.useState<UploadFile[]>(defaultFileList || [])
  const fileInput = React.useRef<HTMLInputElement>(null)

  const updateFileList = (updateFile: UploadFile, updateObj: Partial<UploadFile>) => {
    setFileList(prevList => {
      return prevList.map(file => {
        if (file.uid === updateFile.uid) {
          return { ...file, ...updateObj }
        } else {
          return file
        }
      })
    })
  }

  const handleClick = () => {
    if (fileInput.current) {
      fileInput.current.click()
    }
  }

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if (!files) return
    uploadFiles(files)
    if (fileInput.current) {
      fileInput.current.value = ''
    }
  }

  /* 上传文件 */
  const uploadFiles = (files: FileList) => {
    const postFiles = Array.from(files)

    postFiles.forEach(file => {
      if (!beforeUpload) {
        post(file)
      } else {
        const result = beforeUpload(file)
        if (result && result instanceof Promise) {
          result.then(processedFile => {
            post(processedFile)
          })
        } else if (result !== false) {
          post(file)
        }
      }
    })
  }

  const post = (file: File) => {
    let _file: UploadFile = {
      uid: Date.now() + 'upload-file',
      status: 'ready',
      name: file.name,
      size: file.size,
      percent: 0,
      raw: file
    }
    //setFileList([_file, ...fileList])
    setFileList(prevList => {
      return [_file, ...prevList]
    })

    const formData = new FormData()
    formData.append(name || 'file', file)

    //传入用户自定义上传文件的data参数
    if (data) {
      Object.keys(data).forEach(key => {
        formData.append(key, data[key])
      })
    }

    axios.post(action, formData, {
      headers: {
        ...headers,
        'Content-Type': 'multipart/form-data'
      },
      withCredentials,
      onUploadProgress: (e) => {
        let percentage = Math.round((e.loaded * 100) / e.total || 0)
        if (percentage < 100) {
          updateFileList(_file, { percent: percentage, status: 'uploading' })

          onProgress && onProgress(percentage, file)
        }
      }
    }).then(res => {
      console.log(res);
      updateFileList(_file, { status: 'success', response: res.data })
      onSuccess && onSuccess(res.data, file)
      if (onChange) {
        onChange(file)
      }
    }).catch(err => {
      console.log(err);
      updateFileList(_file, { status: 'error', error: err })
      onError && onError(err, file)
      if (onChange) {
        onChange(file)
      }
    })
  }

  //移除列表中的一项
  const handleRemove = (file: UploadFile) => {
    console.log("开始清除");

    setFileList((prevList) => {
      return prevList.filter(item => item.uid !== file.uid)
    })
    if (onRemove) {
      onRemove(file)
    }
  }
  return (
    <div className='viking-upload-component'>


      <div className="viking-upload-input"
        style={{ display: 'inline-block' }}
        onClick={handleClick}>
        {drag ?
          <Dragger onFile={(files) => { uploadFiles(files) }}>
            {children}
          </Dragger> :
          <Button onClick={handleClick}>{children || 'Upload File'}</Button>
        }
        <input
          type="file"
          ref={fileInput}
          onChange={handleFileChange}
          style={{ display: 'none' }}
          className='viking-file-input'
          accept={accept}
          multiple={multiple}
        />
      </div>

      <UploadList fileList={fileList} onRemove={handleRemove}></UploadList>
    </div >
  )
}


Upload.defaultProps = {
  name: 'file'
}