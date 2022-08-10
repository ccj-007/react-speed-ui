import React, { FC, useContext } from "react";
import { ConfigContext } from "../Config-Provider/ConfigProvider";

export interface PageHeaderProps {
	/** 主标题 */
	title: string;
	/** 副标题 */
	subtitle?: string;
}

/**
 * Steps 步骤条
 */
const PageHeader: FC<PageHeaderProps> = (props) => {
	const { title, subtitle } = props;
	const { getPrefixCls } = useContext(ConfigContext);
	let prefixCls = getPrefixCls("pageHeader");

	return (
		<div className={`${prefixCls}-warp`}>
			<span className={`${prefixCls}`}>{title}</span>
			<span className={`${prefixCls}-subtitle`}>{subtitle}</span>
		</div>
	);
};

export default PageHeader;
