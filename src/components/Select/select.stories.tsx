import React from "react";
import Select from "./Select";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { PageHeader } from "../index";

export default {
  title: "模板/Select",
  component: Select,
  parameters: {
    docs: {
      description: {
        component: "### 组件模板",
      },
    },
  },
} as ComponentMeta<typeof Select>;

/**
 * 展示面板
 */
const defaultSelectTpl: ComponentStory<typeof Select> = (args) => {
  return (
    <>
      <PageHeader title="基本使用" />
      <Select></Select>
    </>
  );
};

/**
 * 参数面板
 */
export const defaultSelect = defaultSelectTpl.bind({});
defaultSelect.args = {};
