import React from "react";
import Rate from "./Rate";
import { ComponentStory, ComponentMeta } from '@storybook/react'

export default {
  title: "数据录入/Rate",
  component: Rate,
  parameters: {
    docs: {
      description: {
        component: "### 评分",
      },
    },
  },
} as ComponentMeta<typeof Rate>

const defaultRateTpl: ComponentStory<typeof Rate> = (args) => {
  return (
    <>
      <Rate></Rate>
    </>
  );
};
export const defaultRate = defaultRateTpl.bind({});
defaultRate.args = {
  percent: 59,
};
