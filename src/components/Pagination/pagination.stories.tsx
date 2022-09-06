import React from "react";
import Pagination from "./Pagination";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import PageHeader from "../PageHeader";

export default {
	title: "导航/Pagination",
	component: Pagination,
	parameters: {
		docs: {
			description: {
				component: "### 多页列表的分页器",
			},
		},
	},
} as ComponentMeta<typeof Pagination>;

const defaultPaginationTpl: ComponentStory<typeof Pagination> = (args) => {
	return (
		<>
			<PageHeader title="基本使用" />
			<Pagination {...args}></Pagination>
			<PageHeader title="更多页面" />
			<Pagination defaultCurrent={3} total={80}></Pagination>
			<PageHeader title="跳转" />
			<Pagination {...args} editJumpPage></Pagination>
			<PageHeader title="展示total" />
			<Pagination {...args} showTotal></Pagination>
			<PageHeader title="修改每页条数" />
			<Pagination {...args} editPageSize></Pagination>
			<PageHeader title="禁用" />
			<Pagination disabled></Pagination>
		</>
	);
};

export const defaultPagination = defaultPaginationTpl.bind({});
defaultPagination.args = {
	disabled: false,
	defaultCurrent: 1,
	total: 50,
	onChange: (page, pageSize) => {
		console.log("当前页码---", page, "每页多少条----", pageSize);
	},
};
