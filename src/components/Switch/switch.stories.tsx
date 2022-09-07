import React from "react";
import Switch from "./Switch";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import PageHeader from "../PageHeader";

export default {
  title: "数据录入/Switch 切换器",
  component: Switch,
  parameters: {
    docs: {
      description: {
        component: "### 切换器",
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
      <Switch onClick={args.onClick} ></Switch>

      <PageHeader title="大小尺寸" />
      <Switch></Switch>
      <br></br>

      <Switch size={args.size} checked={true}></Switch>

      <PageHeader title="默认开启" />
      <Switch size={args.size} checked={true}></Switch>

      <PageHeader title="禁用" />
      <Switch disabled checked={false}></Switch>
    </>
  );
};

/**
 * 参数面板
 */
export const defaultSwitch = defaultSwitchTpl.bind({});
defaultSwitch.args = {
  onClick: () => { console.log("clicked") },
  size: 'small'
};
