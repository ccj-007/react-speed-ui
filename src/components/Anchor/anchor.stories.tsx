import React from "react";
import Anchor, { type jumpObjType } from "./Anchor";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { PageHeader } from "../index";

export default {
  title: "定位/Anchor 锚点",
  component: Anchor,
  parameters: {
    docs: {
      description: {
        component: "### 用于跳转到页面指定位置",
      },
    },
  },
} as ComponentMeta<typeof Anchor>;

/**
 * 展示面板
 */
const defaultAnchorTpl: ComponentStory<typeof Anchor> = (args) => {
  let jumpObj: jumpObjType = [
    {
      queryId: "#header",
      title: "标题头部",
      key: 0,
    },
    {
      queryId: "#content",
      title: "内容区域",
      key: 1,
    },
    {
      queryId: "#content2",
      title: "内容2区域",
      key: 2,
    },
    {
      queryId: "#footer",
      title: "尾部区域",
      key: 3,
    },
  ];
  return (
    <>
      <div style={{ height: "200px", background: "#f4f4f4" }}></div>
      <Anchor jumpObj={jumpObj}></Anchor>
      <PageHeader title="标题头部" id="#header" />
      <div style={{ height: "400px", background: "#f4f4f4" }}></div>
      <PageHeader title="内容区域" id="#content" />
      <div style={{ height: "400px", background: "#f4f4f4" }}></div>
      <PageHeader title="内容2区域" id="#content2" />
      <div style={{ height: "400px", background: "#f4f4f4" }}></div>
      <PageHeader title="尾部区域" id="#footer" />
      <div style={{ height: "400px", background: "#f4f4f4" }}></div>
      <div style={{ height: "400px", background: "#fff" }}></div>

    </>
  );
};

/**
 * 参数面板
 */
export const defaultAnchor = defaultAnchorTpl.bind({});
defaultAnchor.args = {};
