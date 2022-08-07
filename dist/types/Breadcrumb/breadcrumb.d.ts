import React, { FC } from "react";
interface BreadcrumbProps {
    children?: React.ReactNode;
    className?: string;
    /**自定义链接函数，和 react-router 配置使用 */
    itemRender?: (route: any, params: any, routes: any, paths: any) => React.ReactNode;
    /**路由的参数 */
    params?: Object;
    /**router 的路由栈信息 */
    routes?: any;
    /**全局的分隔符自定义 */
    allSeparator?: React.ReactNode;
}
/**
 * 显示当前页面在系统层级结构中的位置，并能向上返回。
 *
 * ~~~js
 * import { BreadCrumb } from 'speed-ui'
 * ~~~
 */
declare const Breadcrumb: FC<BreadcrumbProps>;
export default Breadcrumb;
