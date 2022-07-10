import React from 'react'
import classNames from 'classnames'

export type TextThemeType = 'default' | 'secondary' | 'success' | 'warning' | 'danger'

export interface TextProps extends Omit<HTMLAnchorElement, 'type' | 'className' | 'children' | 'href'> {
  type?: TextThemeType
  disabled?: boolean
  mark?: boolean
  code?: boolean
  keyboard?: boolean
  underline?: boolean
  deleted?: boolean
  strong?: boolean
  italic?: boolean
  href?: string
  className?: string;
  children?: React.ReactNode
}

const Text: React.FC<Partial<TextProps>> = (props) => {
  const {
    type,
    disabled,
    mark,
    code,
    keyboard,
    underline,
    strong,
    deleted,
    italic,
    children,
    className,
    href,
    ...restProps
  } = props

  const classes = classNames('text', className, {
    [`text-${type}`]: type,
    [`text-mark`]: mark,
    [`text-code`]: code,
    [`text-keyboard`]: keyboard,
    [`text-underline`]: underline,
    [`text-strong`]: strong,
    [`text-deleted`]: deleted,
    [`text-italic`]: italic,
    [`text-href`]: href,
    [`disabled`]: disabled,
  })
  return (
    <>
      {
        href ? <a className={classes} href={href}  {...restProps}>{children}</a> :
          <span className={classes}   {...restProps}>{children}</span>
      }
    </>
  )
}

Text.defaultProps = {
  type: 'default'
}

export default Text
