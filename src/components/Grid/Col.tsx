import React, { FC } from "react";
import { GutterContext } from './Row'

interface ColProps {
  span?: number
  offset?: number
  children?: React.ReactNode
  className?: string
}

const Col: FC<ColProps> = (props) => {
  let { span, offset, children, className } = props

  const gutter = React.useContext(GutterContext)
  const row = 24
  const dividerRow = span && (span / row) * 100
  const dividerOffset = offset && (offset / row) * 100

  return (
    <>
      {dividerOffset && (
        <div className={className} style={{ flex: `${dividerOffset}%` }}></div >
      )}
      <div className={className} style={{ padding: `0 ${gutter}px`, flex: `${dividerRow}%` }}> {children}</div >
    </>

  );
};


export default Col
