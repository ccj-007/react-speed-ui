import React from 'react';
import { Input } from './input'

export default {
  title: 'Input',
  component: Input,
};

const defaultInputTpl = (args: any) => (
  <>
    <h6>普通的input</h6>
    <div>
      <Input placeholder={args.placeholder} onChange={args.onChangeVal}></Input>
    </div>
  </>
)

export const defaultInput: any = defaultInputTpl.bind({});
defaultInput.args = {
  placeholder: '请输入你的内容',
  onChange: (val: any) => console.log("input的值", val)
};

const disabledInputTpl = (args: any) => (
  <>
    <h6>禁用的input</h6>
    <div>
      <Input {...args}></Input>
    </div>
  </>
)

export const disabledInput: any = disabledInputTpl.bind({});
disabledInput.args = {
  disabled: true,
};

const typeInputTpl = (args: any) => (
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
)

export const typeInput: any = typeInputTpl.bind({});
typeInput.args = {
  isPasswordInput: true,
  isNumberInput: true,
};


const fixInputTpl = (args: any) => (
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
)

export const fixInput: any = fixInputTpl.bind({});
fixInput.args = {
  prefix: 'https://',
  suffix: '.com',
};



