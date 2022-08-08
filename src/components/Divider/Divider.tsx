import React from "react";
import classNames from "classnames";

export interface DividerProps {
  /** 对齐类型 */
  type?: "horizontal" | "vertical";
  /** 位置 */
  orientation?: "left" | "right" | "center";
  /** 距离 */
  orientationMargin?: string | number;
  className?: string;
  children?: React.ReactNode;
  /** 虚线 */
  dashed?: boolean;
  style?: React.CSSProperties;
  plain?: boolean;
}

/**
 * Divider  段落分割组件
 */
const Divider: React.FC<DividerProps> = (props) => {
  const {
    type = "horizontal",
    orientation = "center",
    orientationMargin,
    className,
    children,
    dashed = false,
    plain,
    ...restProps
  } = props;

  const hasCustomMarginLeft = orientation === "left";
  const hasCustomMarginRight = orientation === "right";

  const classes = classNames("divider-inner-text", className, {
    [`divider-orientation-left`]: hasCustomMarginLeft,
    [`divider-orientation-right`]: hasCustomMarginRight,
  });
  const warpClasses = classNames("divider", {
    [`divider-dashed`]: dashed && type === "horizontal",
    [`divider-solid`]: !dashed && type === "horizontal",
    [`divider-${type}`]: type,
  });

  const innerStyle = {
    ...(hasCustomMarginLeft &&
      orientationMargin && { marginLeft: orientationMargin }),
    ...(hasCustomMarginRight &&
      orientationMargin && { marginRight: orientationMargin }),
  };

  console.log(innerStyle);

  return (
    <>
      <div className={warpClasses} {...restProps}>
        {children && (
          <span className={classes} style={innerStyle}>
            {children}
          </span>
        )}
      </div>
    </>
  );
};

export default Divider;
