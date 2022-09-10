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
  const boxRef = React.useRef<HTMLDivElement>(null)

  return (
    <>
      <PageHeader title="容器内使用" />
      <div style={{ height: '400px', background: '#f4f4f4', overflow: "auto", }} ref={boxRef}>
        <>
          {
            Array(30).fill('content......').map((text, key) => {
              return <div key={key}>{text}</div>
            })
          }
        </>
        <BackTop container={boxRef} visibilityHeight={100}>容器内 backTop</BackTop>
      </div>
      <PageHeader title="root层级" />
      <div style={{ height: '1400px', background: '#f4f4f4' }}>
      </div>
      <BackTop visibilityHeight={300}>root层级 backTop</BackTop>
    </>
  );
};

/**
 * 参数面板
 */
export const defaultBackTop = defaultBackTopTpl.bind({});
defaultBackTop.args = {};
