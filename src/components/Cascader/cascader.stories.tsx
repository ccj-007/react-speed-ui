import React from "react";
import Cascader from "./Cascader";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { PageHeader } from "../index";

export default {
  title: "模板/Cascader",
  component: Cascader,
  parameters: {
    docs: {
      description: {
        component: "### 组件模板",
      },
    },
  },
} as ComponentMeta<typeof Cascader>;

/**
 * 展示面板
 */
const defaultCascaderTpl: ComponentStory<typeof Cascader> = (args) => {
  return (
    <>
      <PageHeader title="基本使用" />
      <Cascader></Cascader>
    </>
  );
};

/**
 * 参数面板
 */
export const defaultCascader = defaultCascaderTpl.bind({});
defaultCascader.args = {};
