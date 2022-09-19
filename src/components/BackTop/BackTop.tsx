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
  /** 滚动高度达到此参数值才出现 BackTop */
  visibilityHeight?: number;
  /** 容器, 默认document */
  container?: React.RefObject<any>
  /** onClick */
  onClick?: () => void
}

/**
 * BackTop 组件模板
 */
const BackTop: FC<BackTopProps> = (props) => {
  const { children, className, prefixCls: customizePrefixCls, style, container, visibilityHeight = 400, onClick } = props;

  const [backTop, setBackTop] = useState<number | null>(null);
  const [transition, setTransition] = useState<boolean>(false);
  const backRef = React.useRef<HTMLDivElement>(null)

  const { getPrefixCls } = useContext(ConfigContext);
  let prefixCls = getPrefixCls("backtop", customizePrefixCls);

  const handleScroll = (e: any) => {
    if (container) {
      setBackTop(e.target.scrollTop)
    } else {
      //@ts-ignore
      window.scrollY && setBackTop(window.scrollY)
    }
  }

  let showBackTop = React.useMemo(() => {
    if (backTop && backTop >= visibilityHeight) {
      return true
    } else {
      setTransition(false)
      return false
    }
  }, [backTop])

  React.useEffect(() => {
    if (showBackTop) {
      setTimeout(() => {
        setTransition(true)
      }, 100);
    }
  }, [showBackTop])

  React.useEffect(() => {
    if (container) {
      container.current.addEventListener('scroll', handleScroll)
    } else {
      document.addEventListener('scroll', handleScroll)
    }

    return () => {
      if (container && container.current) {
        container.current.removeEventListener('scroll', handleScroll)
      } else {
        document.addEventListener('scroll', handleScroll)
      }
    }
  }, [])

  const cls = classNames(prefixCls, className);

  const handleClick = () => {
    if (container) {
      setBackTop(0)
      container.current.scrollTop = 0
    } else {
      setBackTop(0)
      document.documentElement.scrollIntoView({
        behavior: "smooth"
      });
      // window.scrollTo(0, 0)
    }
    setTransition(false)
    onClick && onClick()
  }
  return (
    <>
      {
        showBackTop && <div className={cls} style={{ "opacity": transition ? 1 : 0, ...style }} ref={backRef} onClick={handleClick}>
          <div>{children}</div>
        </div>
      }
    </>
  );
}

BackTop.defaultProps = {
  visibilityHeight: 400
};

export default BackTop;
