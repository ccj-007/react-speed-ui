import React, { InputHTMLAttributes } from 'react'
import classNames from 'classnames'

export interface InputProps {
  disabled: boolean,
  /* 是否是密码输入框 */
  isPasswordInput: boolean,
  /* 是否是数字输入框 */
  isNumberInput: boolean,
  placeholder: string,
  /* 前缀 */
  prefix: string,
  /* 后缀 */
  suffix: string,
  className: string,
  children: React.ReactNode;
  style: React.CSSProperties
}

export type allInputProps = Partial<InputProps> & InputHTMLAttributes<HTMLElement>

export const Input: React.FC<allInputProps> = (props) => {
  let { disabled, isPasswordInput, isNumberInput, placeholder, prefix, suffix, className, ...restProps } = props
  let [inputType, setInputType] = React.useState<string>('text')
  console.log(isPasswordInput);

  React.useEffect(() => {
    if (isPasswordInput) {
      setInputType('password')
    } else if (isNumberInput) {
      setInputType('number')
    } else {
      setInputType('text')
    }
  }, [isPasswordInput])

  const classes = classNames('speed-input', className, {
    'disabled': disabled
  })
  return (
    <>
      {prefix ? <div className='input-prefix'>{prefix}</div> : ''}
      <input disabled={disabled} type={inputType} className={classes} {...restProps} placeholder={placeholder} />
      {suffix ? <div className='input-suffix'>{suffix}</div> : ''}
    </>
  )
}

Input.defaultProps = {
  disabled: false,
  isPasswordInput: false,
  isNumberInput: false,
  placeholder: '',
  prefix: '',
  suffix: '',
}
