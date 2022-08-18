import React, { FC, useContext, useState, ReactNode } from "react";
import { ConfigContext } from "../Config-Provider/ConfigProvider";
import classNames from "classnames";

export interface GroupProps {
  /** 样式命名隔离 */
  prefixCls?: string;
  /** 组件子节点 */
  children?: ReactNode;
  /** 容器内联样式 */
  style?: React.CSSProperties;
  /** 组件类名 */
  className?: string;
  /** 默认选中与radio的value值一致(注意用于互斥场景) */
  defaultSelect?: number;
  /** 默认选中与radio的value值一致(注意用于互斥场景) */
  isExclude?: boolean;
  /** 对齐方式 */
  align?: 'row' | 'column';
  /** 改变时的回调 */
  onChange?: (value: any) => void
}

/**
 * Radio 单选框群组
 */
const Group: FC<GroupProps> = (props) => {
  const { children, className, prefixCls: customizePrefixCls, style, onChange, defaultSelect, isExclude, align } = props;
  const { getPrefixCls } = useContext(ConfigContext);
  let prefixCls = getPrefixCls("radio-group", customizePrefixCls);

  const cls = classNames(prefixCls, className, {
    [`${prefixCls}-column`]: align === 'column'
  });

  const renderChildren = () => {
    return React.Children.map(children, (child, index) => {
      const childElement =
        child as React.FunctionComponentElement<GroupProps>;
      return React.cloneElement(childElement, {
        onChange,
        defaultSelect,
        isExclude
      })
    })
  }
  return (
    <div className={cls} style={style}>
      {renderChildren()}
    </div>
  );
};

Group.defaultProps = {
  align: 'row',
  isExclude: false
};

export default Group;
