import React, { FC } from 'react';
import classNames from 'classnames';
import { FontAwesomeIcon, FontAwesomeIconProps } from '@fortawesome/react-fontawesome';

export type ThemeProps = 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'danger' | 'light' | 'dark';

export interface IconProps extends FontAwesomeIconProps {
  /* 主题类型 */
  theme?: ThemeProps;
  /* 图标字符串 */
  icon: any;
  /** 组件类名 */
  className?: string;
  /** 容器内联样式 */
  style?: React.CSSProperties;
  /** hover的颜色 */
  hoverColor?: string;
}

/**
 *  Icon  图标组件
 */
const Icon: React.FC<IconProps> = props => {
  const { className, theme, icon, hoverColor, style, ...restProps } = props;

  const classes = classNames('speed-icon', className, {
    [`icon-${theme}`]: theme,
  });
  const [hover, setHover] = React.useState(false);

  const toggleEnter = () => {
    hoverColor && setHover(true);
  };

  const toggleLeave = () => {
    hoverColor && setHover(false);
  };
  return (
    <FontAwesomeIcon
      style={{ color: hover ? hoverColor : '' }}
      className={classes}
      icon={icon}
      {...restProps}
      onMouseEnter={toggleEnter}
      onMouseLeave={toggleLeave}
    />
  );
};

export default Icon;
