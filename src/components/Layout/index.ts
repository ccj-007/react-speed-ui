import InternalLayout, { Content, Footer, Header, Sider } from "./Layout";
export type { BasicProps as LayoutProps } from "./Layout";

type InternalLayoutType = typeof InternalLayout;

interface LayoutType extends InternalLayoutType {
	Header: typeof Header;
	Footer: typeof Footer;
	Content: typeof Content;
	Sider: typeof Sider;
}

const Layout = InternalLayout as LayoutType;

Layout.Header = Header;
Layout.Footer = Footer;
Layout.Content = Content;
Layout.Sider = Sider;

export default Layout;
