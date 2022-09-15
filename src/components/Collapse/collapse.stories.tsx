import React from "react";
import Collapse from "./Collapse";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { PageHeader } from "../index";

export default {
  title: "模板/Collapse",
  component: Collapse,
  parameters: {
    docs: {
      description: {
        component: "### 组件模板",
      },
    },
  },
} as ComponentMeta<typeof Collapse>;

/**
 * 展示面板
 */
const defaultCollapseTpl: ComponentStory<typeof Collapse> = (args) => {
  return (
    <>
      <PageHeader title="基本使用" />
      <Collapse></Collapse>
    </>
  );
};

/**
 * 参数面板
 */
export const defaultCollapse = defaultCollapseTpl.bind({});
defaultCollapse.args = {};
