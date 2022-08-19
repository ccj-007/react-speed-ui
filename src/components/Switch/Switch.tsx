/** @jsxImportSource @emotion/react */
import React, { FC, useContext, useState, ReactNode } from "react";
import { ConfigContext } from "../Config-Provider/ConfigProvider";
import classNames from "classnames";
import { css } from '@emotion/react'
export interface SwitchProps {
  /** 样式命名隔离 */
  prefixCls?: string;
  /** 组件子节点 */
  children?: ReactNode;
  /** 容器内联样式 */
  style?: React.CSSProperties;
  /** 组件类名 */
  className?: string;
  /** 当前是否被选中 */
  checked?: boolean;
  /** 是否禁用 */
  disabled?: boolean;
  /** 变化时的回调 */
  onChange?: () => void;
  /** 点击时的回调 */
  onClick?: () => void;
  /** size */
  size?: 'small' | 'default';
}

/**
 * Switch 组件模板
 */
const Switch: FC<SwitchProps> = (props) => {
  const { children, className, prefixCls: customizePrefixCls, style, checked, disabled, onChange, onClick, size } = props;
  const [toggle, setToggle] = useState(checked);

  const { getPrefixCls } = useContext(ConfigContext);
  let prefixCls = getPrefixCls("switch", customizePrefixCls);

  const warpCls = classNames(prefixCls, className, {
    [`${prefixCls}-bg-active`]: toggle,
  });
  const smallWarpCls = classNames(`${prefixCls}-small`, className, {
    [`${prefixCls}-small-bg-active`]: toggle,
  });
  const cirCls = classNames(`${prefixCls}-circle`, {
    [`${prefixCls}-circle-active`]: toggle,
  });
  const smallCirCls = classNames(`${prefixCls}-small-circle`, {
    [`${prefixCls}-small-circle-active`]: toggle,
  });

  const handleWarpCls = () => {
    return size === 'small' ? smallWarpCls : warpCls
  }
  const handleCls = () => {
    return size === 'small' ? smallCirCls : cirCls
  }

  React.useEffect(() => {
    onChange && onChange()
  }, [toggle])

  const handleSwitch = () => {
    if (disabled) return
    onClick && onClick()
    setToggle(!toggle)
  }

  return (
    <div className={handleWarpCls()} style={style} css={css`
    cursor: ${disabled ? "not-allowed !important" : ''};
`}>
      <div className={handleCls()} onClick={handleSwitch}
        css={css`
      cursor: ${disabled ? "not-allowed !important" : ''};
  `}></div>
    </div >
  );
};

Switch.defaultProps = {
  checked: false,
  size: 'default',
  disabled: false
};

export default Switch;
