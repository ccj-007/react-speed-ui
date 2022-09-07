import React from "react";
import Result from "./Result";
import { action } from "@storybook/addon-actions";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { PageHeader, Button } from "../index";

export default {
  title: "反馈/Result 结果",
  component: Result,
  parameters: {
    docs: {
      description: {
        component: "### 用于反馈一系列操作任务的处理结果。",
      },
    },
  },
} as ComponentMeta<typeof Result>;

/**
 * 展示面板
 */
const defaultResultTpl: ComponentStory<typeof Result> = (args) => {
  return (
    <>
      <PageHeader title="成功状态" />
      <Result status="success"
        title="Successfully Purchased Cloud Server ECS!"
        subTitle="Order number: 2017182818828182881 Cloud server configuration takes 1-5 minutes, please wait."
        extra={[
          <Button key="console">
            Go Console
          </Button>,
          <Button key="buy">Buy Again</Button>,
        ]}></Result>

      <PageHeader title="失败状态" />
      <Result
        status="error"
        title="Submission Failed"
        subTitle="Please check and modify the following information before resubmitting."
        extra={<span>The content you submitted has the following error:</span>}
      >
      </Result>

      <PageHeader title="警告状态" />
      <Result
        status="warning"
        title="There are some problems with your operation."
        extra={
          <Button key="console">
            Go Console
          </Button>
        }
      />
      <PageHeader title="信息状态" />
      <Result
        status="info"
        title="Your operation has been executed"
        extra={
          <Button key="console">
            Go Console
          </Button>
        }
      />
    </>
  );
};

/**
 * 参数面板
 */
export const defaultResult = defaultResultTpl.bind({});
defaultResult.args = {};
