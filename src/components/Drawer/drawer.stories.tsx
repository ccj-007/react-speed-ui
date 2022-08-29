import React from "react";
import Drawer from "./Drawer";
import Button from "../Button";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import PageHeader from "../PageHeader";
import Space from "../Space";

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
	const { title, placement } = args;
	const [visible, setVisible] = React.useState(false);
	const [visible2, setVisible2] = React.useState(false);

	const handleClick = () => {
		setVisible(!visible);
	};

	const handleClick2 = () => {
		setVisible2(!visible2);
	};
	return (
		<>
			<PageHeader title="基本使用" />
			<Space>
				<Drawer title={title} visible={visible} placement="left">
					左侧打开抽屉
				</Drawer>
				<Button onClick={handleClick}>左侧打开抽屉</Button>

				<Drawer title={title} visible={visible2} placement="right">
					左侧打开抽屉
				</Drawer>
				<Button onClick={handleClick2}>左侧打开抽屉</Button>
			</Space>
		</>
	);
};

/**
 * 参数面板
 */
export const defaultDrawer = defaultDrawerTpl.bind({});
defaultDrawer.args = {
	title: "默认标题",
	placement: "left",
};
