import React, { FC } from "react";
interface BreadcrumbItemProps {
    children?: React.ReactNode;
    className?: string;
    /**分隔符自定义 */
    separator?: React.ReactNode;
    /**分隔符自定义 */
    disabled?: React.ReactNode;
    /**全局的配置 */
    allSeparator?: React.ReactNode;
}
/**
 * ~~~js
 * import { BreadcrumbItem } from 'speed-ui'
 * ~~~
 */
declare const BreadcrumbItem: FC<BreadcrumbItemProps>;
export default BreadcrumbItem;
