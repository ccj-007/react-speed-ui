import React from "react";
import Alert, { AlertProps } from "./Alert";
import Button from "../Button/Button";

export default {
  title: "反馈/Alert",
  component: Alert,
  parameters: {
    docs: {
      description: {
        component: "### 警告提示，展现需要关注的信息。",
      },
    },
  },
};

export const AlertWithButton: React.FC<AlertProps> = (props) => {
  let { alertType, title, content } = props;
  let [isOpen, setIsOpen] = React.useState<boolean>(false);

  return (
    <div style={{ padding: "20px" }}>
      <Button btnType={alertType} onClick={() => setIsOpen(true)}>
        {alertType} alert
      </Button>
      <Alert
        isOpen={isOpen}
        title={title}
        alertType={alertType}
        content={content}
        closeAlert={() => setIsOpen(false)}
        openAlert={() => setIsOpen(true)}
      ></Alert>
    </div>
  );
};

export const AlertWithColor = () => {
  return (
    <div style={{ display: "flex" }}>
      <AlertWithButton
        alertType="primary"
        title="我是标准色"
        content="我爱摇摆，我爱摇摆"
      ></AlertWithButton>
      <AlertWithButton
        alertType="success"
        title="我是绿色"
        content="我爱摇摆，我爱摇摆"
      ></AlertWithButton>
      <AlertWithButton
        alertType="danger"
        title="我是红色"
        content="我爱摇摆，我爱摇摆"
      ></AlertWithButton>
      <AlertWithButton
        alertType="warning"
        title="我是黄色"
        content="我爱摇摆，我爱摇摆"
      ></AlertWithButton>
    </div>
  );
};
