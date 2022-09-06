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
}

/**
 * Avatar 组件模板
 */
const Avatar: FC<AvatarProps> = (props) => {
  const { children, className, prefixCls: customizePrefixCls, style } = props;
  const [state, setState] = useState(null);

  const { getPrefixCls } = useContext(ConfigContext);
  let prefixCls = getPrefixCls("avatar", customizePrefixCls);

  const cls = classNames(prefixCls, className, {});
  return (
    <div className={cls} style={style}>
      <div>Avatar</div>
      <div>{children}</div>
    </div>
  );
};

Avatar.defaultProps = {};

export default Avatar;
