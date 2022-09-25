import React, {
  FC,
  useContext,
  useState,
  ReactNode,
  useEffect,
  useMemo,
} from "react";
import { ConfigContext } from "../Config-Provider/ConfigProvider";
import classNames from "classnames";
import dayjs from "dayjs";

interface OutDateProps { format: string, dateObj: Date, timestamp: number }

interface CalendarCustom {
  day: number
  getNode: () => ReactNode
}
export interface CalendarProps {
  /** 样式命名隔离 */
  prefixCls?: string;
  /** 组件子节点 */
  children?: ReactNode;
  /** 容器内联样式 */
  style?: React.CSSProperties;
  /** 组件类名 */
  className?: string;
  /** 默认日期 */
  defaultValue?: number;
  /** 默认禁用 */
  disabledDate?: boolean;
  /** mode */
  mode?: 'mini' | 'default';
  /** 自定义渲染内容 */
  customData?: CalendarCustom[];
  /** 点击日期的回调 */
  onSelect?: (outDateObj: OutDateProps) => void;
  /** 当面板改变的回调 */
  onPanelChange?: (outDateObj: OutDateProps) => void;
}

/**
 * calendar 组件模板
 */
const Calendar: FC<CalendarProps> = (props) => {
  const {
    children,
    className,
    prefixCls: customizePrefixCls,
    style,
    onSelect,
    onPanelChange,
    defaultValue,
    customData: defaultCustom,
    disabledDate = false,
    mode = 'default'
  } = props;
  const [year, setYear] = useState(dayjs().year());
  const [month, setMonth] = useState(dayjs().month());
  const [days, setDays] = useState(dayjs().daysInMonth());
  const [day, setDay] = useState(defaultValue ? defaultValue : dayjs().date());
  const [week, setWeek] = useState(dayjs(`${year}-${month}-1`).day());
  const [prevList, setPrevList] = useState<number[]>([]);
  const [dayList, setDayList] = useState(Array(35).fill(1));
  const [nextList, setNextList] = useState<number[]>([]);
  const [customData, setCustomData] = useState<any>(defaultCustom);

  const { getPrefixCls } = useContext(ConfigContext);
  let prefixCls = getPrefixCls("calendar", customizePrefixCls)
  if (mode === 'mini') {
    prefixCls = `${prefixCls}-mini`
  }
  const cls = classNames(prefixCls, className, {});

  const changeDateTime = () => {
    let prevDays = Array.from(Array(dayjs(`${year}-${month}-1`).daysInMonth()).keys()).map(item => item + 1)
    let curDays = Array.from(Array(days).keys()).map(item => item + 1)
    let prevList: number[] = []
    if (week > 1) {
      prevList = prevDays.slice(-(week - 1))
    } else if (week === 1) {
      //周一
      prevList = []
    } else {
      //0代表 周日
      prevList = prevDays.slice(-6)
    }
    const maxDay = curDays.length + prevList.length > 35 ? 42 : 35

    let nextList = Array.from(Array(maxDay).keys()).map(item => item + 1).slice(0, maxDay - curDays.length - prevList.length)

    setPrevList(prevList)
    setDayList(curDays)
    setNextList(nextList)
  }

  let outDateObj = useMemo(() => {
    let format = dayjs(new Date(year, month, day)).format('YYYY-MM-DD')
    let dateObj = dayjs(new Date(year, month, day)).toDate()
    let timestamp = dayjs(new Date(year, month, day)).valueOf()

    return { format, dateObj, timestamp }
  }, [year, month, days])

  const handleClickDay = (day: number) => {
    console.log(day)
    setDay(day)
  }

  const handleClickDisabledDayLeft = (day: number) => {
    handleClickLeft()
    setDay(day)
  }
  const handleClickDisabledDayRight = (day: number) => {
    handleClickRight()
    setDay(day)
  }

  const handleClickLeft = () => {
    if (month - 1 === 0) {
      setYear(year - 1)
      setMonth(12)
    } else {
      setMonth(month - 1)
    }
    onPanelChange && onPanelChange(outDateObj)
  }

  const handleClickRight = () => {
    if (month + 1 === 13) {
      setYear(year + 1)
      setMonth(1)
    } else {
      setMonth(month + 1)
    }
    onPanelChange && onPanelChange(outDateObj)
  }

  useEffect(() => {
    console.log(JSON.stringify(outDateObj));
    onSelect && onSelect(outDateObj)
  }, [day])

  useEffect(() => {
    setWeek(dayjs(`${year}-${month}-1`).day())
  }, [month, year])

  useEffect(() => {
    changeDateTime()
  }, [week])

  const getItemCls = (item: number) => {
    if (item === day) {
      return `${prefixCls}-day-item ${prefixCls}-day-item-active`
    }
    return `${prefixCls}-day-item`
  }

  const renderCustom = (day: number) => {
    if (customData) {
      let item = customData.find((dayItem: CalendarCustom) => dayItem.day === day)
      if (item && item.getNode) {
        return item.getNode()
      }
    }
  }
  return (
    <div className={cls} style={style}>
      <div className={cls} style={style}>
        <div className={`${prefixCls}-picker`}>
          <div className={`${prefixCls}-arrow`} onClick={() => !disabledDate && handleClickLeft()}> {'<'} </div>
          <div className={`${prefixCls}-detail`}>{year}年{month}月</div>
          <div className={`${prefixCls}-arrow`} onClick={() => !disabledDate && handleClickRight()}> {'>'} </div>
        </div>
        <div className={`${prefixCls}-week`}>
          {
            ['一', '二', '三', '四', '五', '六', '日'].map((item, index) => {
              return <div key={index} className={`${prefixCls}-week-item`}>
                {item}
              </div>
            })
          }
        </div>
        <div className={`${prefixCls}-day`}>
          {
            prevList.map((item, index) => {
              return <div key={index} onClick={() => !disabledDate && handleClickDisabledDayLeft(item)} className={`${prefixCls}-day-disabled`} style={{ color: '#aaa' }}>
                {item}
              </div>
            })
          }
          {
            dayList.map((item, index) => {
              return <div key={index} onClick={() => !disabledDate && handleClickDay(item)} className={getItemCls(item)}
              >
                {item}
                {
                  renderCustom(item)
                }
              </div>
            })
          }
          {
            nextList.map((item, index) => {
              return <div key={index} onClick={() => !disabledDate && handleClickDisabledDayRight(item)} className={`${prefixCls}-day-disabled`} style={{ color: '#aaa' }}>
                {item}
              </div>
            })
          }
        </div>
        {children}
      </div>
    </div >
  );
};

Calendar.defaultProps = {
  disabledDate: false,
  mode: 'default'
};

export default Calendar;
