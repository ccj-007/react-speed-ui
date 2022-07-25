import React, { createContext } from "react";

export interface configProps {
	/** 黑暗主题   */
	isDark?: boolean;
	/** 隔离css样式的前缀 */
	prefixCls?: string;
	getPrefixCls?: (componentName: string, customName?: string) => string;
	children?: React.ReactNode;
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
	const { isDark = false, prefixCls = "speed", getPrefixCls, children } = props;
	const [config, setConfig] = React.useState(defaultParams);

	React.useEffect(() => {
		setConfig({ ...config, isDark });
	}, [isDark]);
	return (
		<div>
			<ConfigContext.Provider value={config}>{children}</ConfigContext.Provider>
		</div>
	);
};

export default ConfigProvider;
