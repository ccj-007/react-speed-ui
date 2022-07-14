import React, { createContext } from "react";

export interface configProps {
	/** 黑暗主题   */
	isDark?: boolean;
	/** 隔离css样式的前缀 */
	prefixCls?: string;
	children?: React.ReactNode;
}
let defaultParams = {
	isDark: false,
	prefixCls: "speed",
};
export let ConfigContext = createContext(defaultParams);
const ConfigProvider: React.FC<configProps> = (props) => {
	const { isDark = false, prefixCls = "speed", children } = props;
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
