import React from "react";
import PageHeader from "./PageHeader";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "导航/PageHeader 头部标题",
  component: PageHeader,
  parameters: {
    docs: {
      description: {
        component: "### 页面的标题",
      },
    },
  },
} as ComponentMeta<typeof PageHeader>;

const defaultPageHeaderTpl: ComponentStory<typeof PageHeader> = (args) => {
  return <PageHeader title="我是主标题" subtitle="我是副标题"></PageHeader>;
};
export const defaultPageHeader = defaultPageHeaderTpl.bind({});
defaultPageHeader.args = {};
