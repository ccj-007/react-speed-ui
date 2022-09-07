import React, { FC, useContext, useState, ReactNode } from "react";
import { ConfigContext } from "../Config-Provider/ConfigProvider";
import classNames from "classnames";

export interface BadgeProps {
  /** 样式命名隔离 */
  prefixCls?: string;
  /** 组件子节点 */
  children?: ReactNode;
  /** 容器内联样式 */
  style?: React.CSSProperties;
  /** 组件类名 */
  className?: string;
  /** 数量 */
  count?: number;
  /** 在0的时候是否展示 */
  showZero?: boolean;
  /** 小圆点 */
  dot?: boolean;
  /** 原点的颜色 */
  dotColor?: string;
}

/**
 * Badge 组件模板
 */
const Badge: FC<BadgeProps> = (props) => {
  const { children, className, prefixCls: customizePrefixCls, style, count = 0, showZero = false, dot = false, dotColor = 'red' } = props;
  const [state, setState] = useState(null);

  const { getPrefixCls } = useContext(ConfigContext);
  let prefixCls = getPrefixCls("badge", customizePrefixCls);

  const childBox = () => {
    if (React.isValidElement(children)) {
      return (
        React.Children.map(children, (child) => {
          return React.cloneElement(child, {
            className: classNames(prefixCls, className),
            ...props
          }, <div className={`${prefixCls}-numDot`}> {count}</div>)
        })
      )
    }
  }
  return (
    <>
      {
        childBox()
      }
    </>
  );
};

Badge.defaultProps = {
  count: 0,
  showZero: false,
  dot: false,
  dotColor: 'red'
};

export default Badge;
