import React, { FC, useContext, useState, ReactNode } from "react";
import { ConfigContext } from "../Config-Provider/ConfigProvider";
import classNames from "classnames";

export interface DrawerProps {
	/** 样式命名隔离 */
	prefixCls?: string;
	/** 组件子节点 */
	children?: ReactNode;
	/** 容器内联样式 */
	style?: React.CSSProperties;
	/** 组件类名 */
	className?: string;
	/** title */
	title?: string;
	/** 显示 */
	visible?: boolean;
}

/**
 * Drawer 屏幕边缘滑出的浮层面板
 */
const Drawer: FC<DrawerProps> = (props) => {
	const { children, className, prefixCls: customizePrefixCls, style } = props;
	const [state, setState] = useState(null);

	const { getPrefixCls } = useContext(ConfigContext);
	let prefixCls = getPrefixCls("drawer", customizePrefixCls);

	const cls = classNames(prefixCls, className, {});
	return (
		<div className={cls} style={style}>
			<div>Drawer</div>
			<div>{children}</div>
		</div>
	);
};

Drawer.defaultProps = {};

export default Drawer;
