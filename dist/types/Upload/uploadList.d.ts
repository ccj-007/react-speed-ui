import React from "react";
import { UploadFile } from "./upload";
interface UploadListProps {
    fileList: UploadFile[];
    onRemove?: (_file: UploadFile) => void;
}
declare const UploadList: React.FC<UploadListProps>;
export default UploadList;
