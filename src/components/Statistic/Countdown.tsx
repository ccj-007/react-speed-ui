import React, { FC, useContext, useState, ReactNode, useRef, useEffect } from "react";
import { ConfigContext } from "../Config-Provider/ConfigProvider";
import classNames from "classnames";
import dayjs from 'dayjs';
import useInterval from '../../hooks/useInterval';

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
  /** 倒计时的数值(dayjs规范) */
  value?: number;
  /** 格式化倒计时 */
  format?: string;
}

/**
 * Statistic 用于统计数据
 */
const Countdown: FC<CountdownProps> = (props) => {
  const { children, className, prefixCls: customizePrefixCls, style, value = 100, format = "YYYY-MM-DD HH:mm:ss", ...restProps } = props;
  const [dayVal, setDayVal] = useState<any>(dayjs(value ? value : new Date()).format(format))


  useInterval(() => {
  }, 1000)

  const { getPrefixCls } = useContext(ConfigContext);
  let prefixCls = getPrefixCls("statistic-countdown", customizePrefixCls);

  const cls = classNames(prefixCls, className, {});
  return (
    <div className={cls} style={style} {...restProps}>
      <div>{dayVal}</div>
      <div className={`${prefixCls}-warp`}>{children}</div>
    </div>
  );
};

Countdown.defaultProps = {
  format: "YYYY-MM-DD HH:mm:ss"
};

export default Countdown;
