import React from "react";
export declare type UploadFileStatus = "ready" | "uploading" | "success" | "error";
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
    action: string;
    onProgress?: (percentage: number, file: File) => void;
    onSuccess?: (data: any, file: File) => void;
    onError?: (err: any, file: File) => void;
    beforeUpload?: (file: File) => boolean | Promise<File>;
    onChange?: (file: File) => void;
    onRemove?: (file: UploadFile) => void;
    defaultFileList?: any;
    headers?: {
        [key: string]: any;
    };
    name?: string;
    data?: {
        [key: string]: any;
    };
    withCredentials?: boolean;
    accept?: string;
    multiple?: boolean;
    drag?: boolean;
    children?: React.ReactNode;
}
declare const Upload: React.FC<UploadProps>;
export default Upload;
