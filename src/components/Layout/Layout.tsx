import React, { FC } from "react";

export interface ComponentProps {
	component?: string;
}
export type LayoutProps = {
	Header: typeof Header;
	Content: typeof Content;
	Footer: typeof Footer;
	Sider: typeof Sider;
};

const BaseLayout: FC<ComponentProps> = (props) => {
	const { component } = props;
	const Component = component as any;
	return (
		<div style={{ display: "flex" }}>
			<Component></Component>
		</div>
	);
};

const Header: FC<any> = (props) => {
	const {} = props;
	return <div className="speed-header">Header</div>;
};
const Content: FC<any> = (props) => {
	const {} = props;
	return <div className="speed-content">Content</div>;
};
const Footer: FC<any> = (props) => {
	const {} = props;
	return <div className="speed-footer">Footer</div>;
};

const Sider: FC<any> = (props) => {
	const {} = props;
	return <div className="speed-sider">Sider</div>;
};

const Layout = BaseLayout as unknown as LayoutProps;
Layout.Header = Header;
Layout.Content = Content;
Layout.Footer = Footer;
Layout.Sider = Sider;

export default Layout;
