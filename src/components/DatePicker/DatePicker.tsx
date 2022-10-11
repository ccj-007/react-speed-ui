import React, { FC, useContext, useState, ReactNode, useRef } from "react";
import { ConfigContext } from "../Config-Provider/ConfigProvider";
import classNames from "classnames";
import Calendar, { type CalendarProps } from '../Calendar'
import { Input, Icon, Transition } from "../index";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import useClickOutside from '../../hooks/useClickOutside'

export interface DatePickerProps {
  /** 样式命名隔离 */
  prefixCls?: string;
  /** 组件子节点 */
  children?: ReactNode;
  /** 容器内联样式 */
  style?: React.CSSProperties;
  /** 组件类名 */
  className?: string;
  /** 默认值文案 */
  defaultValue?: string;
  /** 是否默认展示 */
  visible?: boolean;
  /** 禁用 */
  disabled?: boolean;
  /** 改变的回调 */
  onChange?: (val: any) => void;
}

/**
 * DatePicker 日期选择器
 */
const DatePicker: FC<DatePickerProps> = (props) => {
  const { children, className, prefixCls: customizePrefixCls, style, defaultValue = '输入你的日期', onChange, visible = false, disabled = false } = props;
  const [toggle, setToggle] = useState(false);
  const [val, setVal] = useState(defaultValue);
  const selectRef = useRef(null)
  const { getPrefixCls } = useContext(ConfigContext);
  let prefixCls = getPrefixCls("datePicker", customizePrefixCls);

  useClickOutside(selectRef, () => {
    setToggle(false)
  })
  const cls = classNames(prefixCls, className, {});
  const handleClick = () => {
    !disabled && setToggle(!toggle)
  }
  const handleSelect = (data: any) => {
    data.format && setVal(data.format)
    onChange && onChange(data)
  }
  return (
    <div className={cls} ref={selectRef} style={{ width: '280px', height: '36px', ...style }} >
      <Input style={{ width: '280px' }} disabled={disabled} placeholder={val} readOnly onClick={handleClick}></Input>
      {/* icon */}
      <Icon icon={solid("angle-down")} onClick={handleClick} className={`${prefixCls}-icon`} size="1x" color="#aaa"></Icon>

      <Transition in={visible ? visible : toggle} timeout={600} classNames='zoom-in-top'>
        {
          <div className={`${prefixCls}-options`} >
            <Calendar onSelect={handleSelect} mode='mini'></Calendar>
          </div>
        }
      </Transition>
    </div >
  );
};

DatePicker.defaultProps = {
  visible: false,
  disabled: false
};

export default DatePicker;
