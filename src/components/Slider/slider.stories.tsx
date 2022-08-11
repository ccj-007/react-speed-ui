import React from "react";
import Slider from "./Slider";
import { ComponentStory, ComponentMeta } from '@storybook/react'

export default {
  title: "数据录入/Slider",
  component: Slider,
  parameters: {
    docs: {
      description: {
        component: "### 调节值变化的滑杆",
      },
    },
  },
} as ComponentMeta<typeof Slider>

const defaultSliderTpl: ComponentStory<typeof Slider> = (args) => {
  return (
    <>
      <Slider></Slider>
    </>
  );
};
export const defaultSlider = defaultSliderTpl.bind({});
defaultSlider.args = {
  percent: 59,
};
