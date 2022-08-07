import React from "react";
export declare type GlobalThemeType = "light" | "dark" | "blue";
export declare type ThemeOptionsType = {
    theme: "default" | "custom";
    button: {
        primary: string;
        success: string;
        warning: string;
        danger: string;
    };
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
export declare let ConfigContext: React.Context<{
    isDark: boolean;
    prefixCls: string;
    getPrefixCls: (componentName: string, customName?: string) => string;
    themeOptions: {
        theme: string;
        button: {
            primary: string;
            success: string;
            warning: string;
            danger: string;
        };
    };
}>;
declare const ConfigProvider: React.FC<configProps>;
export default ConfigProvider;
