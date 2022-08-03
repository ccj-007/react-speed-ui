import React from "react";
import ConfigProvider, { ThemeType } from "./index";
import Button from "../Button";

export default {
	title: "模板/ConfigProvider",
	component: ConfigProvider,
};

const defaultConfigProviderTpl = () => {
	const [isDark, setDark] = React.useState(false);
	const [isTheme, setTheme] = React.useState<ThemeType>("light");

	const changeTheme = (theme: ThemeType) => {
		setTheme(theme);
	};
	return (
		<>
			<h4>控制组件库的全局变量 </h4>
			<br />
			<h5>1. 单个组件的主题配置</h5>
			<ConfigProvider isDark={isDark}>
				<Button onClick={() => setDark(!isDark)}>Button修改样式</Button>
			</ConfigProvider>
			<br />

			<h5>2. 组件库的全局主题配置</h5>
			<ConfigProvider themeName={isTheme}>
				<Button onClick={() => changeTheme("blue")}>切换深蓝主题</Button>
				&nbsp; &nbsp;
				<Button onClick={() => changeTheme("light")}>切换默认主题</Button>
			</ConfigProvider>
			<br />

			<h5>3.样式命名隔离</h5>

			<div>
				通过传入getPrefixCls字段可以修改所有组件的样式前缀，用于对已有样式文件的样式冲突的隔离
			</div>
			<br />
		</>
	);
};

export const defaultConfigProvider: any = defaultConfigProviderTpl.bind({});
defaultConfigProvider.args = {};
