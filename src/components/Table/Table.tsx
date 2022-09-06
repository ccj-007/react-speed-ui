import React, { FC, useContext, useState, ReactNode, useRef } from "react";
import { ConfigContext } from "../Config-Provider/ConfigProvider";
import classNames from "classnames";
import _ from "lodash";
import { Pagination, PaginationProps } from "../index";
import { defaultPaginationParams } from "../Pagination/Pagination";

export interface TableProps {
	/** 样式命名隔离 */
	prefixCls?: string;
	/** 组件子节点 */
	children?: ReactNode;
	/** 容器内联样式 */
	style?: React.CSSProperties;
	/** 组件类名 */
	className?: string;
	/** 数据源 */
	dataSource?: any[];
	/** 列头的配置 */
	columns?: any[];
	/** 是否展示头部 */
	showHeader?: boolean;
	/** 行选择 */
	rowSelect?: any;
	/** 表格样式 */
	tableType?: "default" | "border";
	/** 分页器配置 */
	paginationParams?: PaginationProps;
}

/**
 * Table 表格
 */
const Table: FC<TableProps> = (props) => {
	const {
		children,
		className,
		prefixCls: customizePrefixCls,
		style,
		dataSource = [],
		columns = [],
		showHeader = true,
		rowSelect,
		tableType = "default",
		paginationParams = defaultPaginationParams,
	} = props;

	//将页码转为下标
	const defaultCurrent =
		paginationParams.current != null ? paginationParams.current - 1 : 1;
	const [current, setCurrent] = useState(defaultCurrent);

	const { getPrefixCls } = useContext(ConfigContext);
	let prefixCls = getPrefixCls("table", customizePrefixCls);

	const cls = classNames(prefixCls, className, {});

	const tranDataSource = React.useMemo(() => {
		let cloneDataSource = _.cloneDeep(dataSource);
		//处理edit新增的key
		if (columns[columns.length - 1].dataIndex === "edit") {
			cloneDataSource.forEach((data) => {
				data.edit = columns[columns.length - 1].render;
			});
		}
		columns.forEach((column) => {
			if ("render" in column) {
				//将所有dataSource的index坐标的key全部替换
				cloneDataSource.forEach((data) => {
					data[column.dataIndex] = column.render;
				});
			}
		});
		//处理分页器的按需展示
		let { pageSize, total } = paginationParams;
		if (pageSize != null && total != null) {
			let maxRange = current * pageSize + pageSize;
			if (maxRange >= cloneDataSource.length) {
				maxRange = cloneDataSource.length;
			}
			cloneDataSource = cloneDataSource.slice(current * pageSize, maxRange);
		}

		//如果当前页面无数据，自动返回上一个页面
		if (!cloneDataSource.length && current >= 1) {
			setCurrent(current - 1);
		}
		console.log("cloneDataSource", cloneDataSource);

		return cloneDataSource;
	}, [dataSource, current]);

	const handlePageChange = (page: number) => {
		setCurrent(page);
	};
	return (
		<div className={cls} style={style}>
			{showHeader && (
				<div className={`${prefixCls}-header`}>
					<>
						{columns.length >= 1 &&
							columns.map((column) => {
								return (
									<div className={`${prefixCls}-header-item`} key={column.key}>
										{column.title}
									</div>
								);
							})}
					</>
				</div>
			)}
			<div className={`${prefixCls}-body`}>
				{tranDataSource.length >= 1 &&
					tranDataSource.map((source, souceIndex) => {
						return (
							<div className={`${prefixCls}-body-row`} key={source.key}>
								<>
									{Object.keys(source).map((sourceKey, keyIndex) => {
										return (
											<div
												className={`${prefixCls}-body-row-item`}
												key={keyIndex}
											>
												{typeof source[sourceKey] === "function"
													? source[sourceKey](dataSource[souceIndex])
													: source[sourceKey]}
											</div>
										);
									})}
								</>
							</div>
						);
					})}
			</div>
			<div className={`${prefixCls}-page`}>
				<Pagination
					{...paginationParams}
					onChange={handlePageChange}
				></Pagination>
			</div>
		</div>
	);
};

Table.defaultProps = {
	tableType: "default",
	columns: [],
	dataSource: [],
	showHeader: true,
};

export default Table;
