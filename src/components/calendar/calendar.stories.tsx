import React from "react";
import Calendar from "./Calendar";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { PageHeader } from "../index";

export default {
  title: "模板/Calendar",
  component: Calendar,
  parameters: {
    docs: {
      description: {
        component: "### 组件模板",
      },
    },
  },
} as ComponentMeta<typeof Calendar>;

/**
 * 展示面板
 */
const defaultcalendarTpl: ComponentStory<typeof Calendar> = (args) => {
  return (
    <>
      <PageHeader title="基本使用" />
      <Calendar></Calendar>
    </>
  );
};

/**
 * 参数面板
 */
export const defaultcalendar = defaultcalendarTpl.bind({});
defaultcalendar.args = {};
