import React from "react";
import Avatar from "./Avatar";
import { action } from "@storybook/addon-actions";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import PageHeader from "../PageHeader";

export default {
  title: "模板/Avatar",
  component: Avatar,
  parameters: {
    docs: {
      description: {
        component: "### 组件模板",
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
      <PageHeader title="基本使用" />
      <Avatar></Avatar>
    </>
  );
};

/**
 * 参数面板
 */
export const defaultAvatar = defaultAvatarTpl.bind({});
defaultAvatar.args = {};
