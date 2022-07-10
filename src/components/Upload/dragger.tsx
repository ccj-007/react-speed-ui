import React, { FC, useState, DragEvent } from 'react'
import classNames from 'classnames'
import { Icon } from '../Icon/icon'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'
interface DraggerProps {
  onFile: (files: FileList) => void;
  children: React.ReactNode
}

export const Dragger: FC<DraggerProps> = (props) => {
  const { onFile, children } = props
  const [dragOver, setDragOver] = useState(false)
  const klass = classNames('viking-uploader-dragger', {
    'is-dragover': dragOver
  })
  const handleDrop = (e: DragEvent<HTMLElement>) => {
    e.preventDefault()
    setDragOver(false)
    onFile(e.dataTransfer.files)
  }
  const handleDrag = (e: DragEvent<HTMLElement>, over: boolean) => {
    e.preventDefault()
    setDragOver(over)
  }
  return (
    <div
      className={klass}
      onDragOver={e => { handleDrag(e, true) }}
      onDragLeave={e => { handleDrag(e, false) }}
      onDrop={handleDrop}
    >
      <Icon icon={solid('download')} size='5x' color='#ccc'></Icon>
      {children}
    </div>
  )
}

export default Dragger;