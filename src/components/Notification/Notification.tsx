/** @jsxImportSource @emotion/react */
import React, { FC, useContext, useState, ReactNode, useRef } from "react";
import { ConfigContext } from "../Config-Provider/ConfigProvider";
import classNames from "classnames";
import { css } from '@emotion/react'
export type NotificationPositionType = 'tl' | 'tc' | 'tr' | 'bl' | 'bc' | 'br'
import Icon from '../Icon'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'
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
  open?: any;
  /** 位置 */
  position: NotificationPositionType;
  /** icon jsx */
  iconJSX?: React.ReactNode;
}

/**
 * Notification 全局展示通知提醒信息
 */
const Notification: FC<NotificationProps> = (props) => {
  const { children, className, prefixCls: customizePrefixCls, style, open, position, data, height, duration, width, iconJSX } = props;
  const noticeData = useRef<NotificationDataType[]>([]);
  const [notices, setNotices] = useState<NotificationDataType[]>([]);
  const first = useRef<boolean>(true);

  const timer = useRef<any>(null);

  const { getPrefixCls } = useContext(ConfigContext);
  let prefixCls = getPrefixCls("notification", customizePrefixCls);

  const handleNotice = () => {
    return setTimeout(() => {
      setNotices([])
      clearTimeout(timer.current)
      timer.current = null
    }, duration);
  }

  React.useEffect(() => {
    if (!first.current) {
      setNotices([data])
      if (!timer.current) {
        timer.current = handleNotice()
      }
    } else {
      first.current = false
    }
    return () => {
      clearTimeout(timer.current)
      timer.current = null
    }
  }, [open])

  React.useEffect(() => {
    console.log("当前", notices);
  }, [notices])
  const cls = classNames(prefixCls, className, {
    [`${prefixCls}-tc`]: position === 'tc',
    [`${prefixCls}-tl`]: position === 'tl',
    [`${prefixCls}-tr`]: position === 'tr',
    [`${prefixCls}-bc`]: position === 'bc',
    [`${prefixCls}-bl`]: position === 'bl',
    [`${prefixCls}-br`]: position === 'br',
    [`slide-in-elliptic-top-fwd`]: position === 'tc',
    [`slide-in-elliptic-bottom-fwd`]: position === 'bc',
    [`slide-in-elliptic-left-fwd`]: position === 'tl' || position === 'bl',
    [`slide-in-elliptic-right-fwd`]: position === 'br' || position === 'tr',
  });

  const getStyles = () => {
    let innerWidth = window.innerWidth
    let left = innerWidth / 2 - width / 2

    if (position === 'bc' || position === 'tc') {
      return { 'left': left + 'px' }
    }
    if (style) {
      return style
    }
  }

  return (
    < >
      {
        notices.map((notice, index) => {
          return (
            <div className={cls} style={getStyles()} key={index} css={css`
            width: ${width + 'px'} !important;
            height: ${height + 'px'} !important;
          `} >
              <div className={`${prefixCls}-card`}>
                {
                  iconJSX ? iconJSX : <Icon icon={solid('check')} size='2x' color='#18ce55'></Icon>
                }
                <div className={`${prefixCls}-warp`}>
                  <h4>{notice.title}</h4>
                  <p className={`${prefixCls}-content`}>{notice.content}</p>
                </div>
              </div>
            </div>
          )
        })
      }
    </>
  );
};

Notification.defaultProps = {
  duration: 5000,
}
export default Notification;
