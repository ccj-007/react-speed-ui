import React from "react";
import Container from "./Container";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { PageHeader } from "../index";

export default {
  title: "布局/Container 容器",
  component: Container,
  parameters: {
    docs: {
      description: {
        component: "### 按照布局规则的包裹容器",
      },
    },
  },
} as ComponentMeta<typeof Container>;

/**
 * 展示面板
 */
const defaultContainerTpl: ComponentStory<typeof Container> = (args) => {
  return (
    <>
      <PageHeader title="基本使用" />
      <Container></Container>
    </>
  );
};

/**
 * 参数面板
 */
export const defaultContainer = defaultContainerTpl.bind({});
defaultContainer.args = {};
