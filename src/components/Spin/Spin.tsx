import React, { FC, useContext, useState, ReactNode, useEffect } from 'react';
import { ConfigContext } from '../Config-Provider/ConfigProvider';
import classNames from 'classnames';
import Icon from '../Icon';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';
import { SizeProp } from '@fortawesome/fontawesome-svg-core';

export interface SpinProps {
  /** 样式命名隔离 */
  prefixCls?: string;
  /** 组件子节点 */
  children?: ReactNode;
  /** 容器内联样式 */
  style?: React.CSSProperties;
  /** 组件类名 */
  className?: string;
  /** 组件类名 */
  delay?: number;
  /** das */
  size?: SizeProp;
  /** 提示文案 */
  tip?: string;
  /** 组件类名 */
  iconJSX?: React.ReactNode;
  /** 是否是加载状态 */
  spinning?: boolean;
  /** 显示颜色 */
  color?: string;
}

/**
 * Spin 加载中的状态
 */
const Spin: FC<SpinProps> = props => {
  const { children, className, prefixCls: customizePrefixCls, style, iconJSX, spinning, tip, size, delay } = props;
  const [state, setState] = useState(null);
  const { getPrefixCls, themeOptions } = useContext(ConfigContext);
  let prefixCls = getPrefixCls('spin', customizePrefixCls);
  const cls = classNames(prefixCls, className, {});
  const [spinnings, setSpinnings] = useState(spinning);

  const spinCls = classNames({
    'fa-spin': spinnings,
  });

  useEffect(() => {
    if (delay && !spinning) {
      setTimeout(() => {
        setSpinnings(true);
      }, delay);
    }
  }, []);

  return (
    <div className={cls} style={style}>
      {iconJSX ? (
        iconJSX
      ) : (
        <Icon
          icon={solid('spinner')}
          size={size}
          color='blue'
          // className="fa-spin"
          className={spinCls}
        ></Icon>
      )}
      <div>{tip}</div>
    </div>
  );
};

Spin.defaultProps = {
  spinning: true,
  size: '1x',
};

export default Spin;
