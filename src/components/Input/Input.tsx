import React, {
  ChangeEvent,
  useContext,
  useEffect,
  InputHTMLAttributes,
  useState,
  RefObject,
  useRef,
  forwardRef,
} from 'react';
import classNames from 'classnames';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';
import { ConfigContext } from '../Config-Provider/ConfigProvider';
import { Icon } from '../index';

type InputSize = 'lg' | 'sm';

export interface InputProps {
  /** 样式命名隔离 */
  prefixCls?: string;
  /** 尺寸 */
  size: InputSize;
  /** 前缀 */
  prefix: string;
  /** 后缀 */
  suffix: string;
  /** input包裹容器的自定义样式 */
  style?: React.CSSProperties;
  /** input自定义样式 */
  inputStyle?: React.CSSProperties;
  /** 初始值input */
  value?: string;
  /** 自定义默认图标 */
  icon: React.ReactNode;
  /** 展示默认图标 */
  showIcon: boolean;
  /** 自定义关闭的图标 */
  closeIcon: React.ReactNode;
  /** 展示关闭图标 */
  showCloseIcon: boolean;
  /** 失去焦点需要清除value */
  blurClear: boolean;
  /** 改变的回调 */
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  /** 失去焦点的回调 */
  onBlur: (e: ChangeEvent<HTMLInputElement>) => void;
  /** input包裹的类名 */
  className: string;
  /** input的内部类名 */
  inputClassName: string;
  /** 自动focus */
  autoFocus: boolean;
  /** 子节点 */
  children: React.ReactNode;
  /** 获取input的ref回调*/
  onRef: (inputRef: any) => void;
  /** 清除的回调 */
  onClear: () => void;
}
export type InputExternalProps = Omit<InputProps, 'size'>;

export type allInputProps = Partial<InputProps> & InputHTMLAttributes<HTMLInputElement>;

/**
 * Input  input组件
 */
const Input: React.FC<allInputProps> = props => {
  let {
    disabled = false,
    prefix,
    suffix,
    className,
    prefixCls: customizePrefixCls,
    blurClear = false,
    showIcon = false,
    showCloseIcon = false,
    icon,
    closeIcon,
    style,
    inputStyle,
    inputClassName,
    autoFocus = false,
    value: defaultVal,
    onChange,
    onClear,
    onBlur,
    onRef,
    ...restProps
  } = props;
  const [value, setValue] = useState(defaultVal);
  const { getPrefixCls } = useContext(ConfigContext);
  let prefixCls = getPrefixCls('input', customizePrefixCls);
  const inputRef = useRef(null) as RefObject<HTMLInputElement>;
  const inputCls = classNames(prefixCls, inputClassName, {
    [`${prefixCls}-disabled`]: disabled,
  });
  const inputWarpCls = classNames(`${prefixCls}-warp`, className, {});

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    onChange && onChange(e);
  };

  const handleBlur = (e: ChangeEvent<HTMLInputElement>) => {
    blurClear && setValue('');
    onBlur && onBlur(e);
  };

  const handleClear = () => {
    onClear && onClear()
    value && setValue('');
    inputRef.current && inputRef.current.focus();
  };

  useEffect(() => {
    autoFocus && inputRef.current && inputRef.current.focus();

    onRef && onRef(inputRef);
  });

  useEffect(() => {
    setValue(defaultVal)
  }, [defaultVal]);

  const renderIcon = () => {
    if (showIcon && !showCloseIcon) {
      return (
        <div className={`${prefixCls}-icon`} >
          {icon ? icon : <Icon icon={solid('angle-down')} size='1x' color='#4c4c4c'></Icon>}
        </div>
      );
    }
    if (!showIcon && showCloseIcon) {
      return (
        <div className={`${prefixCls}-icon`} onClick={handleClear}>
          {closeIcon ? closeIcon : <Icon icon={solid('circle-xmark')} size='1x' color='#4c4c4c'></Icon>}
        </div>
      );
    }
  };
  return (
    <div className={inputWarpCls} style={style}>
      {prefix ? <div className={`${prefixCls}-prefix`}>{prefix}</div> : ''}
      <input
        className={inputCls}
        ref={inputRef}
        {...restProps}
        onChange={handleChange}
        onBlur={handleBlur}
        value={value}
        style={inputStyle}
      ></input>
      {renderIcon()}
      {suffix ? <div className={`${prefixCls}-suffix`}>{suffix}</div> : ''}
    </div>
  );
};

Input.defaultProps = {
  disabled: false,
  prefix: '',
  suffix: '',
  value: '',
  blurClear: false,
  showIcon: false,
  showCloseIcon: false,
  autoFocus: false,
};

export default Input;
