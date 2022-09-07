import React from "react";
import Avatar from "./Avatar";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Icon, PageHeader, Space, Badge } from '../index'
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
export default {
  title: "数据展示/Avatar 头像",
  component: Avatar,
  parameters: {
    docs: {
      description: {
        component: "### 用来代表用户或事物，支持图片、图标或字符展示。",
      },
    },
  },
} as ComponentMeta<typeof Avatar>;

/**
 * 展示面板
 */
const defaultAvatarTpl: ComponentStory<typeof Avatar> = (args) => {
  return (
    <>
      <PageHeader title="基本使用（字符、icon、图片）" />
      <Space>
        <Avatar text='User'></Avatar>
        <Avatar icon={<Icon icon={solid("user")} size="1x" color="#fff"></Icon>}></Avatar>
        <Avatar style={{ width: '30px', height: '30px' }} src='https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F201708%2F07%2F20170807114113_4efNW.thumb.1000_0.jpeg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1665131372&t=27759fd5e80cffad11405f01579fb6a1'></Avatar>
      </Space>

      <PageHeader title="不同尺寸" />
      <Space><Avatar style={{ background: 'blue' }} text='KINE'></Avatar>
        <Avatar style={{ background: 'green' }} size={40} text='A'></Avatar>
        <Avatar style={{ background: 'orange' }} size={60} icon={<Icon icon={solid("user")} size="2x" color="#fff"></Icon>} ></Avatar></Space>
      <PageHeader title="不同形状" />
      <Space> <Avatar shape="circle">Y</Avatar>
        <Avatar shape="circle" style={{ background: 'green' }} size={40} text='A'></Avatar>
        <Avatar shape="circle" style={{ background: 'orange' }} size={60} icon={<Icon icon={solid("user")} size="2x" color="#fff"></Icon>} ></Avatar></Space>
      <PageHeader title="带徽标的头像" />
      <Badge>
        <Avatar></Avatar>
      </Badge>
    </>
  );
};

/**
 * 参数面板
 */
export const defaultAvatar = defaultAvatarTpl.bind({});
defaultAvatar.args = {};
