import React from "react";
import DatePicker from "./DatePicker";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { PageHeader } from "../index";

export default {
  title: "模板/DatePicker 日期选择器",
  component: DatePicker,
  parameters: {
    docs: {
      description: {
        component: "### 日期选择器",
      },
    },
  },
} as ComponentMeta<typeof DatePicker>;

/**
 * 展示面板
 */
const defaultDatePickerTpl: ComponentStory<typeof DatePicker> = (args) => {
  return (
    <>
      <PageHeader title="基本使用" />
      <DatePicker></DatePicker>
    </>
  );
};

/**
 * 参数面板
 */
export const defaultDatePicker = defaultDatePickerTpl.bind({});
defaultDatePicker.args = {};
