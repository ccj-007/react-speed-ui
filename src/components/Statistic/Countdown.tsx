import React, { FC, useContext, useState, ReactNode } from "react";
import { ConfigContext } from "../Config-Provider/ConfigProvider";
import classNames from "classnames";

export interface CountdownProps {
  /** 样式命名隔离 */
  prefixCls?: string;
  /** 组件子节点 */
  children?: ReactNode;
  /** 容器内联样式 */
  style?: React.CSSProperties;
  /** 组件类名 */
  className?: string;
  /** 数值的标题 */
  title?: React.ReactNode;
  /** 组件类名 */
  value?: number;
  /** 格式化倒计时 */
  format?: React.ReactNode;
}

/**
 * Statistic 用于统计数据
 */
const Countdown: FC<CountdownProps> = (props) => {
  const { children, className, prefixCls: customizePrefixCls, style } = props;
  const [state, setState] = useState(null);

  const { getPrefixCls } = useContext(ConfigContext);
  let prefixCls = getPrefixCls("statistic-countdown", customizePrefixCls);

  const cls = classNames(prefixCls, className, {});
  return (
    <div className={cls} style={style}>
      <div>countdown</div>
      <div className={`${prefixCls}-warp`}>{children}</div>
    </div>
  );
};

Countdown.defaultProps = {};

export default Countdown;
