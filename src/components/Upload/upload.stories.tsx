import React from "react";
import Upload, { UploadFile } from "./upload";
import { action } from "@storybook/addon-actions";
import { ComponentStory, ComponentMeta } from '@storybook/react'
export default {
  title: "数据录入/Upload",
  component: Upload,
} as ComponentMeta<typeof Upload>
const defaultFileList: UploadFile[] = [
  {
    uid: "123",
    size: 1234,
    name: "hello.md",
    status: "uploading",
    percent: 30,
  },
  { uid: "122", size: 1234, name: "xyz.md", status: "success", percent: 30 },
  { uid: "121", size: 1234, name: "eyiha.md", status: "error", percent: 30 },
];

const defaultUploadTpl: ComponentStory<typeof Upload> = (args) => {
  return (
    <div style={{ width: "auto" }}>
      <Upload
        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
        onChange={action("changed")}
        onRemove={action("removed")}
        name="fileName"
        defaultFileList={defaultFileList}
      ></Upload>
    </div>
  );
};


const dragUploadTpl: ComponentStory<typeof Upload> = (args) => {
  return (
    <div style={{ width: "auto" }}>
      <Upload
        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
        onChange={action("changed")}
        onRemove={action("removed")}
        name="fileName"
        defaultFileList={defaultFileList}
        drag
      ></Upload>
    </div>
  );
};

export const defaultUpload = defaultUploadTpl.bind({});
defaultUpload.args = {};

export const dragUpload = dragUploadTpl.bind({});
dragUpload.args = {};
