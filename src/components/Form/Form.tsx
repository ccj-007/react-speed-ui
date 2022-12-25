import React, { FC, useContext, ReactNode, createContext } from 'react';
import { ConfigContext } from '../Config-Provider/ConfigProvider';
import classNames from 'classnames';

export interface FormProps {
  /** 样式命名隔离 */
  prefixCls?: string;
  /** 组件子节点 */
  children?: ReactNode;
  /** 容器内联样式 */
  style?: React.CSSProperties;
  /** 组件类名 */
  className?: string;
  /* 提交表单且数据验证成功后回调事件 */
  onFinish?: () => void;
  /* 提交表单且数据验证失败后回调事件 */
  onFinishFailed?: () => void;
}

export let FormContext = createContext<FormProps>({});

/**
 * Form 表单组件
 */
const Form: FC<FormProps> = props => {
  const { children, className, prefixCls: customizePrefixCls, style, onFinish, onFinishFailed, ...restProps } = props;

  const { getPrefixCls } = useContext(ConfigContext);
  let prefixCls = getPrefixCls('form', customizePrefixCls);

  const cls = classNames(prefixCls, className, {});
  return (
    <FormContext.Provider value={{ onFinish, onFinishFailed }}>
      <div className={cls} style={style} {...restProps}>
        {children}
      </div>
    </FormContext.Provider>
  );
};

Form.defaultProps = {};

export default Form;
