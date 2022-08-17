import React from "react";
import Form from "./Form";
import { action } from "@storybook/addon-actions";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import PageHeader from "../PageHeader";

export default {
	title: "模板/Form",
	component: Form,
	parameters: {
		docs: {
			description: {
				component: "### 组件模板",
			},
		},
	},
} as ComponentMeta<typeof Form>;

/**
 * 展示面板
 */
const defaultFormTpl: ComponentStory<typeof Form> = (args) => {
	return (
		<>
			<PageHeader title="基本使用" />
			Form storybook
			<Form>
				<Form.Item></Form.Item>
			</Form>
		</>
	);
};

/**
 * 参数面板
 */
export const defaultForm = defaultFormTpl.bind({});
defaultForm.args = {};
