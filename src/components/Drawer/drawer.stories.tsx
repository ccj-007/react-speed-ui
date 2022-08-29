import React from "react";
import Drawer from "./Drawer";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import PageHeader from "../PageHeader";

export default {
	title: "反馈/Drawer",
	component: Drawer,
	parameters: {
		docs: {
			description: {
				component: "### 屏幕边缘滑出的浮层面板",
			},
		},
	},
} as ComponentMeta<typeof Drawer>;

/**
 * 展示面板
 */
const defaultDrawerTpl: ComponentStory<typeof Drawer> = (args) => {
	return (
		<>
			<PageHeader title="基本使用" />
			<Drawer></Drawer>
		</>
	);
};

/**
 * 参数面板
 */
export const defaultDrawer = defaultDrawerTpl.bind({});
defaultDrawer.args = {};
