import React from "react";
import { action } from "@storybook/addon-actions";
import Button from "./button";
import { ComponentStory, ComponentMeta } from '@storybook/react'
export default {
  title: "通用/Button",
  component: Button,
} as ComponentMeta<typeof Button>

const defaultButtonTpl: ComponentStory<typeof Button> = () => (
  <Button onClick={action("clicked")}>default button</Button>
);

const buttonWithSizeTpl: ComponentStory<typeof Button> = (args: any) => (
  <>
    <Button size={args.size}>{args.children}</Button>
    <Button size="sm">small button</Button>
  </>
);

const buttonWithTypeTpl: ComponentStory<typeof Button> = (args: any) => (
  <>
    <Button btnType={args.btnType}>{args.children}</Button>
    <Button btnType="danger">danger button</Button>
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
