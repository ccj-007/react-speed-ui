import { FC } from "react";
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
declare const Pagination: FC<PaginationProps>;
export default Pagination;
