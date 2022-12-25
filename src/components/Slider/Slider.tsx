/** @jsxImportSource @emotion/react */
import React, { FC, useContext, useState, ReactNode, useRef, useEffect, useMemo } from 'react';
import { ConfigContext } from '../Config-Provider/ConfigProvider';
import classNames from 'classnames';
import { css } from '@emotion/react';

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
  btnWidth?: number;
  /** padding */
  padding?: number;
  /** tips */
  showTip?: boolean;
  /** 操作杆样式 */
  ganStyle?: React.CSSProperties;
  /** 选中的背景样式 */
  selStyle?: React.CSSProperties;
  /** 背景样式 */
  bgStyle?: React.CSSProperties;
  /** 禁用 */
  disabled?: boolean;
  /** 改变的回调 */
  onChange?: (val: number) => void;
}

/**
 * Slider 滑动的操作杆
 */
const Slider: FC<SliderProps> = props => {
  const {
    children,
    className,
    prefixCls: customizePrefixCls,
    style,
    min = 0,
    max = 100,
    defaultVal = 20,
    width = 300,
    btnWidth = 20,
    padding = 20,
    onChange,
    showTip = false,
    ganStyle,
    bgStyle,
    selStyle,
    disabled = false,
  } = props;
  const [tips, setTips] = useState(false);
  const [val, setVal] = useState(defaultVal);
  const btnRef = useRef<HTMLDivElement>(null);

  const { getPrefixCls } = useContext(ConfigContext);
  let prefixCls = getPrefixCls('slider', customizePrefixCls);

  const cls = classNames(prefixCls, className, {});

  const ganCls = classNames(`${prefixCls}-gan`, {
    [`${prefixCls}-gan-disabled`]: disabled,
  });
  const selCls = classNames(`${prefixCls}-select`, {
    [`${prefixCls}-select-disabled`]: disabled,
  });
  const bgCls = classNames(`${prefixCls}-content`, {
    [`${prefixCls}-content-disabled`]: disabled,
  });

  useMemo(() => {
    let percentVal = Math.trunc((val * (max - min)) / width);
    onChange && onChange(percentVal);
  }, [val]);

  const handleMousemove = (e: MouseEvent) => {
    if (e.pageX - btnWidth - padding <= 0) {
      setVal(0);
      return;
    }
    if (width && e.pageX >= width) {
      setVal(width);
      return;
    }
    setVal(e.pageX - btnWidth - padding);
  };

  useEffect(() => {
    if (btnRef.current && !disabled) {
      btnRef.current.addEventListener(
        'mousedown',
        e => {
          setTips(true);
          console.log('mousedown', e);
          document.addEventListener('mousemove', handleMousemove);
        },
        false,
      );
      document.addEventListener(
        'mouseup',
        e => {
          setTips(false);
          console.log('mouseup', e);
          document.removeEventListener('mousemove', handleMousemove);
        },
        false,
      );
    }
    return () => {
      document.removeEventListener('mousemove', handleMousemove);
    };
  }, []);
  return (
    <div
      className={cls}
      style={style}
      css={css`
        width: ${width + 'px'};
        padding: ${padding + 'px'};
      `}
    >
      <div className={bgCls} style={bgStyle}>
        <div
          className={selCls}
          css={css`
            width: ${val + 'px'};
          `}
          style={selStyle}
        ></div>
        <div
          className={ganCls}
          css={css`
            left: ${val - btnWidth * 0.5 + 'px'};
          `}
          style={ganStyle}
          ref={btnRef}
        ></div>
        {showTip && tips && (
          <div
            className={`${prefixCls}-tips`}
            css={css`
              left: ${val + 'px'};
            `}
          >
            {val}
          </div>
        )}
      </div>
    </div>
  );
};

Slider.defaultProps = {
  min: 0,
  max: 100,
  defaultVal: 20,
  width: 300,
  btnWidth: 20,
  padding: 20,
  showTip: false,
  disabled: false,
};

export default Slider;
