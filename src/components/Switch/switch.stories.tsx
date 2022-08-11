import React from "react";
import Switch from "./Switch";
import { ComponentStory, ComponentMeta } from '@storybook/react'

export default {
  title: "数据录入/Switch",
  component: Switch,
  parameters: {
    docs: {
      description: {
        component: "### 切换器",
      },
    },
  },
} as ComponentMeta<typeof Switch>

const defaultSwitchTpl: ComponentStory<typeof Switch> = (args) => {
  return (
    <>
      <Switch></Switch>
    </>
  );
};
export const defaultSwitch = defaultSwitchTpl.bind({});
defaultSwitch.args = {
  percent: 59,
};
