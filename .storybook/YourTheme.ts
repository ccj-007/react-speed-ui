// .storybook/YourTheme.js

import { create } from "@storybook/theming";

export default create({
	base: "light",

	colorPrimary: "black",
	colorSecondary: "black",

	// UI
	appBg: "white",
	appContentBg: "#fff",
	appBorderColor: "black",
	appBorderRadius: 4,

	// Typography
	fontBase: '"Open Sans", sans-serif',
	fontCode: "monospace",

	// Text colors
	textColor: "black",
	textInverseColor: "rgba(255,255,255,0.9)",

	// Toolbar default and active colors
	barTextColor: "#fff",
	barSelectedColor: "#fff",
	barBg: "black",

	// Form colors
	inputBg: "white",
	inputBorder: "silver",
	inputTextColor: "black",
	inputBorderRadius: 4,

	brandTitle: "react-speed-ui",
	brandTarget: "_self",
});
