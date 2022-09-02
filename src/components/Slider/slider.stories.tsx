import React from "react";
import Slider from "./Slider";
import { action } from "@storybook/addon-actions";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import PageHeader from "../PageHeader";

export default {
  title: "模板/Slider",
  component: Slider,
  parameters: {
    docs: {
      description: {
        component: "### 组件模板",
      },
    },
  },
} as ComponentMeta<typeof Slider>;

/**
 * 展示面板
 */
const defaultSliderTpl: ComponentStory<typeof Slider> = (args) => {
  return (
    <>
      <PageHeader title="基本使用" />
      <Slider></Slider>
    </>
  );
};

/**
 * 参数面板
 */
export const defaultSlider = defaultSliderTpl.bind({});
defaultSlider.args = {};
