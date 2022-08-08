import React from "react";
import Progress from "./Progress";
import { action } from "@storybook/addon-actions";
import { ComponentStory, ComponentMeta } from '@storybook/react'
export default {
  title: "数据展示/Progress",
  component: Progress,
  parameters: {
    docs: {
      description: {
        component: "### 表达某个进度节点的动画效果",
      },
    },
  },
} as ComponentMeta<typeof Progress>

const defaultProgressTpl: ComponentStory<typeof Progress> = (args) => {
  return (
    <>
      <Progress percent={args.percent}></Progress>
    </>
  );
};
export const defaultProgress = defaultProgressTpl.bind({});
defaultProgress.args = {
  percent: 59,
};
