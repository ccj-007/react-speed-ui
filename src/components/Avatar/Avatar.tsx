import React, { FC, useContext, useState, ReactNode } from "react";
import { ConfigContext } from "../Config-Provider/ConfigProvider";
import classNames from "classnames";

export interface AvatarProps {
  /** 样式命名隔离 */
  prefixCls?: string;
  /** 组件子节点 */
  children?: ReactNode;
  /** 容器内联样式 */
  style?: React.CSSProperties;
  /** 组件类名 */
  className?: string;
  /** size (px单位) */
  size?: number;
  /** icon自定义 */
  icon?: React.ReactNode;
  /** 形状 */
  shape?: 'circle' | 'square';
  /** 图像地址*/
  src?: string;
  /** 文本*/
  text?: string;
}

/**
 * Avatar 组件模板
 */
const Avatar: FC<AvatarProps> = (props) => {
  const { children, className, prefixCls: customizePrefixCls, style, size = 30, shape = 'square', src, icon, text } = props;

  const { getPrefixCls } = useContext(ConfigContext);
  let prefixCls = getPrefixCls("avatar", customizePrefixCls);

  const cls = classNames(prefixCls, className, {
  });

  const renderAvatar = () => {
    if (text) {
      return <div style={style} >{text.substring(0, 1).toUpperCase()}</div>
    }
    if (icon) return icon
    if (src) return <img style={style} src={src} alt="" />
  }
  return (
    <div className={cls} style={{ width: size + 'px', height: size + 'px', borderRadius: shape === 'circle' ? '50%' : 'none', ...style }}>
      {renderAvatar()}
      {children}
    </div>
  );
};

Avatar.defaultProps = {
  shape: 'square',
  size: 30
};

export default Avatar;
