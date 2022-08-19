import React, { useState } from "react";
import Rate from "./Rate";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import PageHeader from "../PageHeader";

export default {
  title: "数据录入/Rate",
  component: Rate,
  parameters: {
    docs: {
      description: {
        component: "### 评分组件",
      },
    },
  },
} as ComponentMeta<typeof Rate>;

/**
 * 展示面板
 */
const defaultRateTpl: ComponentStory<typeof Rate> = (args) => {
  let { count, startCount, onChange } = args;
  return (
    <>
      <PageHeader title="基本使用" />
      <Rate
        allowClear
        count={count}
        startCount={startCount}
        onChange={onChange}
      ></Rate>
    </>
  );
};

const disabledRateTpl: ComponentStory<typeof Rate> = (args) => {
  let { startCount } = args;
  return (
    <>
      <PageHeader title="禁止选择" />
      <Rate count={7} startCount={startCount} disabled></Rate>
    </>
  );
};

const textRateTpl: ComponentStory<typeof Rate> = (args) => {
  let { count } = args;
  const desc = ["terrible", "bad", "normal", "good", "wonderful"];
  const [startCount, setStartCount] = useState(3);
  const handleVal = (index) => {
    setStartCount(index);
  };
  return (
    <>
      <PageHeader title="显示文本" />
      <Rate count={count} startCount={startCount} onChange={handleVal}>
        {desc[startCount]}
      </Rate>

      <PageHeader title="是否可清除" />
      <Rate allowClear count={count} startCount={startCount}>
        allowClear: true
      </Rate>

      <Rate count={count} startCount={startCount}>
        allowClear: false
      </Rate>
    </>
  );
};

const patternRateTpl: ComponentStory<typeof Rate> = (args) => {
  let { startCount } = args;
  return (
    <>
      <PageHeader title="其他图案" />
      <Rate count={7} startCount={startCount}></Rate>
      <Rate
        count={7}
        startCount={startCount}
        iconfontClassName={"icon-Star"}
        iconfontClassNameActive={"icon-Star-active"}
      ></Rate>
      <Rate
        count={7}
        startCount={startCount}
        iconfontClassName={"icon-money"}
        iconfontClassNameActive={"icon-money-active"}
      ></Rate>
      <Rate
        count={7}
        startCount={startCount}
        iconfontClassName={"icon-ok-circle"}
        iconfontClassNameActive={"icon-ok-circle-active"}
      ></Rate>

      <PageHeader title="颜色与大小" />
      <Rate
        count={7}
        startCount={startCount}
        iconfontClassName={"icon-ok-circle"}
        iconfontClassNameActive={"icon-ok-circle-active"}
        color={"red"}
      ></Rate>
      <Rate
        count={7}
        startCount={startCount}
        iconfontClassName={"icon-money"}
        iconfontClassNameActive={"icon-money-active"}
        size={"42px"}
      ></Rate>
    </>
  );
};

/**
 * 参数面板
 */
export const defaultRate = defaultRateTpl.bind({});
defaultRate.args = {
  count: 5,
  startCount: 2,
  onChange: (sel: number) => {
    console.log(sel);
  },
};

export const disabledRate = disabledRateTpl.bind({});
disabledRate.args = {
  startCount: 4,
  disabled: true,
};

export const textRate = textRateTpl.bind({});
textRate.args = {
  count: 5,
};

export const patternRate = patternRateTpl.bind({});
patternRate.args = {
  count: 5,
};
