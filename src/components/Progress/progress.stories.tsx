import React from "react";
import Progress from "./Progress";
import { action } from "@storybook/addon-actions";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import PageHeader from "../PageHeader";
import Button from "../Button";
import Space from "../Space";

export default {
  title: "数据展示/Progress 进度条",
  component: Progress,
  parameters: {
    docs: {
      description: {
        component: "### 表达某个进度节点的动画效果",
      },
    },
  },
} as ComponentMeta<typeof Progress>;

const defaultProgressTpl: ComponentStory<typeof Progress> = (args) => {
  const [state, setstate] = React.useState(args.percent);
  const handleChange = (num: number) => {
    if (num > 0 && state + 10 <= 100) {
      setstate(state + 10);
    }
    if (num < 0 && state - 10 >= 0) {
      setstate(state - 10);
    }
  };
  return (
    <>
      <PageHeader title="基本使用"></PageHeader>
      <Space direction="vertical">
        <Progress percent={10} placement="left"></Progress>
        <Progress percent={40} placement="center" innerColor="red"></Progress>
        <Progress percent={70} placement="right" innerColor="green"></Progress>
      </Space>
      <PageHeader title="圆环使用"></PageHeader>
      <Space>
        <Progress percent={args.percent} isCircle></Progress>
        <Progress percent={90} isCircle dw={10} r={100} innerColor='red'></Progress>
      </Space>
      <PageHeader title="按钮控制"></PageHeader>
      <Space direction="vertical">
        <Progress percent={state} isCircle dw={10} r={100} ></Progress>
        <Progress percent={state}></Progress>
        <Space>
          <Button onClick={() => handleChange(-10)}>-10</Button>
          <Button onClick={() => handleChange(10)}>+10</Button>
        </Space>
      </Space>
      <PageHeader title="自定义文案"></PageHeader>
      <Progress percent={90} isCircle dw={10} r={100} innerColor='yellow' cirText="唱、跳、篮球、rap, 大家好我是IKUN" cirTextStyle={{ fontSize: '16px' }}></Progress>
    </>
  );
};
export const defaultProgress = defaultProgressTpl.bind({});
defaultProgress.args = {
  percent: 60,
};
