import React, { FC, useContext, useState, ReactNode } from "react";
import { ConfigContext } from "../Config-Provider/ConfigProvider";
import { FormContext } from "./Form";
import classNames from "classnames";

type FormItemRule = {
  required?: boolean
  message?: string
}

export interface FormItemProps {
  /** 样式命名隔离 */
  prefixCls?: string;
  /** 组件子节点 */
  children?: ReactNode;
  /** 容器内联样式 */
  style?: React.CSSProperties;
  /** 组件类名 */
  className?: string;
  /** Input类型 */
  type?: 'input' | 'button' | 'submit';
  /** value */
  value?: any;
  /** label */
  label?: any;
  rules: FormItemRule[]
}

/**
 * Form 组件模板
 */
const FormItem: FC<FormItemProps> = (props) => {
  const { children, className, prefixCls: customizePrefixCls, style, type, label, value, rules = [], ...restProps } = props;
  const [errorInfo, setErrorInfo] = useState('');

  const { getPrefixCls } = useContext(ConfigContext);
  const { onFinish, onFinishFailed } = useContext(FormContext);
  let required = rules.some(rule => rule.required)

  let prefixCls = getPrefixCls("formItem", customizePrefixCls);

  const cls = classNames(prefixCls, className, {
    [`${prefixCls}-input`]: type === 'input',
    [`${prefixCls}-button`]: type === 'submit' || type === 'button'
  });

  const noInput = React.useMemo(() => {
    return type === 'button' || type === 'submit'
  }, [type])

  const handleClick = (e: any) => {
    console.log(e);
  }

  const showError = (val: string) => {
    if (rules) {
      rules.forEach(rule => {
        if (rule.required && rule.message) {
          if (val) {
            setErrorInfo('')
          } else {
            setErrorInfo(rule.message)
          }
        }
      })
    }
  }
  const handleChange = (e) => {
    let val = e.target.value
    showError(val)
  }
  const handleClear = () => {
    showError('')
  }

  const rulesRender = () => {
    return React.Children.map(children, (child, index) => {
      const childElement =
        child as React.FunctionComponentElement<any>;
      console.log(childElement.type.displayName);
      return React.cloneElement(childElement, {
        onChange: handleChange,
        onClear: handleClear
      })
    })
  }
  return (
    <div >
      <div style={{ display: 'flex' }}>
        {
          required && <div className={`${prefixCls}-error-required`}>*</div>
        }
        {label && <label>{label}</label>}
      </div>
      {rulesRender()}
      {
        <div className={`${prefixCls}-error-info`}>
          {errorInfo}
        </div>
      }
    </div>
  );
};

FormItem.defaultProps = {
  rules: []
};

export default FormItem;
