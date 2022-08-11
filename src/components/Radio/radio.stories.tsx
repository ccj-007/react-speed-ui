import React from "react";
import Radio from "./Radio";
import { ComponentStory, ComponentMeta } from '@storybook/react'

export default {
  title: "数据录入/Radio",
  component: Radio,
} as ComponentMeta<typeof Radio>

const defaultRadioTpl: ComponentStory<typeof Radio> = (args) => {
  return (
    <>
      <Radio></Radio>
    </>
  );
};
export const defaultRadio = defaultRadioTpl.bind({});
defaultRadio.args = {
  percent: 59,
};
