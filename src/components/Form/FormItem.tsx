import React, { FC, useContext, useState, ReactNode } from "react";
import { ConfigContext } from "../Config-Provider/ConfigProvider";
import classNames from "classnames";

export interface FormItemProps {
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
const FormItem: FC<FormItemProps> = (props) => {
	const { children, className, prefixCls: customizePrefixCls, style } = props;
	const [state, setState] = useState(null);

	const { getPrefixCls } = useContext(ConfigContext);
	let prefixCls = getPrefixCls("formItem", customizePrefixCls);

	const cls = classNames(prefixCls, className, {});
	return (
		<div className={cls} style={style}>
			<div>FormItem</div>
			<div>{children}</div>
		</div>
	);
};

FormItem.defaultProps = {};

export default FormItem;
