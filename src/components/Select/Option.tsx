import React, { FC, useContext, useState, ReactNode } from "react";
import { ConfigContext } from "../Config-Provider/ConfigProvider";
import classNames from "classnames";

export interface OptionProps {
  /** 样式命名隔离 */
  prefixCls?: string;
  /** 组件子节点 */
  children?: string;
  /** 容器内联样式 */
  style?: React.CSSProperties;
  /** 组件类名 */
  className?: string;
  /** 默认值 */
  defaultValue?: string;
  /** 新的选项 */
  newVal?: string
  /** 点击的回调 */
  onSelect?: (option: string) => void
}

/**
 * Option 
 */
const Option: FC<OptionProps> = (props) => {
  const { children, className, prefixCls: customizePrefixCls, style, defaultValue, newVal, onSelect } = props;
  const [val, setVal] = useState(newVal || defaultValue);

  const { getPrefixCls } = useContext(ConfigContext);
  let prefixCls = getPrefixCls("select-option", customizePrefixCls);

  const cls = classNames(prefixCls, className, {
    [`${prefixCls}-item`]: true,
    [`${prefixCls}-item-active`]: typeof children === 'string' && newVal === children
  });

  const handleSelect = () => {
    if (typeof children === 'string') {
      onSelect && onSelect(children)
    }
  }
  return (
    <div className={cls} style={style} onClick={handleSelect}>
      <div>{children}</div>
    </div>
  );
};

Option.defaultProps = {};

export default Option;
