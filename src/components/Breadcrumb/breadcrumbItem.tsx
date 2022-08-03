import React, {
  FC,
} from "react";
import classNames from "classnames";

interface BreadcrumbItemProps {
  children?: React.ReactNode;
  className?: string,
  /**分隔符自定义 */
  separator?: React.ReactNode
  /**分隔符自定义 */
  disabled?: React.ReactNode
  /**全局的配置 */
  allSeparator?: React.ReactNode
}

/**
 * 显示当前页面在系统层级结构中的位置，并能向上返回。
 *
 * ~~~js
 * import { BreadcrumbItem } from 'speed-ui'
 * ~~~
 */
const BreadcrumbItem: FC<BreadcrumbItemProps> = (props) => {
  const { children, separator, disabled = false, allSeparator, className } = props

  const classes = classNames('speed-breadcrumbItem', className, {})
  return (
    <div className={classes}>
      {separator ? separator : allSeparator}
      <span className={disabled ? 'speed-breadcrumbItem-disabled' : ''}>
        {children}
      </span>
    </div>
  );
};

export default BreadcrumbItem;
