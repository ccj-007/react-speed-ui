import React from "react";
import Input from "./input";
import { ComponentStory, ComponentMeta } from '@storybook/react'
export default {
  title: "数据录入/Input",
  component: Input,
} as ComponentMeta<typeof Input>

const defaultInputTpl: ComponentStory<typeof Input> = (args: any) => (
  <>
    <h6>普通的input</h6>
    <div>
      <Input placeholder={args.placeholder} onChange={args.onChangeVal}></Input>
    </div>
  </>
);

const disabledInputTpl: ComponentStory<typeof Input> = (args: any) => (
  <>
    <h6>禁用的input</h6>
    <div>
      <Input {...args}></Input>
    </div>
  </>
);

const typeInputTpl: ComponentStory<typeof Input> = (args) => (
  <>
    <h6>密码输入框</h6>
    <div>
      <Input isPasswordInput={args.isPasswordInput}></Input>
    </div>
    <br></br>
    <h6>数字输入框</h6>
    <div>
      <Input isNumberInput={args.isNumberInput}></Input>
    </div>
  </>
);

const fixInputTpl: ComponentStory<typeof Input> = (args) => (
  <>
    <h6>前缀</h6>
    <div>
      <Input prefix={args.prefix}></Input>
    </div>
    <br></br>
    <h6>后缀</h6>
    <div>
      <Input suffix={args.suffix}></Input>
    </div>
  </>
);

export const defaultInput = defaultInputTpl.bind({});
defaultInput.args = {
  placeholder: "请输入你的内容",
  onChange: (val: any) => console.log("input的值", val),
};

export const disabledInput = disabledInputTpl.bind({});
disabledInput.args = {
  disabled: true,
};

export const typeInput = typeInputTpl.bind({});
typeInput.args = {
  isPasswordInput: true,
  isNumberInput: true,
};

export const fixInput = fixInputTpl.bind({});
fixInput.args = {
  prefix: "https://",
  suffix: ".com",
};
