import React, { FC } from "react";
import classNames from "classnames";

// export interface ComponentProps {
// 	children?: React.ReactNode;
// }
// export type LayoutProps = {
// 	Header: typeof Header;
// 	Content: typeof Content;
// 	Footer: typeof Footer;
// 	Sider: typeof Sider;
// };

// const BasicLayout: FC<ComponentProps> = (props) => {
// 	const { children } = props;
// 	return <div className="sfv">{children}</div>;
// };

// const Header: FC<any> = (props) => {
// 	const {} = props;
// 	return <div className="speed-header sfc">Header</div>;
// };
// const Content: FC<any> = (props) => {
// 	const {} = props;
// 	return <div className="speed-content sfc">Content</div>;
// };
// const Footer: FC<any> = (props) => {
// 	const {} = props;
// 	return <div className="speed-footer sfc">Footer</div>;
// };

// const Sider: FC<any> = (props) => {
// 	const {} = props;
// 	return <div className="speed-sider sfc">Sider</div>;
// };

// const Layout = BasicLayout as unknown as LayoutProps;
// Layout.Header = Header;
// Layout.Content = Content;
// Layout.Footer = Footer;
// Layout.Sider = Sider;

// export default Layout;

export interface GeneratorProps {
	suffixCls: string;
	tagName: "header" | "footer" | "main" | "section";
}
export interface BasicProps extends React.HTMLAttributes<HTMLDivElement> {
	prefixCls?: string;
}
interface BasicPropsWithTagName extends BasicProps {
	tagName: "header" | "footer" | "main" | "section";
}

function generator({ suffixCls, tagName }: GeneratorProps) {
	return (BasicComponent: any) => {
		const Adapter = React.forwardRef<HTMLElement, BasicProps>((props, ref) => {
			return (
				<BasicComponent
					ref={ref}
					prefixCls={suffixCls}
					tagName={tagName}
					{...props}
				/>
			);
		});
	};
}

const Basic = React.forwardRef<HTMLElement, BasicPropsWithTagName>(
	(props, ref) => {
		const { prefixCls, className, children, tagName, ...others } = props;
		const classString = classNames(prefixCls, className);
		return React.createElement(
			tagName,
			{ className: classString, ...others, ref },
			children
		);
	}
);

const BasicLayout = React.forwardRef<HTMLElement, BasicPropsWithTagName>(
	(props, ref) => {
		const { prefixCls, className, children, tagName: Tag, ...others } = props;
		const classString = classNames(prefixCls, className);

		return (
			<Tag ref={ref} className={classString} {...others}>
				{children}
			</Tag>
		);
	}
);

const Layout = generator({
	suffixCls: "layout",
	tagName: "section",
})(BasicLayout);

const Header = generator({
	suffixCls: "layout-header",
	tagName: "header",
})(Basic);

const Footer = generator({
	suffixCls: "layout-footer",
	tagName: "footer",
})(Basic);

const Content = generator({
	suffixCls: "layout-content",
	tagName: "main",
})(Basic);

export { Header, Footer, Content };

export default Layout;
