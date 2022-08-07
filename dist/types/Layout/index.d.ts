import InternalLayout, { Content, Footer, Header, Sider } from "./Layout";
export type { BasicProps as LayoutProps } from "./Layout";
declare type InternalLayoutType = typeof InternalLayout;
interface LayoutType extends InternalLayoutType {
    Header: typeof Header;
    Footer: typeof Footer;
    Content: typeof Content;
    Sider: typeof Sider;
}
declare const Layout: LayoutType;
export default Layout;
