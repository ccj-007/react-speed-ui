import React from "react";
import { action } from "@storybook/addon-actions";
import Button from "./Button";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import PageHeader from "../PageHeader";

export default {
  title: "通用/Button",
  component: Button,
  parameters: {
    docs: {
      description: {
        component: "### 按钮用于开始一个即时操作",
      },
    },
  },
} as ComponentMeta<typeof Button>;

const defaultButtonTpl: ComponentStory<typeof Button> = () => (
  <>
    <PageHeader title='基本使用' />
    <Button onClick={action("clicked")}>default button</Button>
  </>
);

const buttonWithSizeTpl: ComponentStory<typeof Button> = (args: any) => (
  <>
    <PageHeader title='不同尺寸' />
    <Button size={args.size}>{args.children}</Button> &nbsp;&nbsp;
    <Button size="sm">small button</Button>
  </>
);

const buttonWithTypeTpl: ComponentStory<typeof Button> = (args: any) => (
  <>
    <PageHeader title='不同主题' />
    <Button btnType={args.btnType}>{args.children}</Button> &nbsp;&nbsp;
    <Button btnType="danger">danger button</Button> &nbsp;&nbsp;
    <Button btnType="link" href="https://google.com">
      link button
    </Button>
  </>
);

export const defaultButton = defaultButtonTpl.bind({});
defaultButton.args = {};

export const buttonWithSize = buttonWithSizeTpl.bind({});
buttonWithSize.args = {
  size: "lg",
  children: "large button",
};

export const buttonWithType = buttonWithTypeTpl.bind({});
buttonWithType.args = {
  btnType: "primary",
  children: "primary button",
};
