import React, { createContext } from "react";

export type ThemeType = "light" | "dark" | "blue";

export interface configProps {
	/** 黑暗主题   */
	isDark?: boolean;
	/** 隔离css样式的前缀 */
	prefixCls?: string;
	getPrefixCls?: (componentName: string, customName?: string) => string;
	children?: React.ReactNode;
	themeName?: ThemeType;
}
let defaultParams = {
	isDark: false,
	prefixCls: "speed",
	//用于避免样式冲突
	getPrefixCls: (componentName: string, customName?: string) => {
		let commonPrefix = `${defaultParams.prefixCls}-${componentName}`;
		return customName ? `${commonPrefix}-${customName}` : commonPrefix;
	},
};
export let ConfigContext = createContext(defaultParams);

const ConfigProvider: React.FC<configProps> = (props) => {
	const {
		isDark = false,
		prefixCls = "speed",
		getPrefixCls,
		children,
		themeName = "light",
	} = props;
	const [config, setConfig] = React.useState(defaultParams);

	const changeTheme = (theme: string) => {
		document.documentElement.className = "";
		document.documentElement.classList.add(`theme-${theme}`);
	};

	React.useEffect(() => {
		setConfig({ ...config, isDark });
	}, [isDark]);

	React.useEffect(() => {
		changeTheme(themeName);
	}, [themeName]);
	return (
		<div>
			<ConfigContext.Provider value={config}>{children}</ConfigContext.Provider>
		</div>
	);
};

export default ConfigProvider;
