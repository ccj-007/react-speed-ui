import React from 'react'
import classNames from 'classnames'
import { FontAwesomeIcon, FontAwesomeIconProps } from '@fortawesome/react-fontawesome'


export type ThemeProps = 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'danger' | 'light' | 'dark'

export interface IconProps extends FontAwesomeIconProps {
  /* 主题类型 */
  theme?: ThemeProps,
  /* 图标字符串 */
  icon: any,
}

/**
 *  Icon  图标组件
 */
const Icon: React.FC<IconProps> = (props) => {
  const { className, theme, icon, style, ...restProps } = props

  const classes = classNames('viking-icon', className, {
    [`icon-${theme}`]: theme
  })

  return (
    <FontAwesomeIcon className={classes} icon={icon} {...restProps} />
  )
}

export default Icon