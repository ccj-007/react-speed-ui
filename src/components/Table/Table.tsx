import React, { FC, useContext, useState, ReactNode, useRef } from "react";
import { ConfigContext } from "../Config-Provider/ConfigProvider";
import classNames from "classnames";
import _ from "lodash";
import { Pagination } from "../index";

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
	} = props;
	const [state, setState] = useState(null);

	const { getPrefixCls } = useContext(ConfigContext);
	let prefixCls = getPrefixCls("table", customizePrefixCls);

	const cls = classNames(prefixCls, className, {});

	const tranDataSource = React.useMemo(() => {
		const cloneDataSource = _.cloneDeep(dataSource);
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
		console.log("开始转换", JSON.stringify(cloneDataSource));

		return cloneDataSource;
	}, [dataSource]);

	const handlePageChange = () => {};
	return (
		<div className={cls} style={style}>
			{showHeader && (
				<div className={`${prefixCls}-header`}>
					<>
						{columns.length &&
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
				{tranDataSource.length &&
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
					defaultCurrent={0}
					total={9}
					defaultPageSize={3}
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
