import React, { FC, useContext, useState, ReactNode } from "react";
import { ConfigContext } from "../Config-Provider/ConfigProvider";
import classNames from "classnames";

export interface RadioProps {
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
 * Radio 组件模板
 */
const Radio: FC<RadioProps> = (props) => {
  const { children, className, prefixCls: customizePrefixCls, style } = props;
  const [state, setState] = useState(null);

  const { getPrefixCls } = useContext(ConfigContext);
  let prefixCls = getPrefixCls("radio", customizePrefixCls);

  const cls = classNames(prefixCls, className, {});
  return (
    <div className={cls} style={style}>
      <div>Radio</div>
      <div>{children}</div>
    </div>
  );
};

Radio.defaultProps = {};

export default Radio;
