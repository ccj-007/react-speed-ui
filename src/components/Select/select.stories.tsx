import React from "react";
import Select from "./Select";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { PageHeader } from "../index";

const { Option } = Select

export default {
  title: "数据录入/Select 下拉选择器",
  component: Select,
  parameters: {
    docs: {
      description: {
        component: "### 下拉选择器",
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
      <Select defaultValue="option one">
        <Option>option one</Option>
        <Option>option two</Option>
        <Option>option three</Option>
        <Option>option four</Option>
      </Select>
    </>
  );
};

/**
 * 参数面板
 */
export const defaultSelect = defaultSelectTpl.bind({});
defaultSelect.args = {};
