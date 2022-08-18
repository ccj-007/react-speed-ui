import React, { FC, useContext, useState, ReactNode } from "react";
import { ConfigContext } from "../Config-Provider/ConfigProvider";
import { FormContext } from "./Form";
import classNames from "classnames";
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
  type?: string;
  /** value */
  value?: any;
  /** label */
  label?: any;
}

/**
 * Form 组件模板
 */
const FormItem: FC<FormItemProps> = (props) => {
  const { children, className, prefixCls: customizePrefixCls, style, type, label, ...restProps } = props;
  const [state, setState] = useState(null);

  const { getPrefixCls } = useContext(ConfigContext);
  const { onFinish, onFinishFailed } = useContext(FormContext);

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
  return (
    <>
      {label && <label>{label}</label>}
      <input className={cls} type={type} style={{ display: noInput ? 'inline-block' : 'block' }} {...restProps}
        onClick={handleClick}
      >{children}</input>
    </>
  );
};

FormItem.defaultProps = {};

export default FormItem;
