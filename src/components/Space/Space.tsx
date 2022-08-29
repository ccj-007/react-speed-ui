/** @jsxImportSource @emotion/react */
import React, { FC, useContext, useState, ReactNode } from "react";
import { ConfigContext } from "../Config-Provider/ConfigProvider";
import classNames from "classnames";
import { css } from "@emotion/react";

export interface SpaceDirection {
	/** 方向 */
	direction?: "vertical" | "horizontal";
}

export interface SpaceProps extends SpaceDirection {
	/** 样式命名隔离 */
	prefixCls?: string;
	/** 组件子节点 */
	children?: ReactNode;
	/** 容器内联样式 */
	style?: React.CSSProperties;
	/** 组件类名 */
	className?: string;
	/** 每项的类名 */
	itemClassName?: string;
	/** 间距大小 */
	size?: string;
	/** 是否换行 */
	warp?: boolean;
}

/**
 * Space 组件模板
 */
const Space: FC<SpaceProps> = (props) => {
	const {
		children,
		className,
		prefixCls: customizePrefixCls,
		style,
		itemClassName,
		size,
		direction,
		warp,
	} = props;
	const [state, setState] = useState(null);

	const { getPrefixCls } = useContext(ConfigContext);
	let prefixCls = getPrefixCls("space", customizePrefixCls);

	const cls = classNames(prefixCls, className, {});

	const itemCls = classNames(itemClassName);

	const renderSpace = () => {
		return React.Children.map(children, (chlid, index) => {
			console.log("child", children);
			return React.cloneElement(
				<div
					className={itemCls}
					css={css`
						margin-right: ${direction === "horizontal" ? size : ""};
						margin-bottom: ${direction === "vertical" ? size : ""};
					`}
				></div>,
				{},
				chlid
			);
		});
	};
	return (
		<div
			className={cls}
			style={style}
			css={css`
				flex-direction: ${direction === "vertical" ? "column" : "row"};
				flex-warp: ${warp ? "warp" : "nowarp"};
			`}
		>
			{renderSpace()}
		</div>
	);
};

Space.defaultProps = {
	size: "15px",
	direction: "horizontal",
};

export default Space;
