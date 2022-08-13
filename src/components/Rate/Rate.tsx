import React, { FC, useContext, useState, ReactNode } from "react";
import { ConfigContext } from "../Config-Provider/ConfigProvider";
import classNames from "classnames";

export interface RateProps {
	/** 样式命名隔离 */
	prefixCls?: string;
	/** 组件子节点 */
	children?: ReactNode;
	/** 组件类名 */
	style?: React.CSSProperties;
	/** 组件类名 */
	className?: string;
	/** star总数 */
	count?: number;
}

/**
 * Rate 评分组件
 */
const Rate: FC<RateProps> = (props) => {
	const {
		children,
		className,
		prefixCls: customizePrefixCls,
		style,
		count,
	} = props;
	const [state, setState] = useState(null);

	const { getPrefixCls } = useContext(ConfigContext);
	let prefixCls = getPrefixCls("rate", customizePrefixCls);

	const cls = classNames(prefixCls, className, {});
	return (
		<div className={cls} style={style}>
			<div className="rate-content">
				<input type="radio" name="rate" className="speed-rate" />
				<input type="radio" name="rate" className="speed-rate" />
				<input type="radio" name="rate" className="speed-rate" />
				<input type="radio" name="rate" className="speed-rate" />
				<input type="radio" name="rate" className="speed-rate" />
			</div>
		</div>
	);
};

Rate.defaultProps = {};

export default Rate;
