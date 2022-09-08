import React, { FC, useContext, useState, ReactNode } from "react";
import { ConfigContext } from "../Config-Provider/ConfigProvider";
import classNames from "classnames";

export interface BackTopProps {
  /** 样式命名隔离 */
  prefixCls?: string;
  /** 组件子节点 */
  children?: ReactNode;
  /** 容器内联样式 */
  style?: React.CSSProperties;
  /** 组件类名 */
  className?: string;
  /** 滚动值 */
  scrollTopVal?: number;
  /** 容器 */
  container?: any
}

/**
 * BackTop 组件模板
 */
const BackTop: FC<BackTopProps> = (props) => {
  const { children, className, prefixCls: customizePrefixCls, style, container } = props;
  console.log(container);

  const [state, setState] = useState(null);

  const { getPrefixCls } = useContext(ConfigContext);
  let prefixCls = getPrefixCls("backtop", customizePrefixCls);

  const handleScroll = (e: any) => {
    if (e) {
      console.log("scrollTopVal", e?.target?.scrollTop);
    }
  }
  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const cls = classNames(prefixCls, className, {});
  return (
    <div className={cls} style={style}>
      <div>{children}</div>
    </div>
  );
}

BackTop.defaultProps = {};

export default BackTop;
