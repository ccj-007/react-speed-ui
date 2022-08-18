import React, { FC, useContext, ReactNode } from "react";
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
  /** value */
  value?: any;
  /** 默认选中 */
  defaultSelect?: number;
  /** 默认选中与radio的value值一致(注意用于互斥场景) */
  isExclude?: boolean;
  /** 默认选中 */
  disabled?: boolean;
  /** 改变时的回调 */
  onChange?: (value: any) => void
}

/**
 * Radio 单选框
 */
const Radio: FC<RadioProps> = (props) => {
  const { children, className, prefixCls: customizePrefixCls, value, onChange, defaultSelect, disabled, isExclude } = props;
  const { getPrefixCls } = useContext(ConfigContext);
  let prefixCls = getPrefixCls("radio", customizePrefixCls);

  const cls = classNames(prefixCls, className, {});
  const handleClick = (event: any) => {
    event.stopPropagation()
    onChange && onChange(value)
  }

  return (
    <div onClick={handleClick} className={cls}>
      {
        isExclude ? <input type="radio" id={`speed-radio-${value}`} className={`${prefixCls}-input`} checked={isExclude && value === defaultSelect} disabled={disabled} /> : <input type="radio" id={`speed-radio-${value}`} className={`${prefixCls}-input`} disabled={disabled} />
      }
      <label htmlFor={`speed-radio-${value}`} className={`${prefixCls}-label`}>{children}</label>
    </div>
  );
};

Radio.defaultProps = {
  disabled: false
};

export default Radio;
