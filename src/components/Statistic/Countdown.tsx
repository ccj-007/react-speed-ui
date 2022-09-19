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
  /** 日期倒计时的数值(dayjs规范) */
  defaultDayVal?: number;
  /** 格式化倒计时 */
  format?: string;
  /** 数值倒计时 */
  count?: number;
  /** 倒计时类型 */
  countType: 'count' | 'day'
  /** 改变的回到 */
  onChange?: (val: string | number) => void;
  /** 清除定时器 */
  run?: boolean;
}

/**
 * Statistic 用于统计数据
 */
const Countdown: FC<CountdownProps> = (props) => {
  const { children, className, prefixCls: customizePrefixCls, style, defaultDayVal, countType = 'day', format = "YYYY-MM-DD HH:mm:ss", count: defaultCount = 5, onChange, run = true, ...restProps } = props;
  const [dayVal, setDayVal] = useState<any>((dayjs(defaultDayVal ? defaultDayVal : new Date().getTime()).format(format)))
  const [count, setCount] = useState<number>(defaultCount)

  useInterval(() => {
    countType === 'count' && setCount(count - 1)
    countType === 'day' && setDayVal(dayjs(dayVal).subtract(1, 'second').format(format))
  }, run ? 1000 : null)

  useEffect(() => {
    if (onChange) {
      if (countType === 'count') {
        onChange(count)
      } else {
        onChange(dayVal)
      }
    }
  }, [count, dayVal])

  const { getPrefixCls } = useContext(ConfigContext);
  let prefixCls = getPrefixCls("statistic-countdown", customizePrefixCls);

  const cls = classNames(prefixCls, className, {});
  return (
    <div className={cls} style={style} {...restProps}>
      {
        countType === 'day' && <div>{dayVal}</div>
      }
      {
        countType === 'count' && <div>{count}</div>
      }
      <div className={`${prefixCls}-warp`}>{children}</div>
    </div>
  );
};

Countdown.defaultProps = {
  format: "YYYY-MM-DD HH:mm:ss",
  count: 5,
  countType: 'day',
  run: true
};

export default Countdown;
