import React from "react";
import Form from "./Form";
import { ComponentStory, ComponentMeta } from '@storybook/react'

export default {
  title: "数据录入/Form",
  component: Form,
} as ComponentMeta<typeof Form>

const defaultFormTpl: ComponentStory<typeof Form> = (args) => {
  return (
    <>
      <Form></Form>
    </>
  );
};
export const defaultForm = defaultFormTpl.bind({});
defaultForm.args = {
  percent: 59,
};
