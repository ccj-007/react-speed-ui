import React from "react";
import Notification from "./Notification";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import PageHeader from "../PageHeader";
import Button from "../Button";
import Icon from '../Icon'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'
export default {
  title: "反馈/Notification 通知",
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
  const [open1, setOpen1] = React.useState<Date>(new Date())
  const [open2, setOpen2] = React.useState<Date>(new Date())
  const [open3, setOpen3] = React.useState<Date>(new Date())
  const [open4, setOpen4] = React.useState<Date>(new Date())
  const [open5, setOpen5] = React.useState<Date>(new Date())
  const [open6, setOpen6] = React.useState<Date>(new Date())
  const [open7, setOpen7] = React.useState<Date>(new Date())
  const [open8, setOpen8] = React.useState<Date>(new Date())


  const handleClick1 = () => {
    setOpen1(new Date())
  }
  const handleClick2 = () => {
    setOpen2(new Date())
  }
  const handleClick3 = () => {
    setOpen3(new Date())
  }
  const handleClick4 = () => {
    setOpen4(new Date())
  }
  const handleClick5 = () => {
    setOpen5(new Date())
  }
  const handleClick6 = () => {
    setOpen6(new Date())
  }
  const handleClick7 = () => {
    setOpen7(new Date())
  }
  const handleClick8 = () => {
    setOpen8(new Date())
  }
  const noticeErrData = {
    title: '提示',
    content: '你的余额不够请及时充值 ！'
  }
  const noticeSucData = {
    title: '提示',
    content: '你已经成功解锁财富密码 ！'
  }
  return (
    <>
      <PageHeader title="基本使用" />
      <Notification open={open1} data={noticeSucData} width={300} height={100} position={args.position} duration={2000}> </Notification>
      <Button onClick={handleClick1} btnType='danger'>顶部打开</Button>
      &nbsp; &nbsp;&nbsp; &nbsp;
      <Notification open={open2} data={noticeSucData} width={300} height={100} position="bc" duration={2000}> </Notification>
      <Button onClick={handleClick2} btnType='primary'>底部打开</Button>
      &nbsp; &nbsp;&nbsp; &nbsp;
      <Notification open={open3} data={noticeSucData} width={300} height={100} position="tl" duration={2000}> </Notification>
      <Button onClick={handleClick3} btnType='success'>左上角打开</Button>
      &nbsp; &nbsp;&nbsp; &nbsp;
      <Notification open={open4} data={noticeSucData} width={300} height={100} position="tr" duration={2000}> </Notification>
      <Button onClick={handleClick4} btnType='warning'>右上角打开</Button>
      &nbsp; &nbsp;&nbsp; &nbsp;
      <Notification open={open5} data={noticeSucData} width={300} height={100} position="bl" duration={2000}> </Notification>
      <Button onClick={handleClick5}>左下角打开</Button>
      &nbsp; &nbsp;&nbsp; &nbsp;
      <Notification open={open6} data={noticeSucData} width={300} height={100} position="br" duration={2000}> </Notification>
      <Button onClick={handleClick6}>右下角打开</Button>

      <PageHeader title="自定义尺寸" />
      <Notification open={open7} data={noticeSucData} width={600} height={300} position={args.position} duration={2000}> </Notification>
      <Button onClick={handleClick7}>自定义尺寸</Button>

      <PageHeader title="自定义Icon" />
      <Notification open={open8} data={noticeErrData} width={300} height={100} position={args.position} duration={2000} iconJSX={<Icon icon={solid('circle-xmark')} size='2x' color='#ce4c18'></Icon>}> </Notification>
      <Button onClick={handleClick8}>自定义Icon</Button>
    </>
  );
};

/**
 * 参数面板
 */
export const defaultNotification = defaultNotificationTpl.bind({});
defaultNotification.args = {
  position: 'tc',
};
