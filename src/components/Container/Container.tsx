import React, { FC, useContext, useState, ReactNode } from "react";
import { ConfigContext } from "../Config-Provider/ConfigProvider";
import classNames from "classnames";

export interface ContainerProps {
  /** 样式命名隔离 */
  prefixCls?: string;
  /** 组件子节点 */
  children?: ReactNode;
  /** 容器内联样式 */
  style?: React.CSSProperties;
  /** 组件类名 */
  className?: string;
  /** 对齐方式 */
  align?: 'center' | 'around' | 'between';
  /** 方向 */
  direction?: 'row' | 'column';
}

/**
 * Container 组件模板
 */
const Container: FC<ContainerProps> = (props) => {
  const { children, className, prefixCls: customizePrefixCls, style, align = 'center', direction = 'row' } = props;

  const { getPrefixCls } = useContext(ConfigContext);
  let prefixCls = getPrefixCls("container", customizePrefixCls);

  const cls = classNames(prefixCls, className,
    {
      [`${prefixCls}-${direction}`]: direction,
      [`${prefixCls}-${align}`]: align
    });

  return (
    <div className={cls} style={style}>
      {children}
    </div>
  );
};

Container.defaultProps = {
  align: 'center',
  direction: 'row'
};

export default Container;
