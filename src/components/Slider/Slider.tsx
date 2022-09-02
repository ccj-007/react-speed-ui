/** @jsxImportSource @emotion/react */
import React, { FC, useContext, useState, ReactNode, useRef, useEffect } from "react";
import { ConfigContext } from "../Config-Provider/ConfigProvider";
import classNames from "classnames";
import { css } from "@emotion/react";

export interface SliderProps {
  /** 样式命名隔离 */
  prefixCls?: string;
  /** 组件子节点 */
  children?: ReactNode;
  /** 容器内联样式 */
  style?: React.CSSProperties;
  /** 组件类名 */
  className?: string;
  /** 最大值 */
  max?: number;
  /** 最小值 */
  min?: number;
  /** 默认值 */
  defaultVal: number;
  /**slider宽度 */
  width?: number;
  /** 按钮宽度 */
  btnWidth: number;
}

/**
 * Slider 组件模板
 */
const Slider: FC<SliderProps> = (props) => {
  const { children, className, prefixCls: customizePrefixCls, style,
    min, max, defaultVal, width, btnWidth } = props
  const [flag, setFlag] = useState(false);
  const [val, setVal] = useState(defaultVal);
  const btnRef = useRef<HTMLDivElement>(null)

  const { getPrefixCls } = useContext(ConfigContext);
  let prefixCls = getPrefixCls("slider", customizePrefixCls);

  const cls = classNames(prefixCls, className, {});

  const handleMousemove = (e: MouseEvent) => {
    console.log('mousemove', e.pageX);
    if (e.pageX <= 0) {
      setVal(0)
      return
    }
    if (width && e.pageX >= width) {
      setVal(width)
      return
    }
    setVal(e.pageX)
  }
  useEffect(() => {
    if (btnRef.current) {
      btnRef.current.addEventListener('mousedown', (e) => {
        console.log("mousedown", e);
        setFlag(true)
        document.addEventListener('mousemove', handleMousemove)
      })
      document.addEventListener('mouseup', (e) => {
        console.log("mouseup", e);
        setFlag(false)
        document.removeEventListener('mousemove', handleMousemove)
      })
    }
  }, [])
  return (
    <div className={cls} style={style} css={css`
      width: ${width + 'px'};
       `} >
      <div className={`${prefixCls}-content`}>
        <div className={`${prefixCls}-select`} css={css`
        width: ${val + 'px'};
       `}></div>
        <div className={`${prefixCls}-gan`} css={css`
        left: ${val - btnWidth / 2 + 'px'}; 
    `} ref={btnRef}></div>
      </div>
    </div>
  );
};

Slider.defaultProps = {
  min: 0,
  max: 100,
  defaultVal: 20,
  width: 300,
  btnWidth: 20
};

export default Slider;
