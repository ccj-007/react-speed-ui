import React from "react";
import Test from "./Test";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import PageHeader from "../PageHeader";

export default {
  title: "模板/Test",
  component: Test,
  parameters: {
    docs: {
      description: {
        component: "### 组件模板",
      },
    },
  },
} as ComponentMeta<typeof Test>;

const defaultTestTpl: ComponentStory<typeof Test> = () => {
  return (
    <>
      <PageHeader title="基本使用" />
      Test storybook
    </>
  );
};

export const defaultTest = defaultTestTpl.bind({});
defaultTest.args = {};
