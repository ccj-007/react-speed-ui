import React, { FC, useContext, useState, ReactNode } from "react";
import { ConfigContext } from "../Config-Provider/ConfigProvider";
import classNames from "classnames";

type PlacementType = 'TR' | 'Top' | 'TL' | 'LT' | 'Left' | 'LB' | 'RT' | 'Right' | 'RB' | 'BL' | 'Bottom' | 'BR'

export interface TooltipProps {
  /** 样式命名隔离 */
  prefixCls?: string;
  /** 组件子节点 */
  children?: ReactNode;
  /** 容器内联样式 */
  style?: React.CSSProperties;
  /** 组件类名 */
  className?: string;
  /** 方向 */
  placement?: PlacementType;
  /** 文案 */
  title?: string;
  /** 元素限定的宽度范围 */
  width?: string;
}

/**
 * Tooltip 文字提示的气泡框
 */
const Tooltip: FC<TooltipProps> = (props) => {
  const { children, className, prefixCls: customizePrefixCls, style, placement = 'Top', title, width } = props;
  const [visible, setVisible] = useState(false);

  const { getPrefixCls } = useContext(ConfigContext);
  let prefixCls = getPrefixCls("tooltip", customizePrefixCls);

  const cls = classNames(prefixCls, className, {
  });
  const tipCls = classNames(`${prefixCls}-tip`, {
    [`${prefixCls}-top`]: placement === 'Top',
    [`${prefixCls}-tl`]: placement === 'TL',
    [`${prefixCls}-tr`]: placement === 'TR',

    [`${prefixCls}-bottom`]: placement === 'Bottom',
    [`${prefixCls}-bl`]: placement === 'BL',
    [`${prefixCls}-br`]: placement === 'BR',

    [`${prefixCls}-left`]: placement === 'Left',
    [`${prefixCls}-lt`]: placement === 'LT',
    [`${prefixCls}-lb`]: placement === 'LB',

    [`${prefixCls}-right`]: placement === 'Right',
    [`${prefixCls}-rt`]: placement === 'RT',
    [`${prefixCls}-rb`]: placement === 'RB',
  });

  const handleMouseEnter = () => {
    console.log("enter");
    setVisible(true)
  }
  const handleMouseLeave = () => {
    console.log("leavve");
    setVisible(false)
  }

  return (
    <div className={cls} style={{
      width: width ? width : 'auto',
      ...style
    }} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div>{children}</div>
      {
        title && visible && <div className={tipCls}>{title}</div>
      }
    </div>
  );
};

Tooltip.defaultProps = {
  placement: 'Top'
};

export default Tooltip;
