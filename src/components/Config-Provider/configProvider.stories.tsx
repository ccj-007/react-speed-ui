import React from "react";
import ConfigProvider, {
  ThemeOptionsType,
  GlobalThemeType,
} from "./ConfigProvider";
import Button from "../Button";

export default {
  title: "全局控制/ConfigProvider 全局控制",
  component: ConfigProvider,
  parameters: {
    docs: {
      description: {
        component: "### 控制组件库的全局状态",
      },
    },
  },
};

const themeOptions = {
  theme: "default",
  button: {
    primary: "#c2d8fa",
    success: "#52c41a",
    warning: "#f3eaa8",
    danger: "#f3a2aa",
  },
} as ThemeOptionsType;
const defaultConfigProviderTpl = () => {
  const [isDark, setDark] = React.useState(false);
  const [isTheme, setTheme] = React.useState<GlobalThemeType>("light");
  const [themeData, setThemeData] =
    React.useState<ThemeOptionsType>(themeOptions);

  const changeTheme = (theme: GlobalThemeType) => {
    setTheme(theme);
  };

  const changeComponentsTheme = (name: "default" | "custom") => {
    setThemeData({ ...themeData, theme: name });
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
      <ConfigProvider globalThemeName={isTheme} themeOptions={themeData}>
        <Button onClick={() => changeComponentsTheme("default")}>
          默认主题
        </Button>
        &nbsp; &nbsp;
        <Button onClick={() => changeComponentsTheme("custom")}>
          轻量主题
        </Button>
        &nbsp; &nbsp;
        <Button btnType="warning">测试主题</Button>
        <Button btnType="success">测试主题</Button>
        <Button btnType="danger">测试主题</Button>
      </ConfigProvider>
      <br />

      <h5>3. 网站的全局主题配置</h5>
      <ConfigProvider globalThemeName={isTheme}>
        <Button onClick={() => changeTheme("blue")}> 深蓝主题</Button>
        &nbsp; &nbsp;
        <Button onClick={() => changeTheme("dark")}>暗夜主题</Button>
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
