import React from "react";
import Layout from "./index";
import PageHeader from "../PageHeader";
import { ComponentStory, ComponentMeta } from "@storybook/react";
const { Header, Content, Footer, Sider } = Layout;

export default {
  title: "布局/Layout 布局",
  component: Layout,
  parameters: {
    docs: {
      description: {
        component: "### 页面布局",
      },
    },
  },
} as ComponentMeta<typeof Layout>;

const LayoutITpl: ComponentStory<typeof Layout> = () => {
  return (
    <>
      <PageHeader title="上中下结构"></PageHeader>
      <Layout>
        <Header>Header</Header>
        <Content>Content</Content>
        <Footer>Footer</Footer>
      </Layout>
    </>
  );
};
const LayoutIITpl: ComponentStory<typeof Layout> = () => {
  return (
    <>
      <PageHeader title="四宫格——左侧菜单"></PageHeader>

      <Header>Header</Header>
      <Layout>
        <Sider>Sider</Sider>
        <Content>Content</Content>
      </Layout>
      <Footer>Footer</Footer>
    </>
  );
};
const LayoutIIITpl: ComponentStory<typeof Layout> = () => {
  return (
    <>
      <PageHeader title="四宫格——右侧菜单"></PageHeader>

      <Header>Header</Header>
      <Layout>
        <Content>Content</Content>
        <Sider>Sider</Sider>
      </Layout>
      <Footer>Footer</Footer>
    </>
  );
};

const LayoutIVTpl: ComponentStory<typeof Layout> = () => {
  return (
    <>
      <PageHeader title="四宫格——菜单独占"></PageHeader>

      <Sider>Sider</Sider>
      <Layout>
        <Header>Header</Header>
        <Content>Content</Content>
        <Footer>Footer</Footer>
      </Layout>
    </>
  );
};

export const LayoutI = LayoutITpl.bind({});
export const LayoutII = LayoutIITpl.bind({});
export const LayoutIII = LayoutIIITpl.bind({});
export const LayoutIV = LayoutIVTpl.bind({});
