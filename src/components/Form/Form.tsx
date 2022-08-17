import React, { FC, useContext, useState, ReactNode } from "react";
import { ConfigContext } from "../Config-Provider/ConfigProvider";
import classNames from "classnames";

export interface FormProps {
	/** 样式命名隔离 */
	prefixCls?: string;
	/** 组件子节点 */
	children?: ReactNode;
	/** 容器内联样式 */
	style?: React.CSSProperties;
	/** 组件类名 */
	className?: string;
}

/**
 * Form 组件模板
 */
const InternalForm: FC<FormProps> = (props) => {
	const { children, className, prefixCls: customizePrefixCls, style } = props;
	const [state, setState] = useState(null);

	const { getPrefixCls } = useContext(ConfigContext);
	let prefixCls = getPrefixCls("form", customizePrefixCls);

	const cls = classNames(prefixCls, className, {});
	return (
		<div className={cls} style={style}>
			<div>InternalForm</div>
			<div>{children}</div>
		</div>
	);
};

InternalForm.defaultProps = {};

export default InternalForm;
