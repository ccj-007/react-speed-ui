import React, { FC, useContext, useState, ReactNode } from "react";
import { ConfigContext } from "../Config-Provider/ConfigProvider";
import classNames from "classnames";
import { Container } from "../index";
import Countdown, { CountdownProps } from './Countdown'
export interface StatisticProps {
  /** 样式命名隔离 */
  prefixCls?: string;
  /** 组件子节点 */
  children?: ReactNode;
  /** 容器内联样式 */
  style?: React.CSSProperties;
  /** 组件类名 */
  className?: string;
  /** 设置小数点 */
  toFixedNum?: string;
  /** 数值内容 */
  value?: string | number;
  /** 数值前缀 */
  prefix?: React.ReactNode;
  /** 数值后缀 */
  suffix?: React.ReactNode;
  /** 数值的标题 */
  title?: React.ReactNode;
}

/**
 * Statistic 用于统计数据
 */
const Statistic: FC<StatisticProps> & {
  Countdown: FC<CountdownProps>
} = (props) => {
  const { children, className, prefixCls: customizePrefixCls, style, title, suffix, prefix, value, toFixedNum } = props;
  const [state, setState] = useState(null);

  const { getPrefixCls } = useContext(ConfigContext);
  let prefixCls = getPrefixCls("statistic", customizePrefixCls);

  const cls = classNames(prefixCls, className, {});
  return (
    <div className={cls} style={style}>
      {children}
      <Container direction="column" align="between">
        <div className={`${prefixCls}-title`}>{title}</div>
        <div className={`${prefixCls}-value`}>{value}</div>
      </Container>
    </div>
  );
};

Statistic.Countdown = Countdown

Statistic.defaultProps = {};

export default Statistic;
