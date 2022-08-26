import React from "react";
import Spin from "./Spin";
import { action } from "@storybook/addon-actions";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import PageHeader from "../PageHeader";

export default {
  title: "模板/Spin",
  component: Spin,
  parameters: {
    docs: {
      description: {
        component: "### 组件模板",
      },
    },
  },
} as ComponentMeta<typeof Spin>;

/**
 * 展示面板
 */
const defaultSpinTpl: ComponentStory<typeof Spin> = (args) => {
  return (
    <>
      <PageHeader title="基本使用" />
      <Spin></Spin>
    </>
  );
};

/**
 * 参数面板
 */
export const defaultSpin = defaultSpinTpl.bind({});
defaultSpin.args = {};
