import React from "react";
import Form from "./index";
import { action } from "@storybook/addon-actions";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import PageHeader from "../PageHeader";

export default {
  title: "模板/Form",
  component: Form,
  parameters: {
    docs: {
      description: {
        component: "### 表单数据提交",
      },
    },
  },
} as any;

/**
 * 展示面板
 */
const defaultFormTpl: any = (args) => {
  return (
    <>
      <PageHeader title="基本使用" />
      <Form action="" >
        <Form.Item type='text' placeholder="输入用户名" label='用户名'></Form.Item>
        <Form.Item type='text' placeholder="输入密码" label='密码'></Form.Item>
        <Form.Item type='button' value="登录"></Form.Item>
        <Form.Item type='button' value="注册"></Form.Item>
        <Form.Item type='submit' value="提交" ></Form.Item>
      </Form>
    </>
  );
};

/**
 * 参数面板
 */
export const defaultForm = defaultFormTpl.bind({});
defaultForm.args = {};
