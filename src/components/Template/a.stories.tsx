import React from "react";
import ATpl from "./Atpl";
import { action } from "@storybook/addon-actions";

export default {
	title: "模板/A",
	component: ATpl,
};

const ATplTempalte = (args: any) => {
	return (
		<>
			<ATpl></ATpl>
		</>
	);
};
export const Atpl: any = ATplTempalte.bind({});
Atpl.args = {
	percent: 59,
};
