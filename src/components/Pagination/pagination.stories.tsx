import React from "react";
import Pagination from "./Pagination";
import { action } from "@storybook/addon-actions";

export default {
	title: "导航/Pagination",
	component: Pagination,
};

const defaultPaginationTpl = (args: any) => {
	return (
		<>
			<Pagination defaultCurrent={1} total={50}></Pagination>
		</>
	);
};
export const defaultPagination: any = defaultPaginationTpl.bind({});
defaultPagination.args = {
	percent: 59,
};
