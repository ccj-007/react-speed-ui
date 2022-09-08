import React from "react";
import Container from "./Container";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { PageHeader, Button } from "../index";

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
      <PageHeader title="水平居中" />
      <Container align='center' direction="row" style={{ width: '600px', height: '200px', background: '#f4f4f4' }}>
        <Button>Container</Button>
        <Button>Container</Button>
      </Container>

      <PageHeader title="水平均分" />
      <Container align='around' style={{ width: '600px', height: '200px', background: '#f4f4f4' }}>
        <Button>Container</Button>
        <Button>Container</Button>
      </Container>

      <PageHeader title="水平两端对齐" />
      <Container align='between' style={{ width: '600px', height: '200px', background: '#f4f4f4' }}>
        <Button>Container</Button>
        <Button>Container</Button>
      </Container>


      <PageHeader title="垂直居中" />
      <Container align='center' direction="column" style={{ width: '600px', height: '200px', background: '#f4f4f4' }}>
        <Button>Container</Button>
        <Button>Container</Button>
      </Container>

      <PageHeader title="垂直均分" />
      <Container align='around' direction="column" style={{ width: '600px', height: '200px', background: '#f4f4f4' }}>
        <Button>Container</Button>
        <Button>Container</Button>
      </Container>

      <PageHeader title="垂直两端对齐" />
      <Container align='between' direction="column" style={{ width: '600px', height: '200px', background: '#f4f4f4' }}>
        <Button>Container</Button>
        <Button>Container</Button>
      </Container>
    </>
  );
};

/**
 * 参数面板
 */
export const defaultContainer = defaultContainerTpl.bind({});
defaultContainer.args = {};
