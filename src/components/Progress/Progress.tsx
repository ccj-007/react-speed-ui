/** @jsxImportSource @emotion/react */
import React, { FC, useContext, useState } from "react";
import { ThemeProps } from "../Icon/Icon";
import classNames from "classnames";
import { ConfigContext } from "../Config-Provider/ConfigProvider";
import { css } from "@emotion/react";

export interface ProgressProps {
	/** 样式命名隔离 */
	prefixCls?: string;
	/** 进度百分比 */
	percent: number;
	/** 高度 */
	strokeHeight?: number;
	/** 组件类名 */
	className?: string;
	/** 展示文本 */
	showText?: boolean;
	styles?: React.CSSProperties;
	/** 主题 */
	theme?: ThemeProps;
	/** 是否是圆形 */
	isCircle?: boolean;
	/** 文本位置 */
	placement?: "left" | "right" | "center";
	/** 背景颜色 */
	innerColor?: string;
}

/**
 * Progress  进度条组件
 */
const Progress: FC<ProgressProps> = (props) => {
	const {
		percent,
		prefixCls: customizePrefixCls,
		strokeHeight,
		showText,
		styles,
		theme,
		className,
		placement = "right",
		innerColor,
		isCircle = false,
	} = props;
	const { getPrefixCls } = useContext(ConfigContext);
	let prefixCls = getPrefixCls("progress", customizePrefixCls);
	const cls = classNames(prefixCls, className, {});

	const innerCls = classNames(
		`${prefixCls}-bar-inner`,
		`color-${theme}`,
		`${prefixCls}-bar-inner-${placement}`
	);

	const getStrokeDasharray = (percent = 0.8, r = 50) => {
		const perimeter = parseFloat(Math.PI * 2 * r, 2); // 周长
		return `${perimeter * percent} ${perimeter * (1 - percent)}`;
	};

	return isCircle ? (
		<svg width="200" height="200">
			<circle
				cx="100"
				cy="100"
				r="90"
				stroke="blue"
				fill="#fff"
				stroke-width="20"
				stroke-linecap="round"
				strokeDasharray={getStrokeDasharray(0.5, 90)}
			></circle>
		</svg>
	) : (
		<div className={`${prefixCls}-bar`} style={styles}>
			<div
				className={`${prefixCls}-bar-outer`}
				style={{ height: `${strokeHeight}px` }}
			>
				<div
					className={innerCls}
					style={{ width: `${percent}%` }}
					css={css`
						background-color: ${innerColor} !important;
					`}
				>
					{showText && <span className="inner-text">{`${percent}%`}</span>}
				</div>
			</div>
		</div>
	);
};

Progress.defaultProps = {
	strokeHeight: 15,
	showText: true,
	theme: "primary",
	isCircle: false,
	placement: "right",
};

export default Progress;
