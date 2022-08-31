/** @jsxImportSource @emotion/react */
import React, { FC, useContext, useState, ReactNode } from "react";
import { ConfigContext } from "../Config-Provider/ConfigProvider";
import classNames from "classnames";
import { css } from "@emotion/react";
import Button from "../Button";

type PlacementType = "left" | "right" | "top" | "bottom";

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
	/** 自定义关闭按钮 */
	customCloseIcon?: React.ReactNode;
	/** 显示底部footer */
	showFooter?: boolean;
	/** 方位 */
	placement?: PlacementType;
	/** 尺度大小 */
	size?: number;
	/** 是否显示遮罩 */
	mask?: boolean;
	/** 点击蒙层是否可以关闭 */
	maskClosable?: boolean;
	/** 是否支持esc按键退出 */
	esc?: boolean;
	/** 抽屉中确认的回调 */
	onConfirm?: () => void;
	/** 抽屉中取消的回调 */
	onCancel?: () => void;
	/** 关闭抽屉的回调 */
	onClose?: () => void;
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
		customCloseIcon,
		showFooter,
		title,
		placement,
		size,
		mask,
		maskClosable,
		esc,
		onConfirm,
		onCancel,
		onClose,
	} = props;
	const { getPrefixCls } = useContext(ConfigContext);
	let prefixCls = getPrefixCls("drawer", customizePrefixCls);
	const cls = classNames(prefixCls, className, {
		[`${prefixCls}-left`]: placement === "left",
		[`${prefixCls}-right`]: placement === "right",
		[`${prefixCls}-top`]: placement === "top",
		[`${prefixCls}-bottom`]: placement === "bottom",
	});

	const handleClose = () => {
		if (onClose && visible) {
			onClose && onClose();
		}
	};

	const handleClickMask = () => {
		maskClosable && handleClose();
	};

	const handleConfirm = () => {
		handleClose();
		onConfirm && onConfirm();
	};

	const handleCancel = () => {
		handleClose();
		onCancel && onCancel();
	};

	const handleKeyboard = (e: KeyboardEvent) => {
		if (e.keyCode === 27) {
			onClose && onClose();
		}
	};

	const getWidth = () => {
		if (placement === "left" || placement === "right") {
			return size + "px";
		} else {
			return "100vw";
		}
	};
	const getHeight = () => {
		if (placement === "top" || placement === "bottom") {
			return size + "px";
		} else {
			return "100vh";
		}
	};

	React.useEffect(() => {
		esc && document.addEventListener("keydown", handleKeyboard);
		return () => {
			esc && document.removeEventListener("keydown", handleKeyboard);
		};
	}, []);

	return (
		<>
			{visible && mask && (
				<div className={`${prefixCls}-mask`} onClick={handleClickMask}></div>
			)}
			{
				<div
					className={cls}
					style={style}
					css={css`
						width: ${visible && getWidth()};
						height: ${visible && getHeight()};
						transition: ${placement === "left" || placement === "right"
								? "width"
								: "height"}
							0.3s ease-in;
					`}
				>
					{visible ? (
						<>
							<div className={`${prefixCls}-header`}>
								{title}
								{showClose && (
									<div className={`${prefixCls}-close`} onClick={handleClose}>
										{customCloseIcon ? customCloseIcon : "X"}
									</div>
								)}
							</div>
							<div className={`${prefixCls}-content`}>{children}</div>
							{showFooter && (
								<div className={`${prefixCls}-footer`}>
									<Button onClick={handleConfirm}>确认</Button>
									<Button onClick={handleCancel}>取消</Button>
								</div>
							)}
						</>
					) : (
						""
					)}
				</div>
			}
		</>
	);
};

Drawer.defaultProps = {
	placement: "left",
	size: 200,
	showClose: true,
	mask: true,
	maskClosable: true,
	showFooter: true,
};

export default React.memo(Drawer);
