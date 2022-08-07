import React from "react";
export interface IMenuProps {
    defaultIndex?: string;
    disabled?: boolean;
    mode?: "horizontal" | "vertical";
    onSelect?: (selIndex: string) => void;
    className?: string;
    style?: React.CSSProperties;
    children?: React.ReactNode;
    defaultOpenSubMenus?: string[];
}
declare type MenuMode = "horizontal" | "vertical";
interface IMenuContext {
    index: string;
    onSelect?: (selIndex: string) => void;
    mode?: MenuMode;
    defaultOpenSubMenus?: string[];
}
export declare let MenuContext: React.Context<IMenuContext>;
/**
 * 标签栏
 * ### 引用方法
 *
 * ~~~js
 * import { Menu } from 'speed-ui'
 * ~~~
 */
declare const Menu: React.FC<IMenuProps>;
export default Menu;
