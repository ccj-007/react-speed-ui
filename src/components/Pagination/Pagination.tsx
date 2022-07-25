import React, { FC, useContext, useState, useEffect } from "react";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { ConfigContext } from "../Config-Provider/index";
import Icon from "../Icon/index";

export interface PaginationProps {
	/** 当前页码 */
	current?: number;
	/**默认当前页码 */
	defaultCurrent: number;
	/**默认每页条数 */
	defaultPageSize?: number;
	/**禁止 */
	disabled?: boolean;
	/**每页条数 */
	pageSize?: number;
	/**总数据量 */
	total: number;
	/** 跳页的回调 */
	onChange?: (page: number, pageSize: number) => void;
	/**每页条数变化时的回调 */
	onShowSizeChange?: (curPageSize: number) => void;
	/**是否展示跳转页面 */
	editJumpPage: boolean;
	/**是否展示修改每页条数 */
	editPageSize: boolean;
}

const Pagination: FC<PaginationProps> = (props) => {
	let {
		current,
		defaultCurrent,
		total = 50,
		pageSize,
		defaultPageSize,
		disabled,
		onChange,
		editJumpPage = false,
		editPageSize = false,
	} = props;

	pageSize = defaultPageSize ? defaultPageSize : 10;
	current = defaultCurrent ? defaultCurrent : 1;

	const { getPrefixCls } = useContext(ConfigContext);
	let prefixCls = getPrefixCls("pagination");

	let pageNums = total / pageSize;
	let [cur, setCur] = useState(current);
	let [newPageSize, setNewPageSize] = useState(pageSize);

	let pageClasses = (index: number) => {
		if (disabled) {
			return `${prefixCls}-page ${prefixCls}-page-disabled`;
		}
		if (index === cur) {
			return `${prefixCls}-page ${prefixCls}-page-active`;
		}
		return `${prefixCls}-page`;
	};

	useEffect(() => {
		onChange && onChange(cur, newPageSize);
	}, [cur]);

	const changePageNums = (curr: number) => {
		if (disabled) return;
		setCur(curr);
	};
	const changeLeftPageNums = () => {
		if (cur === 0 || disabled) return;

		setCur(cur - 1);
	};

	const changeRightPageNums = () => {
		if (cur + 1 === pageNums || disabled) return;

		setCur(cur + 1);
	};
	return (
		<>
			<div className={`${prefixCls}`}>
				<div className={pageClasses(-1)} onClick={changeLeftPageNums}>
					<Icon icon={solid("angle-left")} size="1x" color="#000"></Icon>
				</div>
				{/*pagination */}
				{Array(pageNums)
					.fill(0)
					.map((num, index) => {
						return (
							<button
								className={pageClasses(index)}
								key={index}
								onClick={() => {
									changePageNums(index);
								}}
							>
								{index + 1}
							</button>
						);
					})}
				<div className={pageClasses(-1)} onClick={changeRightPageNums}>
					<Icon icon={solid("angle-right")} size="1x" color="#000"></Icon>
				</div>
			</div>
		</>
	);
};

export default Pagination;
