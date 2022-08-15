import React, { FC, useContext, useState, ReactNode } from "react";
import { ConfigContext } from "../Config-Provider/ConfigProvider";
import classNames from "classnames";
import { css, jsx } from "@emotion/react";

export interface RateProps {
	/** 样式命名隔离 */
	prefixCls?: string;
	/** 组件子节点 */
	children?: ReactNode;
	/** 容器内联样式 */
	style?: React.CSSProperties;
	/** 单项内联样式 */
	itemStyle?: React.CSSProperties;
	/** 组件类名 */
	className?: string;
	/** star总数 */
	count?: number;
	/** 默认开始的star位置 */
	startCount?: number;
	/** icon的class类名 */
	iconfontClassName?: string;
	/** icon的class激活类名 */
	iconfontClassNameActive?: string;
	/** 选择后的回调 */
	onChange?: (curIndex: number) => void;
	/** 是否允许再次点击时清除 */
	allowClear?: boolean;
	/** 是否禁止 */
	disabled?: boolean;
	/** 自定义激活颜色 */
	color?: string;
	/** 自定义尺寸 */
	size?: string;
}

interface StarType {
	isStar: boolean;
}
type StartListType = StarType[];

/**
 * Rate 评分组件
 */
const Rate: FC<RateProps> = (props) => {
	const {
		children,
		className,
		prefixCls: customizePrefixCls,
		style,
		itemStyle,
		count,
		startCount,
		iconfontClassName,
		iconfontClassNameActive,
		onChange,
		allowClear,
		disabled,
		color,
		size,
	} = props;

	//获取默认
	const defaultStartList: StartListType = [];
	const getDefaultList = () => {
		if (!count || !startCount) return;
		for (let i = 0; i < count; i++) {
			let starTpl = {
				isStar: startCount >= i,
			};
			defaultStartList.push(starTpl);
		}
	};
	getDefaultList();

	const [startList, setStarList] = useState(defaultStartList);

	const { getPrefixCls } = useContext(ConfigContext);
	let prefixCls = getPrefixCls("rate", customizePrefixCls);

	const cls = classNames(prefixCls, className, {});

	const handleStarClick = (index: number) => {
		if (disabled) return;

		let newStarList: StartListType = [];
		const lastStarIndex = startList.filter((item) => item.isStar);
		const lastLen = lastStarIndex.length - 1;
		if (allowClear && lastLen === index) {
			if (startList[index].isStar) {
				newStarList = startList.map((item) => {
					return { isStar: false };
				});
				onChange && onChange(0);
			}
		} else {
			newStarList = startList.map((item, i) => {
				let curItem = { isStar: false };
				if (i <= index) {
					curItem.isStar = true;
				}
				return curItem;
			});
			onChange && onChange(index);
		}

		setStarList(newStarList);
	};
	const handleStarCls = (item: any) => {
		return classNames("iconfont", `${prefixCls}-item`, {
			[`${iconfontClassNameActive}`]: item.isStar,
			[`${iconfontClassName}`]: !item.isStar,
			[`${prefixCls}-animation`]: item.isStar,
		});
	};

	return (
		<div className={cls} style={style}>
			{startList.map((item, index) => {
				return (
					<div
						className={handleStarCls(item)}
						key={index}
						style={{
							color: startList[index].isStar ? color : "",
							fontSize: size,
						}}
						onClick={() => handleStarClick(index)}
					></div>
				);
			})}
			<div className={`${prefixCls}-text`}>{children}</div>
		</div>
	);
};

Rate.defaultProps = {
	count: 5,
	startCount: -1,
	iconfontClassName: "icon-star",
	iconfontClassNameActive: "icon-star-active",
	allowClear: false,
	disabled: false,
	color: "yellow",
	size: "32px",
};

export default Rate;
