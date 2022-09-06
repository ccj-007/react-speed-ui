import React from "react";
import Tag from "./Tag";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { PageHeader, Space } from "../index";
import Icon from "../Icon";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
export default {
	title: "模板/Tag",
	component: Tag,
	parameters: {
		docs: {
			description: {
				component: "### 组件模板",
			},
		},
	},
} as ComponentMeta<typeof Tag>;

/**
 * 展示面板
 */
const defaultTagTpl: ComponentStory<typeof Tag> = (args) => {
	return (
		<>
			<PageHeader title="基本使用" />
			<Space>
				<Tag>TAG 1</Tag>
				<Tag>TAG 2</Tag>
				<Tag>TAG 3</Tag>
				<Tag>TAG 4</Tag>
			</Space>

			<PageHeader title="不同颜色" />
			<Space>
				<Tag color="#c41d7f" borderColor="#ffadd2" bgColor="#fff0f6">
					TAG MAGENTA
				</Tag>
				<Tag color="#d46b08" borderColor="#ffd591" bgColor="#fff7e6">
					TAG ORAGNE
				</Tag>
				<Tag color="#389e0d" borderColor="#b7eb8f" bgColor="#f6ffed">
					TAG GREEN
				</Tag>
				<Tag color="#096dd9" borderColor="#91d5ff" bgColor="#e6f7ff">
					TAG BLUE
				</Tag>
				<Tag color="#1d39c4" borderColor="#adc6ff" bgColor="#f0f5ff">
					TAG GEEKBLUE
				</Tag>
				<Tag color="#531dab" borderColor="#d3adf7" bgColor="#f9f0ff">
					TAG PURPLE
				</Tag>
			</Space>

			<PageHeader title="关闭Tag" />
			<Space>
				<Tag
					closeIcon={
						<Icon icon={solid("xmark")} size="1x" color="#4c4c4c"></Icon>
					}
					closable
				>
					TAG 2
				</Tag>
				<Tag
					color="#d46b08"
					borderColor="#ffd591"
					bgColor="#fff7e6"
					closeIcon={
						<Icon icon={solid("xmark")} size="1x" color="#d46b08"></Icon>
					}
					closable
				>
					TAG ORAGNE
				</Tag>

				<Tag
					color="#096dd9"
					borderColor="#91d5ff"
					bgColor="#e6f7ff"
					closeIcon={
						<Icon icon={solid("xmark")} size="1x" color="#096dd9"></Icon>
					}
					closable
				>
					TAG BLUE
				</Tag>
			</Space>

			<PageHeader title="自定义Icon" />
			<Space>
				<Tag
					iconJSX={
						<Icon icon={solid("server")} size="1x" color="#d46b08"></Icon>
					}
					color="#d46b08"
					borderColor="#ffd591"
					bgColor="#fff7e6"
				>
					Server
				</Tag>

				<Tag
					iconJSX={
						<Icon icon={solid("asterisk")} size="1x" color="#096dd9"></Icon>
					}
					color="#096dd9"
					borderColor="#91d5ff"
					bgColor="#e6f7ff"
				>
					asterisk
				</Tag>
			</Space>
		</>
	);
};

/**
 * 参数面板
 */
export const defaultTag = defaultTagTpl.bind({});
defaultTag.args = {};
