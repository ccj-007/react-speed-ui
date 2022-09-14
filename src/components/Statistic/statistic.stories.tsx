import React from "react";
import Statistic from "./Statistic";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { PageHeader } from "../index";

export default {
  title: "数据展示/Statistic 统计数值",
  component: Statistic,
  parameters: {
    docs: {
      description: {
        component: "### 用于统计数据",
      },
    },
  },
} as ComponentMeta<typeof Statistic>;

/**
 * 展示面板
 */
const defaultStatisticTpl: ComponentStory<typeof Statistic> = (args) => {
  return (
    <>
      <PageHeader title="基本使用" />
      <Statistic title="Active Users" value={112893} />
    </>
  );
};

/**
 * 参数面板
 */
export const defaultStatistic = defaultStatisticTpl.bind({});
defaultStatistic.args = {};
