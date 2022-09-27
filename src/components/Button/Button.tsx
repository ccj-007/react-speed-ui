import React, { FC, ButtonHTMLAttributes, AnchorHTMLAttributes, useContext } from 'react';
import classNames from 'classnames';
import { ConfigContext } from '../Config-Provider/ConfigProvider';

//先明确需求，定义类型
export type ButtonSize = 'lg' | 'sm';
export type ButtonType = 'primary' | 'success' | 'warning' | 'danger' | 'link';

interface BaseButtonProps {
  className?: string;
  /**设置 Button 的禁用 */
  disabled?: boolean;
  /**设置 Button 的尺寸 */
  size?: ButtonSize;
  /**设置 Button 的类型 */
  btnType?: ButtonType;
  children: React.ReactNode;
  href?: string;
}

type NativeButtonProps = BaseButtonProps & ButtonHTMLAttributes<HTMLElement>;
// a 链接属性
type AnchorButtonProps = BaseButtonProps & AnchorHTMLAttributes<HTMLElement>;
export type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps>;

/**
 * Button  按钮组件
 */
const Button: FC<ButtonProps> = props => {
  const { className, disabled, size, btnType, children, href, ...restProps } = props;

  const configInfo = useContext(ConfigContext);

  const classes = classNames('btn', className, {
    [`btn-${btnType}`]: btnType,
    [`btn-${size}`]: size,
    [`${configInfo.prefixCls}-dark`]: configInfo.isDark, //暗黑主题
    disabled: btnType === 'link' && disabled,
  });

  //自定义组件主题配置
  let themeStyles = {};
  if (configInfo.themeOptions.theme === 'custom' && btnType && btnType !== 'link') {
    themeStyles = {
      backgroundColor: configInfo.themeOptions.button[btnType],
    };
  }

  if (btnType === 'link' && href) {
    return (
      <a className={classes} href={href} {...restProps}>
        {children}
      </a>
    );
  } else {
    return (
      <button style={themeStyles} className={classes} disabled={disabled} {...restProps}>
        {children}
      </button>
    );
  }
};

Button.defaultProps = {
  btnType: 'primary',
};

Button.displayName = 'Button'

export default Button;
