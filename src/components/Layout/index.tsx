import InternalLayout, { Content, Footer, Header } from "./layout";
export type { BasicProps as LayoutProps } from "./layout";

type InternalLayoutType = typeof InternalLayout;

interface LayoutType extends InternalLayoutType {
	Header: typeof Header;
	Footer: typeof Footer;
	Content: typeof Content;
}

const Layout = InternalLayout as unknown as LayoutType;

Layout.Header = Header;
Layout.Footer = Footer;
Layout.Content = Content;

export default Layout;
