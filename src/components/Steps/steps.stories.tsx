import React from "react";
import Steps from "./Steps";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
	title: "导航/Steps",
	component: Steps,
	parameters: {
		docs: {
			description: {
				component: "### 步骤条",
			},
		},
	},
} as ComponentMeta<typeof Steps>;

const defaultStepsTpl: ComponentStory<typeof Steps> = (args) => {
	return <div>21</div>;
};
export const defaultSteps = defaultStepsTpl.bind({});
defaultSteps.args = {};
