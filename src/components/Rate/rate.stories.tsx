import React from "react";
import Rate from "./Rate";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import PageHeader from "../PageHeader";

export default {
	title: "模板/Rate",
	component: Rate,
	parameters: {
		docs: {
			description: {
				component: "### 组件模板",
			},
		},
	},
} as ComponentMeta<typeof Rate>;

const defaultRateTpl: ComponentStory<typeof Rate> = () => {
	return (
		<>
			<PageHeader title="基本使用" />
			Rate storybook
			<Rate count={5}></Rate>
		</>
	);
};

export const defaultRate = defaultRateTpl.bind({});
defaultRate.args = {};
