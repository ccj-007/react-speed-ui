import React from "react";
import Table from "./Table";
import { action } from "@storybook/addon-actions";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import PageHeader from "../PageHeader";

export default {
  title: "数据展示/Table",
  component: Table,
  parameters: {
    docs: {
      description: {
        component: "### 表格",
      },
    },
  },
} as ComponentMeta<typeof Table>;

/**
 * 展示面板
 */
const defaultTableTpl: ComponentStory<typeof Table> = (args) => {
  return (
    <>
      <PageHeader title="基本使用" />
      <Table></Table>
    </>
  );
};

/**
 * 参数面板
 */
export const defaultTable = defaultTableTpl.bind({});
defaultTable.args = {};
