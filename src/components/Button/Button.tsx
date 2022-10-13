import React, { FC, ButtonHTMLAttributes, AnchorHTMLAttributes, useContext } from 'react';
import classNames from 'classnames';
import { ConfigContext } from '../Config-Provider/ConfigProvider';

//先明确需求，定义类型
export type ButtonSize = 'lg' | 'sm';
export type ButtonType = 'primary' | 'success' | 'warning' | 'danger' | 'link';

interface BaseButtonProps {
  /** 样式命名隔离 */
  prefixCls?: string;
  /** 组件类名 */
  className?: string;
  /**设置 Button 的尺寸 */
  size?: ButtonSize;
  /**是否禁用*/
  disabled?: boolean;
  /**设置 Button 的类型 */
  btnType?: ButtonType;
  children?: React.ReactNode;
  href?: string;
  htmlType?: string
}

type NativeButtonProps = BaseButtonProps & ButtonHTMLAttributes<HTMLElement>;
// a 链接属性
type AnchorButtonProps = BaseButtonProps & AnchorHTMLAttributes<HTMLElement>;
export type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps>

/**
 * Button  按钮组件
 */
const Button: FC<ButtonProps> = props => {
  const { className, size, disabled, btnType = 'primary', prefixCls: customizePrefixCls, children, href, htmlType, ...restProps } = props;

  const configInfo = useContext(ConfigContext);
  let prefixCls = configInfo.getPrefixCls("button", customizePrefixCls);

  const classes = classNames(prefixCls, className, {
    [`${prefixCls}-${btnType}`]: btnType,
    [`${prefixCls}-${size}`]: size,
    [`${configInfo.prefixCls}-dark`]: configInfo.isDark, //暗黑主题
    [`${prefixCls}-disabled`]: btnType === 'link' && disabled,
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
      <a data-testid='button' className={classes} href={href} {...restProps}>
        {children}
      </a>
    );
  } else {
    return (
      <button data-testid='button' disabled={disabled} style={themeStyles} className={classes}  {...restProps} >
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
