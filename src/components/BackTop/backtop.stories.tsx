import React from "react";
import BackTop from "./BackTop";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { PageHeader } from "../index";

export default {
  title: "定位/BackTop 回到顶部",
  component: BackTop,
  parameters: {
    docs: {
      description: {
        component: "### 返回页面顶部的操作按钮",
      },
    },
  },
} as ComponentMeta<typeof BackTop>;

/**
 * 展示面板
 */
const defaultBackTopTpl: ComponentStory<typeof BackTop> = (args) => {
  return (
    <>
      <PageHeader title="基本使用" />
      <BackTop ></BackTop>
      <div style={{ height: '400px', background: '#f4f4f4', overflow: "auto" }}>
        <>
          {
            Array(30).fill('content......').map(text => {
              return <div>{text}</div>
            })
          }
        </>
      </div>
    </>
  );
};

/**
 * 参数面板
 */
export const defaultBackTop = defaultBackTopTpl.bind({});
defaultBackTop.args = {};
