import React from "react";
import ConfigProvider from "./index";
import Button from "../Button";

export default {
  title: "模板/ConfigProvider",
  component: ConfigProvider,
};

const defaultConfigProviderTpl = () => {
  const [isDark, setDark] = React.useState(false);

  return (
    <>
      <h6>用于全局控制变量处理</h6>
      <ConfigProvider isDark={isDark}>
        <Button onClick={() => setDark(!isDark)}>切换主题</Button>
      </ConfigProvider>
    </>
  );
};
export const defaultConfigProvider: any = defaultConfigProviderTpl.bind({});
defaultConfigProvider.args = {};
