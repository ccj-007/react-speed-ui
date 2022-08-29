import React, { FC, useContext, useState, ReactNode } from "react";
import { ConfigContext } from "../Config-Provider/ConfigProvider";
import classNames from "classnames";

export interface DrawerProps {
	/** 样式命名隔离 */
	prefixCls?: string;
	/** 弹窗内容 */
	children?: ReactNode;
	/** 容器内联样式 */
	style?: React.CSSProperties;
	/** 组件类名 */
	className?: string;
	/** title */
	title?: string;
	/** 显示抽屉 */
	visible?: boolean;
	/** 显示关闭按钮 */
	showClose?: boolean;
	/** 方位 */
	placement?: "left" | "right";
}

/**
 * Drawer 屏幕边缘滑出的浮层面板
 */
const Drawer: FC<DrawerProps> = (props) => {
	const {
		children,
		className,
		prefixCls: customizePrefixCls,
		style,
		visible,
		showClose,
		title,
		placement,
	} = props;
	const [state, setState] = useState(null);

	const { getPrefixCls } = useContext(ConfigContext);
	let prefixCls = getPrefixCls("drawer", customizePrefixCls);

	const cls = classNames(prefixCls, className, {
		[`${prefixCls}-left`]: placement === "left",
		[`${prefixCls}-right`]: placement === "right",
		[`${prefixCls}-width`]: visible,
	});

	return (
		<>
			{visible && (
				<div className={cls} style={style}>
					<div>{title}</div>
					<div className={cls}>{children}</div>
				</div>
			)}
		</>
	);
};

Drawer.defaultProps = {};

export default Drawer;
