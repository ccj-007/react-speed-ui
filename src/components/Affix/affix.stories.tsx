import React from "react";
import Affix from "./Affix";
import Button from "../Button/Button";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import PageHeader from "../PageHeader";

export default {
	title: "导航/Affix",
	component: Affix,
	parameters: {
		docs: {
			description: {
				component: "### 将页面元素钉在可视范围",
			},
		},
	},
} as ComponentMeta<typeof Affix>;

const defaultAffixTpl: ComponentStory<typeof Affix> = (args) => {
	const onChange = (affixed) => {
		console.log("affixed", affixed);
	};
	return (
		<div style={{ height: "1800px" }}>
			<div style={{ marginTop: "200px" }}></div>
			<PageHeader title="向上固定图钉" />
			<Affix offsetTop={20} onChange={onChange}>
				<Button>Affix top</Button>
			</Affix>
			<div style={{ marginTop: "200px" }}></div>
			<PageHeader title="向下固定图钉" />
			<Affix offsetBottom={40}>
				<Button>Affix bottom</Button>
			</Affix>
		</div>
	);
};
export const defaultAffix = defaultAffixTpl.bind({});
defaultAffix.args = {};
