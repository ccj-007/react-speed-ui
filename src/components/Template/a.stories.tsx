import React from "react";
import ATpl from "./Atpl";
import { action } from "@storybook/addon-actions";
import { ComponentStory, ComponentMeta } from '@storybook/react'

export default {
  title: "模板/A",
  component: ATpl,
} as ComponentMeta<typeof ATpl>

const ATplTempalte: ComponentStory<typeof ATpl> = (args) => {
  return (
    <>
      <ATpl></ATpl>
    </>
  );
};
export const Atpl = ATplTempalte.bind({});
Atpl.args = {
  percent: 59,
};
