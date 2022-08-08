import React, { ChangeEvent, InputHTMLAttributes } from "react";
import classNames from "classnames";

type InputSize = "lg" | "sm";

export interface InputProps {
  /** 尺寸 */
  size: InputSize;
  /** 禁用 */
  disabled: boolean;
  /** 是否是密码输入框 */
  isPasswordInput: boolean;
  /** 是否是数字输入框 */
  isNumberInput: boolean;
  placeholder: string;
  /** 前缀 */
  prefix: string;
  /** 后缀 */
  suffix: string;
  /** 输入change事件,直接获取val */
  onChangeVal: Function;
  /** 初始值input */
  value: any;
  className: string;
  children: React.ReactNode;
  style: React.CSSProperties;
}
export type InputExternalProps = Omit<InputProps, "size">;

export type allInputProps = Partial<InputProps> &
  InputHTMLAttributes<HTMLInputElement>;

/**
 * Input  input组件
 */
const Input: React.FC<allInputProps> = (props) => {
  let {
    disabled,
    isPasswordInput,
    isNumberInput,
    placeholder,
    prefix,
    suffix,
    className,
    onChangeVal,
    value,
    ...restProps
  } = props;
  let [inputType, setInputType] = React.useState<string>("text");
  let [inputVal, setInputVal] = React.useState<any>(value);

  React.useEffect(() => {
    //控制value
    value ? setInputVal(value) : setInputVal("");

    //控制type
    if (isPasswordInput) {
      setInputType("password");
    } else if (isNumberInput) {
      setInputType("number");
    } else {
      setInputType("text");
    }
  }, [isPasswordInput, value]);

  const classes = classNames("speed-input", className, {
    disabled: disabled,
  });

  return (
    <>
      {prefix ? <div className="input-prefix">{prefix}</div> : ""}
      <input
        disabled={disabled}
        type={inputType}
        className={classes}
        {...restProps}
        placeholder={placeholder}
        value={inputVal}
      />
      {suffix ? <div className="input-suffix">{suffix}</div> : ""}
    </>
  );
};

Input.defaultProps = {
  disabled: false,
  isPasswordInput: false,
  isNumberInput: false,
  placeholder: "",
  prefix: "",
  suffix: "",
  value: "",
};

export default Input;
