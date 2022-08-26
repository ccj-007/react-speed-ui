/** @jsxImportSource @emotion/react */
import React, { FC, useContext, useState, ReactNode, useRef } from "react";
import { ConfigContext } from "../Config-Provider/ConfigProvider";
import classNames from "classnames";
import { css } from '@emotion/react'

export type NotificationPositionType = 'tl' | 'tc' | 'tr' | 'bl' | 'bc' | 'br'

export type NotificationDataType = {
  /** 内容 */
  content?: string;
  /** title */
  title?: string;
  /** icon */
  icon?: string;
}
export interface NotificationProps {
  /** 样式命名隔离 */
  prefixCls?: string;
  /** 组件子节点 */
  children?: ReactNode;
  /** 容器类名 */
  className?: string;
  /** 容器内联样式 */
  style?: React.CSSProperties;
  /** 持续时间 */
  duration?: number;
  /** 提示内容 */
  data: NotificationDataType;
  /** width */
  width: number;
  /** height */
  height: number;
  /** 开启 */
  open?: boolean;
  /** 位置 */
  position: NotificationPositionType;
  /** 展示关闭icon */
  showCloseIcon?: boolean;
}

/**
 * Notification 全局展示通知提醒信息
 */
const Notification: FC<NotificationProps> = (props) => {
  const { children, className, prefixCls: customizePrefixCls, style, open, position, showCloseIcon, data, height } = props;
  const noticeData = useRef<NotificationDataType[]>([]);
  const [notices, setNotices] = useState<NotificationDataType[]>([]);
  const first = useRef<boolean>(true);

  const timer = useRef<any>(null);

  const { getPrefixCls } = useContext(ConfigContext);
  let prefixCls = getPrefixCls("notification", customizePrefixCls);

  const handleNotice = () => {
    return setTimeout(() => {
      if (noticeData.current) {
        noticeData.current = noticeData.current.slice(0, -1)
        setNotices(noticeData.current)
        if (noticeData.current.length) timer.current = handleNotice()
      }
    }, 5000);
  }

  React.useEffect(() => {
    if (!first.current) {
      noticeData.current.push(data)
      setNotices(noticeData.current)

      if (!timer.current) {
        timer.current = handleNotice()
      }
    } else {
      first.current = false
    }
  }, [open])

  React.useEffect(() => {
    console.log(notices);
  }, [notices])
  const cls = classNames(prefixCls, className, {
    [`${prefixCls}-tc`]: position === 'tc',
    [`${prefixCls}-tl`]: position === 'tl',
    [`${prefixCls}-tr`]: position === 'tr',
    [`${prefixCls}-bc`]: position === 'bc',
    [`${prefixCls}-bl`]: position === 'bl',
    [`${prefixCls}-br`]: position === 'br',
  });
  return (
    <>
      {
        notices.map((notice, index) => {
          return (
            <div className={cls} style={style} key={index} css={css`
            top: ${index * (height + 20)}px; 
          `}>
              {notice.title}
            </div>
          )
        })
      }
    </>
  );
};


export default Notification;
