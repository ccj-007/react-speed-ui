import React from "react";
import Message from "./Message";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import PageHeader from "../PageHeader";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import Icon from "../Icon";

export default {
  title: "反馈/Message 消息",
  component: Message,
  parameters: {
    docs: {
      description: {
        component: "### 展示需要关注的信息(非浮层)",
      },
    },
  },
} as ComponentMeta<typeof Message>;

/**
 * 展示面板
 */
const defaultMessageTpl: ComponentStory<typeof Message> = (args) => {
  return (
    <>
      <PageHeader title="基本使用" />
      <Message type="success">迷茫会如影随形</Message>

      <PageHeader title="不同类型" />
      <Message type="success">成功好像对于命中注定的人来说真的很简单</Message>
      <Message type="info">每天被技术洪流吞没</Message>
      <Message type="error">错误是成功的基石</Message>
      <Message type="warning">黄牌警告一次</Message>

      <PageHeader title="描述" />
      <Message type="success" desc='成功提示' >成功好像对于命中注定的人来说真的很简单</Message>
      <Message type="error" desc='错误提示'>错误是成功的基石</Message>

      <PageHeader title="显示图标" />
      <Message type="success" iconJSX={<Icon icon={solid("check")} size="1x" color="green"></Icon>}>成功好像对于命中注定的人来说真的很简单</Message>
      <Message type="info" iconJSX={<Icon icon={solid("book")} size="1x" color="blue"></Icon>}>每天被技术洪流吞没</Message>
      <Message type="error" iconJSX={<Icon icon={solid("circle-xmark")} size="1x" color="red"></Icon>}>错误是成功的基石</Message>
      <Message type="warning" desc='警告提示' iconJSX={<Icon icon={solid("lock")} size="1x" color="yellow" ></Icon>}>黄牌警告一次</Message>


      <PageHeader title="可关闭" />
      <Message type="success" closable desc='成功提示' iconJSX={<Icon icon={solid("check")} size="1x" color="green" ></Icon>}>成功好像对于命中注定的人来说真的很简单</Message>
      <Message type="success" closable iconJSX={<Icon icon={solid("check")} size="1x" color="green" ></Icon>}>成功好像对于命中注定的人来说真的很简单</Message>
    </>
  );
};

/**
 * 参数面板
 */
export const defaultMessage = defaultMessageTpl.bind({});
defaultMessage.args = {};
