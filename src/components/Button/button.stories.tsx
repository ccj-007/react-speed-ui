import React from "react";
import { action } from "@storybook/addon-actions";
import Button from "./button";

export default {
	title: "通用/Button",
	component: Button,
};

const defaultButtonTpl = () => (
	<Button onClick={action("clicked")}>default button</Button>
);

const buttonWithSizeTpl = (args: any) => (
	<>
		<Button size={args.size}>{args.children}</Button>
		<Button size="sm">small button</Button>
	</>
);

const buttonWithTypeTpl = (args: any) => (
	<>
		<Button btnType={args.btnType}>{args.children}</Button>
		<Button btnType="danger">danger button</Button>
		<Button btnType="link" href="https://google.com">
			link button
		</Button>
	</>
);

export const defaultButton: any = defaultButtonTpl.bind({});
defaultButton.args = {};

export const buttonWithSize: any = buttonWithSizeTpl.bind({});
buttonWithSize.args = {
	size: "lg",
	children: "large button",
};

export const buttonWithType: any = buttonWithTypeTpl.bind({});
buttonWithType.args = {
	btnType: "primary",
	children: "primary button",
};
