import React from "react";
import Notification from "./Notification";
import { action } from "@storybook/addon-actions";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import PageHeader from "../PageHeader";
import Button from "../Button";

export default {
  title: "模板/Notification",
  component: Notification,
  parameters: {
    docs: {
      description: {
        component: "### 全局展示通知提醒信息",
      },
    },
  },
} as ComponentMeta<typeof Notification>;

/**
 * 展示面板
 */
const defaultNotificationTpl: ComponentStory<typeof Notification> = (args) => {
  const [open, setOpen] = React.useState(false)
  const handleClick = () => {
    setOpen(!open)
  }
  const noticeData = {
    title: 'aaa',
    content: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
  }
  return (
    <>
      <PageHeader title="基本使用" />
      <Notification open={open} data={noticeData} width={200} height={100} position='tc'> </Notification>
      <Button onClick={handleClick}>open notification</Button>
    </>
  );
};

/**
 * 参数面板
 */
export const defaultNotification = defaultNotificationTpl.bind({});
defaultNotification.args = {};
