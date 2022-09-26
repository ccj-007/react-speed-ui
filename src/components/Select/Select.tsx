import React, { FC, useContext, useState, ReactNode } from "react";
import { ConfigContext } from "../Config-Provider/ConfigProvider";
import classNames from "classnames";
import Option, { type OptionProps } from './Option'
import { Input, Icon } from "../index";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
export interface SelectProps {
  /** 样式命名隔离 */
  prefixCls?: string;
  /** 组件子节点 */
  children?: ReactNode;
  /** 容器内联样式 */
  style?: React.CSSProperties;
  /** 组件类名 */
  className?: string;
  /** 默认值 */
  defaultValue?: string;
  /** 改变的回调 */
  onChange?: () => void;
}

/**
 * Select 组件模板
 */
const Select: FC<SelectProps> & { Option: FC<OptionProps> } = (props) => {
  const { children, className, prefixCls: customizePrefixCls, style, defaultValue = '输入你的默认项', onChange } = props;
  const [toggle, setToggle] = useState(false);
  const [val, setVal] = useState(defaultValue);

  const { getPrefixCls } = useContext(ConfigContext);
  let prefixCls = getPrefixCls("select", customizePrefixCls);

  const cls = classNames(prefixCls, className, {});
  const handleClick = () => {
    setToggle(!toggle)
  }
  const onSelect = (node: string) => {
    setVal(node)
    setTimeout(() => {
      setToggle(false)
    }, 500);
  }

  const renderChild = () => {
    return React.Children.map(children, (child, index) => {
      let childElement = child as React.FunctionComponentElement<OptionProps>
      return React.cloneElement(childElement, {
        defaultValue: defaultValue,
        className: `${prefixCls}-item`,
        onSelect: onSelect,
        newVal: val
      })
    })
  }

  return (
    <div className={cls} style={{ width: '300px', height: '36px', ...style }} >
      <Input placeholder={val} readOnly onClick={handleClick}></Input>
      {/* icon */}
      <Icon icon={solid("angle-down")} onClick={handleClick} className={`${prefixCls}-icon`} size="1x" color="#aaa"></Icon>
      {
        toggle && <div className={`${prefixCls}-options`}>
          {renderChild()}
        </div>
      }
    </div >
  );
};

Select.defaultProps = {
  defaultValue: '输入你的默认项'
};

Select.Option = Option

export default Select;
