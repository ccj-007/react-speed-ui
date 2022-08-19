import React from "react";
import Card from "./Card";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import PageHeader from "../PageHeader";

export default {
  title: "数据展示/Card",
  component: Card,
  parameters: {
    docs: {
      description: {
        component: "### 承载内容的卡片容器",
      },
    },
  },
} as ComponentMeta<typeof Card>;

/**
 * 展示面板
 */
const defaultCardTpl: ComponentStory<typeof Card> = (args) => {
  return (
    <>
      <PageHeader title="基本使用" />
      <Card headerRightContent={<a href='www.baidu.com'>More</a>}>
        <p>content ......</p>
        <p>content ......</p>
        <p>content ......</p>
        <p>content ......</p>
        <p>content ......</p>
      </Card>

      <PageHeader title="不同布局" />
      <Card showFooter={false} headerTitle='custom title'>
        <p>content ......</p>
        <p>content ......</p>
        <p>content ......</p>
      </Card>


      <PageHeader title="是否浮动" />
      <Card showFooter={false} headerTitle='custom title' float>
        <p>content ......</p>
        <p>content ......</p>
        <p>content ......</p>
      </Card>
    </>
  );
};

/**
 * 参数面板
 */
export const defaultCard = defaultCardTpl.bind({});
defaultCard.args = {};
