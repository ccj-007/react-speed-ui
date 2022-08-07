import React from "react";
export interface GeneratorProps {
    suffixCls: string;
    displayName: string;
    tagName: "header" | "footer" | "main" | "section";
}
export interface BasicProps extends React.HTMLAttributes<HTMLDivElement> {
    prefixCls?: string;
}
declare const Layout: React.ForwardRefExoticComponent<BasicProps & React.RefAttributes<HTMLElement>>;
declare const Header: React.ForwardRefExoticComponent<BasicProps & React.RefAttributes<HTMLElement>>;
declare const Footer: React.ForwardRefExoticComponent<BasicProps & React.RefAttributes<HTMLElement>>;
declare const Content: React.ForwardRefExoticComponent<BasicProps & React.RefAttributes<HTMLElement>>;
declare const Sider: React.ForwardRefExoticComponent<BasicProps & React.RefAttributes<HTMLElement>>;
export { Header, Footer, Content, Sider };
export default Layout;
