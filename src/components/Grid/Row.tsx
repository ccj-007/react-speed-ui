import React, { FC } from "react";
import classNames from 'classnames'

interface RowProps {
  /** 份数 */
  span?: number
  /** 间距 */
  gutter?: number
  /** 偏移 */
  offset?: number
  children?: React.ReactNode
  className?: string
}
export const GutterContext = React.createContext(0)

/**
 * Row  格栅行组件
 */
const Row: FC<RowProps> = (props) => {
  let { span, gutter, offset, children, className } = props


  const classes = classNames('speed-row', className)
  return (
    <GutterContext.Provider value={gutter || 0}>
      <div className={classes} >{children}</div>
    </GutterContext.Provider>
  );
};

export default Row
