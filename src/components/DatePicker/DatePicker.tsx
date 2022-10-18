import React, { FC, useContext, useState, ReactNode, useRef } from 'react';
import { ConfigContext } from '../Config-Provider/ConfigProvider';
import classNames from 'classnames';
import Calendar, { type CalendarProps } from '../Calendar';
import { Input, Icon, Transition } from '../index';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';
import useClickOutside from '../../hooks/useClickOutside';
type LimitDateType = {
  day: number;
  month: number;
  year: number;
};

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
  /** 开始日期 */
  startDate?: LimitDateType;
  /** 结束日期 */
  endDate?: LimitDateType;
  /** 是否展示范围 */
  showArea?: boolean;
  /** 改变的回调 */
  onChange?: (val: any) => void;
}

/**
 * DatePicker 日期选择器
 */
const DatePicker: FC<DatePickerProps> = props => {
  const {
    children,
    className,
    prefixCls: customizePrefixCls,
    style,
    defaultValue = '输入你的日期',
    onChange,
    visible = false,
    disabled = false,
    showArea = false,
    startDate,
    endDate,
  } = props;
  const { getPrefixCls } = useContext(ConfigContext);
  let prefixCls = getPrefixCls('datePicker', customizePrefixCls);
  const [minDate, setMinDate] = useState<LimitDateType | undefined>(startDate);
  const [maxDate, setMaxDate] = useState<LimitDateType | undefined>(endDate);

  const handleMinDate = React.useCallback(
    (dataObj: LimitDateType) => {
      setMinDate(dataObj);
    },
    [minDate],
  );
  const handleMaxDate = React.useCallback(
    (dataObj: LimitDateType) => {
      setMaxDate(dataObj);
    },
    [maxDate],
  );

  /**
   * 范围组件
   */
  const DatePickerItem = (props: any) => {
    const { minDate, maxDate, handleMinDate, handleMaxDate, visible, disabled } = props;
    const [toggle, setToggle] = useState(false);
    const selectRef = useRef(null);
    const [val, setVal] = useState(defaultValue);

    useClickOutside(selectRef, () => {
      setToggle(false);
    });
    const cls = classNames(prefixCls, className, {});
    const handleClick = () => {
      !disabled && setToggle(!toggle);
    };
    const handleSelect = (data: any) => {
      let dateArr = data.format.split('-');
      console.log('改变的日期', data);
      let obj = {
        year: dateArr[0],
        month: dateArr[1],
        day: dateArr[2],
      };

      handleMinDate && handleMinDate(obj);
      handleMaxDate && handleMaxDate(obj);

      data.format && setVal(data.format);
      onChange && onChange(data);
    };

    return (
      <div className={cls} ref={selectRef} style={{ width: '200px', height: '36px', ...style }}>
        <Input
          inputClassName={`${prefixCls}-input`}
          disabled={disabled}
          placeholder={val}
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
              <Calendar onSelect={handleSelect} minDate={minDate} maxDate={maxDate} mode='mini'></Calendar>
            </div>
          }
        </Transition>
      </div>
    );
  };
  const DatePickerItemMemo = React.memo(DatePickerItem);

  return (
    <div style={{ display: 'flex' }}>
      <DatePickerItemMemo
        disabled={disabled}
        visible={visible}
        maxDate={maxDate}
        handleMinDate={handleMinDate}
      ></DatePickerItemMemo>
      {showArea && (
        <DatePickerItemMemo
          disabled={disabled}
          visible={visible}
          minDate={minDate}
          handleMaxDate={handleMaxDate}
        ></DatePickerItemMemo>
      )}
    </div>
  );
};

DatePicker.defaultProps = {
  visible: false,
  disabled: false,
  showArea: false,
};

export default DatePicker;
