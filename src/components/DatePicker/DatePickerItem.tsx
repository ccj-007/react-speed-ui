import * as React from "react";
import Calendar, { type CalendarProps } from '../Calendar';
import { Input, Icon, Transition } from '../index';
import useClickOutside from '../../hooks/useClickOutside';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';
import classNames from 'classnames';
import type { LimitDateType } from "./DatePicker";

export interface DatePickerItemProps {
  /** 样式命名隔离 */
  prefixCls?: string;
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
  /** 开始日期 */
  showArea?: boolean;
  /** 改变的回调 */
  onChange?: (val: any) => void;
  /** 最小日期 */
  minDate?: LimitDateType;
  /** 最大日期 */
  maxDate?: LimitDateType;
  /** 最大日期 */
  handleMinDate?: any;
  /** 最大日期 */
  handleMaxDate?: any;
}

const getDateObj = (val: string | undefined) => {
  if (val) {
    let data = val.split('-')
    return {
      year: +data[0],
      month: +data[1],
      day: +data[2],
    };
  }
}

/**
 * DatePickerItem 范围组件
 */
const DatePickerItem = (props: DatePickerItemProps) => {
  const { minDate, maxDate, handleMinDate, handleMaxDate, visible, disabled, onChange, defaultValue, className, prefixCls } = props;
  const [toggle, setToggle] = React.useState(false);
  const inputVal = React.useRef(defaultValue);
  const [curDate, setCurDate] = React.useState<any>(getDateObj(inputVal.current));
  const selectRef = React.useRef(null);

  React.useEffect(() => {
    console.warn("最大", maxDate);
  }, [maxDate])

  React.useEffect(() => {
    console.warn("最小", minDate);
  }, [minDate])
  useClickOutside(selectRef, () => {
    setToggle(false);
  });
  const cls = classNames(prefixCls, className, {});
  const handleClick = () => {
    !disabled && setToggle(!toggle);
  };
  const handleSelect = (data: any) => {
    let obj = getDateObj(data.format)
    setCurDate(obj)
    handleMinDate && handleMinDate(obj);
    handleMaxDate && handleMaxDate(obj);

    inputVal.current = (data.format);
    onChange && onChange(data);
  };

  return (
    <div className={cls} ref={selectRef} style={{ width: '200px', height: '36px' }}>
      <Input
        inputClassName={`${prefixCls}-input`}
        disabled={disabled}
        placeholder={inputVal.current}
        readOnly
        onClick={handleClick}
      ></Input>
      {/* icon */}
      <Icon
        icon={solid('angle-right')}
        onClick={handleClick}
        className={`${prefixCls}-icon`}
        size='1x'
        color='#aaa'
      ></Icon>

      <Transition in={visible ? visible : toggle} timeout={600} classNames='zoom-in-top'>
        {
          <div className={`${prefixCls}-options`}>
            {
              minDate && (
                <Calendar onAreaSelect={handleSelect} minDate={minDate} mode='mini' defaultObj={curDate}></Calendar>
              )
            }
            {
              maxDate && (
                <Calendar onAreaSelect={handleSelect} maxDate={maxDate} mode='mini' defaultObj={curDate}></Calendar>
              )
            }
          </div>
        }
      </Transition>
    </div>
  );
};

export default React.memo(DatePickerItem)