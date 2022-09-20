import React, { FC, useContext, useState, ReactNode } from "react";
import { ConfigContext } from "../Config-Provider/ConfigProvider";
import classNames from "classnames";
import Panel, { PanelProps } from "./Panel";

export interface CollapseProps {
  /** 样式命名隔离 */
  prefixCls?: string;
  /** 组件子节点 */
  children?: ReactNode;
  /** 容器内联样式 */
  style?: React.CSSProperties;
  /** 组件类名 */
  className?: string;
  /** 激活的key */
  defaultActiveKey?: string[];
  /** 改变回调 */
  onChange?: (key: string) => void;
}

/**
 * Collapse 下拉展示
 */
const Collapse: FC<CollapseProps> & {
  Panel: FC<PanelProps>
} = (props) => {
  const { children, className, prefixCls: customizePrefixCls, style, defaultActiveKey, onChange } = props;
  const [state, setState] = useState(null);

  const { getPrefixCls } = useContext(ConfigContext);
  let prefixCls = getPrefixCls("collapse", customizePrefixCls);

  const cls = classNames(prefixCls, className, {});

  const renderChild = () => {
    let len = -1
    React.Children.forEach(children, (item, index) => {
      len++
    })
    return React.Children.map(children, (child, index) => {
      const childElement =
        child as React.FunctionComponentElement<PanelProps>;
      return React.cloneElement(childElement, {
        keyList: defaultActiveKey,
        onChange: onChange,
        order: index,
        len: len
      })
    })
  }
  return (
    <div className={cls} style={style}>
      {renderChild()}
    </div>
  );
};

Collapse.defaultProps = {};

Collapse.Panel = Panel
export default Collapse;
