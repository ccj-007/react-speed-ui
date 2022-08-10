import React from "react";
import Icon from "../Icon/Icon";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { UploadFile } from "./Upload";
import Progress from "../Progress/Progress";

interface UploadListProps {
  /** 文件集合 */
  fileList: UploadFile[];
  /** 删除后的回调 */
  onRemove?: (_file: UploadFile) => void;
}

/**
 *  UploadList 文件上传列表组件
 */
const UploadList: React.FC<UploadListProps> = (props) => {
  const { fileList, onRemove } = props;

  console.log(fileList);

  return (
    <ul>
      {fileList &&
        fileList.length > 0 &&
        fileList.map((item: UploadFile) => {
          return (
            <li className="viking-upload-list-item" key={item.uid}>
              <span className={`file-name file-name-${item.status}`}>
                <Icon icon={solid("at")} size="1x" color="#0d6efd"></Icon>
                <span>{item.name}</span>
              </span>

              <span className="file-status">
                {(item.status === "uploading" || item.status === "ready") && (
                  <Icon icon={solid("spinner")} spin theme="primary" />
                )}
                {item.status === "success" && (
                  <Icon icon={solid("check-circle")} theme="success" />
                )}
                {item.status === "error" && (
                  <Icon icon={solid("times-circle")} theme="danger" />
                )}
              </span>
              <span className="file-actions">
                <Icon
                  icon={solid("times")}
                  onClick={() => {
                    onRemove && onRemove(item);
                  }}
                />
              </span>
              {item.status === "uploading" && (
                <Progress percent={item.percent || 0} />
              )}
            </li>
          );
        })}
    </ul>
  );
};

export default UploadList;
