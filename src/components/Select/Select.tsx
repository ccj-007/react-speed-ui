import React, { FC, useContext, useState, ReactNode, useRef } from "react";
import { ConfigContext } from "../Config-Provider/ConfigProvider";
import classNames from "classnames";
import Option, { type OptionProps } from './Option'
import { Input, Icon, Transition } from "../index";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import useClickOutside from '../../hooks/useClickOutside'
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
  onChange?: (val: any) => void;
}

/**
 * Select 组件模板
 */
const Select: FC<SelectProps> & { Option: FC<OptionProps> } = (props) => {
  const { children, className, prefixCls: customizePrefixCls, style, defaultValue = '输入你的默认项', onChange } = props;
  const [toggle, setToggle] = useState(false);
  const [val, setVal] = useState(defaultValue);
  const selectRef = useRef(null)
  const { getPrefixCls } = useContext(ConfigContext);
  let prefixCls = getPrefixCls("select", customizePrefixCls);

  useClickOutside(selectRef, () => {
    setToggle(false)
  })
  const cls = classNames(prefixCls, className, {});
  const handleClick = () => {
    setToggle(!toggle)
  }
  const onSelect = (node: string) => {
    setVal(node)
    setTimeout(() => {
      setToggle(false)
      onChange && onChange(node)
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
    <div className={cls} ref={selectRef} style={{ width: '300px', height: '36px', ...style }} >
      <Input placeholder={val} readOnly onClick={handleClick}></Input>
      {/* icon */}
      <Icon icon={solid("angle-down")} onClick={handleClick} className={`${prefixCls}-icon`} size="1x" color="#aaa"></Icon>

      <Transition in={toggle} timeout={600} classNames='moveY'>
        {
          <div className={`${prefixCls}-options`}>
            {renderChild()}
          </div>
        }
      </Transition>
    </div >
  );
};

Select.defaultProps = {
  defaultValue: '输入你的默认项'
};

Select.Option = Option

export default Select;
