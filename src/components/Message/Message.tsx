import React, { FC, useContext, useState, ReactNode } from "react";
import { ConfigContext } from "../Config-Provider/ConfigProvider";
import classNames from "classnames";

export interface MessageProps {
  /** 样式命名隔离 */
  prefixCls?: string;
  /** 组件子节点 */
  children?: ReactNode;
  /** 容器内联样式 */
  style?: React.CSSProperties;
  /** 组件类名 */
  className?: string;
  /** 可关闭 */
  closable?: boolean;
  /** 展示icon */
  iconJSX?: React.ReactNode;
  /** 描述文字 */
  desc?: string;
  /** 类型 */
  type: 'success' | 'info' | 'warning' | 'error';
}

/**
 * Message 消息模板组件
 */
const Message: FC<MessageProps> = (props) => {
  const { children, className, prefixCls: customizePrefixCls, style, closable, iconJSX, desc, type } = props;
  const [visible, setVisible] = useState(true);

  const { getPrefixCls } = useContext(ConfigContext);
  let prefixCls = getPrefixCls("message", customizePrefixCls);

  const cls = classNames(prefixCls, className, {
    [`${prefixCls}-success`]: type === 'success',
    [`${prefixCls}-info`]: type === 'info',
    [`${prefixCls}-warning`]: type === 'warning',
    [`${prefixCls}-error`]: type === 'error',
  });
  const handleClose = () => {
    setVisible(false)
  }
  return (
    <>
      {
        visible && <div className={cls} style={style}>
          {

            desc && <div className={`${prefixCls}-title`}>

              {
                iconJSX && <div className={`${prefixCls}-icon`}>{iconJSX}</div>
              }

              <div className={`${prefixCls}-desc`}>{desc}</div> </div>
          }
          {
            closable && <div className={`${prefixCls}-close`} onClick={handleClose}>x</div>
          }
          <div className={`${prefixCls}-content`}>
            {
              !desc && <div className={`${prefixCls}-icon`}>{iconJSX}</div>
            }
            <div>{children}</div>
          </div>
        </div>
      }</>
  );
};

Message.defaultProps = {};

export default Message;
