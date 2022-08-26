import React, { FC, useContext, useState, ReactNode } from "react";
import { ConfigContext } from "../Config-Provider/ConfigProvider";
import classNames from "classnames";

export interface SpinProps {
  /** 样式命名隔离 */
  prefixCls?: string;
  /** 组件子节点 */
  children?: ReactNode;
  /** 容器内联样式 */
  style?: React.CSSProperties;
  /** 组件类名 */
  className?: string;
}

/**
 * Spin 组件模板
 */
const Spin: FC<SpinProps> = (props) => {
  const { children, className, prefixCls: customizePrefixCls, style } = props;
  const [state, setState] = useState(null);

  const { getPrefixCls } = useContext(ConfigContext);
  let prefixCls = getPrefixCls("spin", customizePrefixCls);

  const cls = classNames(prefixCls, className, {});
  return (
    <div className={cls} style={style}>
      <div>Spin</div>
      <div>{children}</div>
    </div>
  );
};

Spin.defaultProps = {};

export default Spin;
