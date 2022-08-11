import React from "react";
import Select from "./Select";
import { ComponentStory, ComponentMeta } from '@storybook/react'

export default {
  title: "数据录入/Select",
  component: Select,
  parameters: {
    docs: {
      description: {
        component: "### 下拉选择器",
      },
    },
  },
} as ComponentMeta<typeof Select>

const defaultSelectTpl: ComponentStory<typeof Select> = (args) => {
  return (
    <>
      <Select></Select>
    </>
  );
};
export const defaultSelect = defaultSelectTpl.bind({});
defaultSelect.args = {
  percent: 59,
};
