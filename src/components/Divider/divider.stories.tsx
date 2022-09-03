import React from "react";
import Divider from "./Divider";
import { ComponentStory, ComponentMeta } from '@storybook/react'
import PageHeader from "../PageHeader";

export default {
  title: "布局/Divider",
  component: Divider,
  parameters: {
    docs: {
      description: {
        component: "### 用于段落的划分界限",
      },
    },
  },
} as ComponentMeta<typeof Divider>

const defaultDividerTpl: ComponentStory<typeof Divider> = (args) => {
  const { orientation } = args;

  return (
    <>
      <PageHeader title='实线居中'></PageHeader>
      <p>
        Lorem idivsum dolor sit amet, consectetur adipiscing elit. Sed nonne
        merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen,
        quo modo.
      </p>
      <Divider orientation={orientation}>Center Text</Divider>

      <PageHeader title='虚线居中'></PageHeader>
      <p>
        Lorem idivsum dolor sit amet, consectetur adipiscing elit. Sed nonne
        merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen,
        quo modo.
      </p>
      <Divider orientation="center" dashed>
        Dashed Center Text
      </Divider>

      <PageHeader title='对齐左侧'></PageHeader>
      <p>
        Lorem idivsum dolor sit amet, consectetur adipiscing elit. Sed nonne
        merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen,
        quo modo.
      </p>
      <Divider orientation="left">Left Text</Divider>

      <PageHeader title='对齐右侧'></PageHeader>
      <p>
        Lorem idivsum dolor sit amet, consectetur adipiscing elit. Sed nonne
        merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen,
        quo modo.
      </p>
      <Divider orientation="right">Right Text</Divider>

      <PageHeader title='指定偏移'></PageHeader>
      <p>
        Lorem idivsum dolor sit amet, consectetur adipiscing elit. Sed nonne
        merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen,
        quo modo.
      </p>
      <Divider orientation="left" orientationMargin={300}>
        Left Text margin
      </Divider>


      <PageHeader title='竖向对齐'></PageHeader>

      <div style={{ display: "flex", justifyContent: "flex-start" }}>
        Text
        <Divider type="vertical" />
        <a href="#">Link</a>
        <Divider type="vertical" />
        <a href="#">Link</a>
      </div>
    </>
  );
};
export const defaultDivider = defaultDividerTpl.bind({});
defaultDivider.argTypes = {
  orientation: {
    options: ["center", "left", "right"],
    control: { type: "radio" },
  },
};
