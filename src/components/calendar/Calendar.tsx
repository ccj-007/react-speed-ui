import React, {
  FC,
  useContext,
  useState,
  ReactNode,
  useEffect,
  useRef,
} from "react";
import { ConfigContext } from "../Config-Provider/ConfigProvider";
import classNames from "classnames";
import dayjs from "dayjs";

export interface calendarProps {
  /** 样式命名隔离 */
  prefixCls?: string;
  /** 组件子节点 */
  children?: ReactNode;
  /** 容器内联样式 */
  style?: React.CSSProperties;
  /** 组件类名 */
  className?: string;
}

/**
 * calendar 组件模板
 */
const Calendar: FC<calendarProps> = (props) => {
  const {
    children,
    className,
    prefixCls: customizePrefixCls,
    style,
  } = props;
  const [year, setYear] = useState(dayjs().year());
  const [month, setMonth] = useState(dayjs().month() + 1);
  const [days, setDays] = useState(dayjs().daysInMonth());
  const [day, setDay] = useState(dayjs().date());
  const [week, setWeek] = useState(dayjs(`${year}-${month}-${day}`).day());
  const [prevList, setPrevList] = useState<number[]>([]);
  const [dayList, setDayList] = useState(Array(35).fill(1));
  const [nextList, setNextList] = useState<number[]>([]);
  const [dayId, setDayId] = useState<number>(-1);

  const { getPrefixCls } = useContext(ConfigContext);
  let prefixCls = getPrefixCls("calendar", customizePrefixCls);

  const cls = classNames(prefixCls, className, {});

  const handleDayList = () => {
    const sumDay = 35
    const weekDays = 7
    let prevNum = weekDays - week + 1
    let prevDays = Array.from(Array(dayjs(`${year}-${month - 1}-${day}`).daysInMonth()).keys()).map(item => item + 1)
    let curDays = Array.from(Array(days).keys()).map(item => item + 1)
    let prevList = prevDays.slice(-(prevNum), prevDays.length)
    let nextList = Array.from(Array(35).keys()).map(item => item + 1).slice(0, sumDay - curDays.length - prevList.length)

    console.log(nextList);


    setPrevList(prevList)
    setDayList(curDays)
    setNextList(nextList)
  }

  const handleClickDay = (item) => {

    console.log(item);

  }

  const handleClickLeft = () => {
    setMonth(month - 1)
  }

  const handleClickRight = () => {
    setMonth(month + 1)
  }

  useEffect(() => {
    console.log("11111111111");

    handleDayList()
    setWeek(dayjs(`${year}-${month}-${day}`).day())
  }, [month, year])
  return (
    <div className={cls} style={style}>
      <div className={cls} style={style}>
        <div className={`${prefixCls}-picker`}>
          <div onClick={handleClickLeft}> {'<'} </div>
          <div className={`${prefixCls}-detail`}>{year}年{month}月</div>
          <div onClick={handleClickRight}> {'>'} </div>
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
              return <div key={index} onClick={() => handleClickDay(item)} className={`${prefixCls}-day-item`} style={{ color: '#aaa' }}>
                {item}
              </div>
            })
          }
          {
            dayList.map((item, index) => {
              return <div key={index} onClick={() => handleClickDay(item)} className={`${prefixCls}-day-item`}>
                {item}
              </div>
            })
          }
          {
            nextList.map((item, index) => {
              return <div key={index} onClick={() => handleClickDay(item)} className={`${prefixCls}-day-item`} style={{ color: '#aaa' }}>
                {item}
              </div>
            })
          }
        </div>
        {children}
      </div>
    </div>
  );
};

Calendar.defaultProps = {};

export default Calendar;
