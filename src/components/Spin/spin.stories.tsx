import React from "react";
import Spin from "./Spin";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import PageHeader from "../PageHeader";
import Icon from "../Icon";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
export default {
	title: "反馈/Spin",
	component: Spin,
	parameters: {
		docs: {
			description: {
				component: "### 用于页面和区块的加载中状态。",
			},
		},
	},
} as ComponentMeta<typeof Spin>;

/**
 * 展示面板
 */
const defaultSpinTpl: ComponentStory<typeof Spin> = (args) => {
	const { spinning, tip, delay } = args;
	return (
		<>
			<PageHeader title="基本使用" />
			<div style={{ display: "flex" }}>
				<Spin spinning={spinning}></Spin>
				&nbsp;&nbsp;&nbsp;&nbsp;
				<Spin spinning={false}></Spin>
			</div>
			<PageHeader title="不同尺寸" />
			<div style={{ display: "flex" }}>
				<Spin spinning size="1x"></Spin>
				&nbsp;&nbsp;&nbsp;&nbsp;
				<Spin spinning size="3x"></Spin>
				&nbsp;&nbsp;&nbsp;&nbsp;
				<Spin spinning size="5x"></Spin>
			</div>

			<PageHeader title="延迟加载" />
			<Spin spinning={false} size="3x" delay={delay}></Spin>

			<PageHeader title="文案提示" />
			<Spin spinning={true} size="3x" tip={tip}></Spin>

			<PageHeader title="不同Icon" />
			<div style={{ display: "flex" }}>
				<Spin
					spinning={true}
					size="3x"
					iconJSX={
						<Icon
							icon={solid("arrow-rotate-right")}
							size="5x"
							color="#222222"
							className="fa-spin"
						></Icon>
					}
				></Spin>
			</div>
		</>
	);
};

/**
 * 参数面板
 */
export const defaultSpin = defaultSpinTpl.bind({});
defaultSpin.args = {
	spinning: true,
	tip: "loading.....",
	delay: 2000,
};
