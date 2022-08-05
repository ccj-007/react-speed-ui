import React, { FC, useContext, ReactChild } from "react";
import classNames from "classnames";
import { ConfigContext } from "../Config-Provider";

interface BreadcrumbItemProps {
	children?: React.ReactNode;
	className?: string;
	/**分隔符自定义 */
	separator?: React.ReactNode;
	/**分隔符自定义 */
	disabled?: React.ReactNode;
	/**全局的配置 */
	allSeparator?: React.ReactNode;
}

/**
 * ~~~js
 * import { BreadcrumbItem } from 'speed-ui'
 * ~~~
 */
const BreadcrumbItem: FC<BreadcrumbItemProps> = (props) => {
	const {
		children,
		separator,
		disabled = false,
		allSeparator,
		className,
	} = props;
	const configInfo = useContext(ConfigContext);

	const classes = classNames(
		`${configInfo.prefixCls}-breadcrumbItem`,
		className,
		{}
	);

	const renderChlidrens = () => {
		return React.Children.map(children, (child: any) => {
			if (child.type === "a" && disabled) {
				return React.cloneElement(children, {
					href: "javascript:;",
					className: `${configInfo.prefixCls}-breadcrumbItem-disabled`,
				});
			} else {
				return React.cloneElement(<></>, {}, children);
			}
		});
	};
	return (
		<div className={classes}>
			{separator ? separator : allSeparator}
			<span className={disabled ? "speed-breadcrumbItem-disabled" : ""}>
				{renderChlidrens()}
			</span>
		</div>
	);
};

export default BreadcrumbItem;
