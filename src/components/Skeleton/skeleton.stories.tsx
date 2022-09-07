import React from "react";
import Skeleton from "./Skeleton";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { PageHeader } from "../index";

export default {
  title: "反馈/Skeleton 骨架屏",
  component: Skeleton,
  parameters: {
    docs: {
      description: {
        component: "### 在需要等待加载内容的位置提供一个占位图形组合",
      },
    },
  },
} as ComponentMeta<typeof Skeleton>;

/**
 * 展示面板
 */
const defaultSkeletonTpl: ComponentStory<typeof Skeleton> = (args) => {
  return (
    <>
      <PageHeader title="基本使用" />
      <Skeleton kid='a'></Skeleton>

      <PageHeader title="激活动画" />
      <Skeleton kid='b' isActive></Skeleton>

      <PageHeader title="其他样式" />
      <Skeleton kid='c' isActive type='list'></Skeleton>
    </>
  );
};

/**
 * 参数面板
 */
export const defaultSkeleton = defaultSkeletonTpl.bind({});
defaultSkeleton.args = {};
