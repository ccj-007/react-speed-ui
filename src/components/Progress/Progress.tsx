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
	/** 圆环的半径 */
	r?: number;
	/** 边距的宽度 */
	dw?: number;
	/** 圆环中心的文案样式 */
	cirTextStyle?: React.CSSProperties;
	/** 圆环中心的自定义文案 */
	cirText?: string;
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
		innerColor = "#0d6efd",
		cirTextStyle = {},
		cirText,
		r = 100,
		dw = 20,
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
		//@ts-ignore
		const perimeter = parseFloat(Math.PI * 2 * r, 2); // 周长
		return `${perimeter * percent} ${perimeter * (1 - percent)}`;
	};

	return isCircle ? (
		<div
			className={`${prefixCls}-cir`}
			style={{ width: `${r * 2}px`, height: `${r * 2}px` }}
		>
			<svg width={r * 2} height={r * 2}>
				<circle
					cx="100"
					cy="100"
					r={r - dw / 2}
					fill="#fff"
					fillOpacity="0"
					strokeWidth={dw}
					strokeLinecap="round"
					stroke={innerColor}
					strokeDasharray={getStrokeDasharray(percent * 0.01, r - dw / 2)}
					className={`${prefixCls}-cir-circle`}
				></circle>
			</svg>
			<div className={`${prefixCls}-cir-inner`} style={cirTextStyle}>
				{cirText ? cirText : `${percent}%`}
			</div>
		</div>
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
	innerColor: "#0d6efd",
};

export default Progress;
