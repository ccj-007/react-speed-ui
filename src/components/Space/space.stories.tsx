import React from "react";
import Space, { SpaceProps } from "./Space";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import PageHeader from "../PageHeader";
import Button from "../Button";

export default {
	title: "布局/Space",
	component: Space,
	parameters: {
		docs: {
			description: {
				component: "### 处理多个元素的间隔布局",
			},
		},
	},
} as ComponentMeta<typeof Space>;

/**
 * 展示面板
 */
const defaultSpaceTpl: ComponentStory<typeof Space> = (args) => {
	return (
		<>
			<PageHeader title="默认间距" />
			<Space direction={args.direction}>
				<Button>按钮1</Button>
				<Button>按钮2</Button>
				<Button>按钮3</Button>
				<Button>按钮4</Button>
			</Space>

			<PageHeader title="垂直间距" />
			<Space direction="vertical">
				<Button>按钮1</Button>
				<Button>按钮2</Button>
				<Button>按钮3</Button>
				<Button>按钮4</Button>
			</Space>
		</>
	);
};

/**
 * 参数面板
 */
export const defaultSpace = defaultSpaceTpl.bind({});
defaultSpace.args = {
	direction: "horizontal",
} as SpaceProps;
