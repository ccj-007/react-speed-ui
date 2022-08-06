import React, { FC, useContext } from "react";
import classNames from "classnames";
import { ConfigContext } from "../Config-Provider/configProvider";

interface BreadcrumbProps {
	children?: React.ReactNode;
	className?: string;
	/**自定义链接函数，和 react-router 配置使用 */
	//@ts-ignore
	itemRender?: (route, params, routes, paths) => React.ReactNode;
	/**路由的参数 */
	params?: Object;
	/**router 的路由栈信息 */
	routes?: any;
	/**全局的分隔符自定义 */
	allSeparator?: React.ReactNode;
}

/**
 * 显示当前页面在系统层级结构中的位置，并能向上返回。
 *
 * ~~~js
 * import { BreadCrumb } from 'speed-ui'
 * ~~~
 */
const Breadcrumb: FC<BreadcrumbProps> = (props) => {
	const { itemRender, params, routes, allSeparator, children, className } =
		props;
	const configInfo = useContext(ConfigContext);

	const renderChildren = () => {
		return React.Children.map(children, (child: any, index) => {
			return React.cloneElement(child, {
				allSeparator: (
					<span style={{ margin: "0 10px" }}>{allSeparator || ""}</span>
				),
			});
		});
	};

	const classes = classNames(`${configInfo.prefixCls}-breadcrumb`, className);

	return <div className={classes}>{renderChildren()}</div>;
};

export default Breadcrumb;
