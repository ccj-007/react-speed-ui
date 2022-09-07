import React from "react";
import Empty from "./Empty";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { PageHeader } from "../index";

export default {
  title: "数据展示/Empty 空状态",
  component: Empty,
  parameters: {
    docs: {
      description: {
        component: "### 空状态的展示占位图",
      },
    },
  },
} as ComponentMeta<typeof Empty>;

/**
 * 展示面板
 */
const defaultEmptyTpl: ComponentStory<typeof Empty> = (args) => {
  return (
    <>
      <PageHeader title="基本使用" />
      <Empty></Empty>
    </>
  );
};

/**
 * 参数面板
 */
export const defaultEmpty = defaultEmptyTpl.bind({});
defaultEmpty.args = {};
