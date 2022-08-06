import React, { createContext } from "react";

export type GlobalThemeType = "light" | "dark" | "blue";

export type ThemeOptionsType = {
	theme: "default" | "custom";
	button: {
		primary: string;
		success: string;
		warning: string;
		danger: string;
	};
};

/**
 * 配置全局组件的主题
 */
const defaultThemeOptions = {
	theme: "default", //目前请确保是light
	button: {
		primary: "#c2d8fa",
		success: "#52c41a",
		warning: "#f3eaa8",
		danger: "#f3a2aa",
	},
};

export interface configProps {
	/** 黑暗主题   */
	isDark?: boolean;
	/** 隔离css样式的前缀 */
	prefixCls?: string;
	getPrefixCls?: (componentName: string, customName?: string) => string;
	children?: React.ReactNode;
	globalThemeName?: GlobalThemeType;
	themeOptions?: ThemeOptionsType;
}
let defaultParams = {
	isDark: false,
	prefixCls: "speed",
	//用于避免样式冲突
	getPrefixCls: (componentName: string, customName?: string) => {
		let commonPrefix = `${defaultParams.prefixCls}-${componentName}`;
		return customName ? `${commonPrefix}-${customName}` : commonPrefix;
	},
	themeOptions: defaultThemeOptions,
};
export let ConfigContext = createContext(defaultParams);

const ConfigProvider: React.FC<configProps> = (props) => {
	const {
		isDark = false,
		prefixCls = "speed",
		getPrefixCls,
		children,
		globalThemeName = "light",
		themeOptions,
	} = props;
	console.log("theme", themeOptions?.theme);

	const [config, setConfig] = React.useState(defaultParams);

	const changeTheme = (theme: string) => {
		document.documentElement.className = "";
		document.documentElement.classList.add(`theme-${theme}`);
	};

	//切换全局组件主题， 通过css in js控制主题
	React.useEffect(() => {
		const newThemeOptions = Object.assign(
			{},
			defaultThemeOptions,
			themeOptions
		) as ThemeOptionsType;

		setConfig({ ...config, themeOptions: newThemeOptions });
	}, [themeOptions]);

	//切换全局的黑白主题
	React.useEffect(() => {
		setConfig({ ...config, isDark });
	}, [isDark]);

	//切换全局网站主题， 通过scss控制
	React.useEffect(() => {
		changeTheme(globalThemeName);
	}, [globalThemeName]);
	return (
		<div>
			<ConfigContext.Provider value={config}>{children}</ConfigContext.Provider>
		</div>
	);
};

export default ConfigProvider;
