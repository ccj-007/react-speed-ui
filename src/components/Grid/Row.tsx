import React, { FC } from "react";
import classNames from 'classnames'

interface RowProps {
  span?: number
  gutter?: number
  offset?: number
  children?: React.ReactNode
  className?: string
}
export const GutterContext = React.createContext(0)

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
