import React, { FC, useContext, useState, ReactNode, useRef } from 'react';
import { ConfigContext } from '../Config-Provider/ConfigProvider';
import DatePickerItem from './DatePickerItem';
export type LimitDateType = {
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
  /** input宽度 */
  width?: Number;
  /** 是否展示范围 */
  showArea?: boolean;
  /** 左侧input自定义icon */
  leftCustomIcon?: React.ReactNode;
  /** 右侧input自定义icon */
  rightCustomIcon?: React.ReactNode;
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
    width = 200,
    endDate,
    leftCustomIcon,
    rightCustomIcon,
  } = props;
  const { getPrefixCls } = useContext(ConfigContext);
  let prefixCls = getPrefixCls('datePicker', customizePrefixCls);
  //限制右侧选项的最小值
  const [minDate, setMinDate] = useState<LimitDateType | undefined>(startDate);
  //限制左侧选项的最大值
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

  return (
    <div style={{ display: 'flex' }}>
      {showArea ? (
        <>
          <DatePickerItem
            disabled={disabled}
            visible={visible}
            maxDate={maxDate}
            handleMinDate={handleMinDate}
            onChange={onChange}
            defaultValue={defaultValue}
            prefixCls={prefixCls}
            className={className}
            customIcon={leftCustomIcon}
            position='left'
            width={width}
            showArea={showArea}
          ></DatePickerItem>
          <DatePickerItem
            width={width}
            disabled={disabled}
            visible={visible}
            minDate={minDate}
            handleMaxDate={handleMaxDate}
            onChange={onChange}
            defaultValue={defaultValue}
            prefixCls={prefixCls}
            className={className}
            customIcon={rightCustomIcon}
            position='right'
            showArea={showArea}
          ></DatePickerItem>
        </>
      ) : (
        <DatePickerItem
          disabled={disabled}
          visible={visible}
          onChange={onChange}
          defaultValue={defaultValue}
          prefixCls={prefixCls}
          className={className}
          customIcon={leftCustomIcon}
          position='left'
          width={width}
          showArea={false}
        ></DatePickerItem>
      )}
    </div>
  );
};

export default DatePicker;
