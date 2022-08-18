import React from "react";
import Radio from "./Radio";
import { action } from "@storybook/addon-actions";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import PageHeader from "../PageHeader";

export default {
  title: "模板/Radio",
  component: Radio,
  parameters: {
    docs: {
      description: {
        component: "### 组件模板",
      },
    },
  },
} as ComponentMeta<typeof Radio>;

/**
 * 展示面板
 */
const defaultRadioTpl: ComponentStory<typeof Radio> = (args) => {
  return (
    <>
      <PageHeader title="基本使用" />
      Radio storybook
      <Radio></Radio>
    </>
  );
};

/**
 * 参数面板
 */
export const defaultRadio = defaultRadioTpl.bind({});
defaultRadio.args = {};
