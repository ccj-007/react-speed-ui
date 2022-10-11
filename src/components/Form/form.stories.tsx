import React from "react";
import Form from "./index";
import { action } from "@storybook/addon-actions";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import PageHeader from "../PageHeader";
import { Input, Button } from "../index";

export default {
  title: "数据录入/Form 表单",
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
  const onFinish = (val) => {
    console.log('success', val);
  }
  return (
    <>
      <PageHeader title="基本使用" />
      <Form action="" onFinish={onFinish}>
        <Form.Item label="Username"
          name="username" rules={[{ required: true, message: 'Please input your username!' }]}>
          <Input placeholder="请输入你的用户名" showCloseIcon></Input>
        </Form.Item>
        <Form.Item label="Password"
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }, { minLen: 5, message: 'min length is five' }, { maxLen: 16, message: 'max length is sixth' }]}>
          <Input placeholder="请输入你的密码" showCloseIcon type='password'></Input>
        </Form.Item>
        <Form.Item >
          <Button style={{ background: '#31c27c', borderColor: '#31c27c' }} htmlType='submit'>Submit</Button>
        </Form.Item>
      </Form>
    </>
  );
};

/**
 * 参数面板
 */
export const defaultForm = defaultFormTpl.bind({});
defaultForm.args = {};
