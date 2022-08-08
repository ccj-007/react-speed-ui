import React from 'react'
import classNames from 'classnames'
import { MenuContext } from './Menu'

export interface IMenuItemProps {
  index?: string;
  disabled?: boolean,
  className?: string,
  style?: React.CSSProperties,
  children?: React.ReactNode
}

const MenuItem: React.FC<IMenuItemProps> = (props) => {
  const { index, disabled, className, style, children } = props
  let context = React.useContext(MenuContext)
  const handleClick = () => {
    if (context.onSelect && !disabled && (typeof index === 'string')) {
      context.onSelect(index)
    }
  }
  const classes = classNames('menu-item', className, {
    'is-disabled': disabled,
    'is-active': context.index === index
  })

  return (
    <li className={classes} style={style} onClick={handleClick}>
      {children}
    </li>
  )
}

MenuItem.displayName = 'MenuItem'

export default MenuItem