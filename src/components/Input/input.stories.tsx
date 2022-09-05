import React from "react";
import Input from "./Input";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import PageHeader from "../PageHeader";

export default {
	title: "数据录入/Input",
	component: Input,
	parameters: {
		docs: {
			description: {
				component: "### 通过鼠标或键盘输入内容，是最基础的表单域的包装。",
			},
		},
	},
} as ComponentMeta<typeof Input>;

const defaultInputTpl: ComponentStory<typeof Input> = (args: any) => (
	<>
		<PageHeader title="基本使用"></PageHeader>
		<div>
			<Input placeholder={args.placeholder} type="text"></Input>
		</div>
		<br></br>
		<div>
			<Input placeholder="请输入密码" type="password"></Input>
		</div>
		<br></br>
		<div>
			<Input placeholder="请输入数字" type="number"></Input>
		</div>
		<PageHeader title="禁用的input"></PageHeader>
		<div>
			<Input disabled></Input>
		</div>

		<PageHeader title="前缀 & 后缀"></PageHeader>
		<div>
			<Input prefix="https://"></Input>
		</div>
		<br></br>
		<div>
			<Input suffix=".com"></Input>
		</div>
	</>
);

export const defaultInput = defaultInputTpl.bind({});
defaultInput.args = {
	placeholder: "请输入文本内容",
};
