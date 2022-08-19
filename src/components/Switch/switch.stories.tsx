import React from "react";
import Switch from "./Switch";
import { action } from "@storybook/addon-actions";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import PageHeader from "../PageHeader";

export default {
  title: "数据录入/Switch",
  component: Switch,
  parameters: {
    docs: {
      description: {
        component: "### 组件模板",
      },
    },
  },
} as ComponentMeta<typeof Switch>;

/**
 * 展示面板
 */
const defaultSwitchTpl: ComponentStory<typeof Switch> = (args) => {
  return (
    <>
      <PageHeader title="基本使用" />
      <Switch onClick={action('sadasd')}></Switch>

      <PageHeader title="大小尺寸" />
      <Switch></Switch>
      <br></br>
      <Switch size='small'></Switch>
    </>
  );
};

/**
 * 参数面板
 */
export const defaultSwitch = defaultSwitchTpl.bind({});
defaultSwitch.args = {};
