import React, {
	FC,
	useContext,
	useState,
	useEffect,
	useRef,
	ChangeEvent,
} from "react";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { ConfigContext } from "../Config-Provider/ConfigProvider";
import Icon from "../Icon/index";

export interface PaginationProps {
	/** 当前页码 */
	current?: number;
	/**默认当前页码 */
	defaultCurrent?: number;
	/**默认每页条数 */
	defaultPageSize?: number;
	/**禁止 */
	disabled?: boolean;
	/**每页条数 */
	pageSize?: number;
	/**总数据量 */
	total?: number;
	/** 跳页的回调 */
	onChange?: (page: number, pageSize: number) => void;
	/**每页条数变化时的回调 */
	onShowSizeChange?: (curPageSize: number) => void;
	/**是否展示跳转页面 */
	editJumpPage?: boolean;
	/**是否展示修改每页条数 */
	editPageSize?: boolean;
	/**是否展示总条数 */
	showTotal?: boolean;
}

/**
 * Pagination  分页器组件
 */
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
		showTotal = false,
		onShowSizeChange,
	} = props;

	pageSize = defaultPageSize ? defaultPageSize : 10;
	current = defaultCurrent ? defaultCurrent : 1;

	const { getPrefixCls } = useContext(ConfigContext);
	let prefixCls = getPrefixCls("pagination");
	let [cur, setCur] = useState(current);
	let [newPageSize, setNewPageSize] = useState(pageSize);

	let pageNums = Math.ceil(total / newPageSize);

	let jumpRef = useRef<any>();
	let sizeRef = useRef<any>();

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

	const changeInput = (e: ChangeEvent<HTMLInputElement>) => {
		let val = Number(e.target.value);
		if (0 <= val && val <= pageNums) {
			onChange && onChange(cur, newPageSize);
			setCur(val - 1);
		} else {
			jumpRef.current.value = "";
		}
	};

	const changeInputPageSize = (e: ChangeEvent<HTMLInputElement>) => {
		let val = Number(e.target.value);

		if (10 <= val && val <= total) {
			setNewPageSize(val);
			onShowSizeChange && onShowSizeChange(val);
		} else {
			sizeRef.current.value = "";
		}
	};
	return (
		<>
			<div className={`${prefixCls}`}>
				{showTotal && (
					<>
						<span className={`${prefixCls}-text`}>Total</span>
						<span className={`${prefixCls}-total`}>{total}</span>
						<span className={`${prefixCls}-text`}>items</span>
					</>
				)}
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

				{/* 跳转页面 */}
				{editJumpPage && (
					<>
						<span className={`${prefixCls}-text`}>跳转</span>

						<input
							className={`${prefixCls}-input`}
							ref={jumpRef}
							onChange={changeInput}
						></input>
						<span className={`${prefixCls}-text`}>页</span>
					</>
				)}

				{/* 设置每页多少条 */}
				{editPageSize && (
					<>
						<input
							className={`${prefixCls}-input`}
							ref={sizeRef}
							onBlur={changeInputPageSize}
						></input>
						<span className={`${prefixCls}-text`}>{newPageSize}items/页</span>
					</>
				)}
			</div>
		</>
	);
};

export default Pagination;
