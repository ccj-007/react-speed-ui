import React, { FC, useContext } from "react";
import classNames from "classnames";
import { ConfigContext } from "../Config-Provider/ConfigProvider";

interface BreadcrumbProps {
  /** 样式隔离 */
  prefixCls: string;
  children?: React.ReactNode;
  className?: string;
  /**自定义链接函数，和 react-router 配置使用 */
  itemRender?: (
    route: any,
    params: any,
    routes: any,
    paths: any
  ) => React.ReactNode;
  /**路由的参数 */
  params?: Object;
  /**router 的路由栈信息 */
  routes?: any;
  /**全局的分隔符自定义 */
  allSeparator?: React.ReactNode;
}

/**
 * Breadcrumb 面包屑组件
 */
const Breadcrumb: FC<BreadcrumbProps> = (props) => {
  const {
    allSeparator,
    children,
    className,
    prefixCls: customizePrefixCls,
  } = props;
  const { getPrefixCls } = useContext(ConfigContext);
  const prefixCls = getPrefixCls("breadcrumb", customizePrefixCls);

  const renderChildren = () => {
    return React.Children.map(children, (child: any, index) => {
      return React.cloneElement(child, {
        allSeparator: (
          <span style={{ margin: "0 10px" }}>{allSeparator || ""}</span>
        ),
      });
    });
  };

  const classes = classNames(prefixCls, className);

  return <div className={classes}>{renderChildren()}</div>;
};

export default Breadcrumb;
