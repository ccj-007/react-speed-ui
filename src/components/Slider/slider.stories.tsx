import React, { useState } from "react";
import Slider from "./Slider";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import PageHeader from "../PageHeader";

export default {
  title: "数据展示/Slider 滑动输入条",
  component: Slider,
  parameters: {
    docs: {
      description: {
        component: "### 滑动的操作杆",
      },
    },
  },
} as ComponentMeta<typeof Slider>;

/**
 * 展示面板
 */
const defaultSliderTpl: ComponentStory<typeof Slider> = (args) => {
  let [val, setVal] = useState(0)
  const onChange = (val) => {
    setVal(val)
    console.log("val", val);
  }

  const ganStyle = {
    background: '#fff',
    border: '3px solid #000',
    borderRadius: '0',
  } as React.CSSProperties

  const bgStyle = {
    background: '#ccc',
    borderRadius: '0',
  } as React.CSSProperties

  const selStyle
    = {
      background: '#1a1919',
      borderRadius: '0',
    } as React.CSSProperties

  return (
    <>
      <PageHeader title="基本使用" />
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Slider defaultVal={50} onChange={onChange} ></Slider>
        <h4>{val}</h4>
      </div>

      <PageHeader title="拖动提示" />
      <br />
      <Slider defaultVal={50} showTip={true}></Slider>

      <PageHeader title="自定义样式" />
      <Slider defaultVal={80} width={500} ganStyle={ganStyle} selStyle={selStyle} bgStyle={bgStyle}></Slider>

      <PageHeader title="禁用" />
      <Slider defaultVal={80} width={500} disabled></Slider>
    </>
  );
};

/**
 * 参数面板
 */
export const defaultSlider = defaultSliderTpl.bind({});
defaultSlider.args = {};
