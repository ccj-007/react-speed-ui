import * as React from 'react';
import Calendar, { type CalendarProps } from '../Calendar';
import { Input, Icon, Transition } from '../index';
import useClickOutside from '../../hooks/useClickOutside';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';
import { ConfigContext } from '../Config-Provider/ConfigProvider';
import classNames from 'classnames';
import type { LimitDateType } from './DatePicker';

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
  /** 宽度 */
  width?: Number;
  /** 自定义icon */
  customIcon?: React.ReactNode;
  /** 位置信息 */
  position?: 'left' | 'right';
}

const getDateObj = (val: string | undefined) => {
  if (val) {
    let data = val.split('-');
    return {
      year: +data[0],
      month: +data[1],
      day: +data[2],
    };
  }
};

/**
 * DatePickerItem 范围组件
 */
const DatePickerItem = (props: DatePickerItemProps) => {
  const {
    minDate,
    maxDate,
    handleMinDate,
    handleMaxDate,
    visible,
    disabled,
    onChange,
    defaultValue,
    className,
    prefixCls: customizePrefixCls,
    customIcon,
    position,
    showArea,
    width,
  } = props;
  const [toggle, setToggle] = React.useState(false);
  const inputVal = React.useRef(defaultValue);
  const [curDate, setCurDate] = React.useState<any>(getDateObj(inputVal.current));
  const selectRef = React.useRef(null);
  const { getPrefixCls } = React.useContext(ConfigContext);
  let prefixCls = getPrefixCls('datePickerItem');
  const getDefaultIcon = () => {
    return <Icon icon={solid('calendar-days')} size='1x' color='#aaa'></Icon>;
  };

  React.useEffect(() => {
    console.warn('最大', maxDate);
  }, [maxDate]);

  React.useEffect(() => {
    console.warn('最小', minDate);
  }, [minDate]);
  useClickOutside(selectRef, () => {
    setToggle(false);
  });
  const cls = classNames(prefixCls, className, {});

  const handleClick = () => {
    !disabled && setToggle(!toggle);
  };
  const handleSelect = (data: any) => {
    let obj = getDateObj(data.format);
    setCurDate(obj);
    handleMinDate && handleMinDate(obj);
    handleMaxDate && handleMaxDate(obj);

    inputVal.current = data.format;
    onChange && onChange(data);
  };

  const getInputStyle = () => {
    return {
      width: '200px',
      height: '36px',
      borderLeft: position === 'right' && showArea ? 'none' : '',
      borderRight: position === 'left' && showArea ? 'none' : '',
    };
  };
  return (
    <div className={cls} ref={selectRef} style={{ width: width + 'px', height: '36px', position: 'relative' }}>
      <Input
        disabled={disabled}
        placeholder={inputVal.current}
        readOnly
        icon={customIcon ? customIcon : getDefaultIcon()}
        isDefaultIcon
        showIcon
        style={{ width: width + 'px' }}
        showCloseIcon={false}
        inputStyle={getInputStyle()}
        onClick={handleClick}
      ></Input>

      <Transition in={visible ? visible : toggle} timeout={600} classNames='zoom-in-top'>
        {
          <div className={`${prefixCls}-options`}>
            {minDate && (
              <Calendar onAreaSelect={handleSelect} minDate={minDate} mode='mini' defaultObj={curDate}></Calendar>
            )}
            {maxDate && (
              <Calendar onAreaSelect={handleSelect} maxDate={maxDate} mode='mini' defaultObj={curDate}></Calendar>
            )}
            {!showArea && <Calendar onAreaSelect={handleSelect} mode='mini' defaultObj={curDate}></Calendar>}
          </div>
        }
      </Transition>
    </div>
  );
};

export default React.memo(DatePickerItem);
