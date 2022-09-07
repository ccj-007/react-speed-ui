import React from "react";
import Anchor from "./Anchor";
import { action } from "@storybook/addon-actions";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { PageHeader } from "../index";

export default {
  title: "定位/Anchor 锚点",
  component: Anchor,
  parameters: {
    docs: {
      description: {
        component: "### 用于跳转到页面指定位置",
      },
    },
  },
} as ComponentMeta<typeof Anchor>;

/**
 * 展示面板
 */
const defaultAnchorTpl: ComponentStory<typeof Anchor> = (args) => {
  return (
    <>
      <PageHeader title="基本使用" />
      <Anchor></Anchor>
    </>
  );
};

/**
 * 参数面板
 */
export const defaultAnchor = defaultAnchorTpl.bind({});
defaultAnchor.args = {};
