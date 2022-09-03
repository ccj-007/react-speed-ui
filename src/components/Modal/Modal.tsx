import React, { FC, useContext, useState, ReactNode } from "react";
import { ConfigContext } from "../Config-Provider/ConfigProvider";
import classNames from "classnames";
import Button from '../Button'
import Space from "../Space";

export interface ModalProps {
  /** 样式命名隔离 */
  prefixCls?: string;
  /** 组件子节点 */
  children?: ReactNode;
  /** 容器内联样式 */
  style?: React.CSSProperties;
  /** 组件类名 */
  className?: string;
  /** 显示与隐藏  */
  visible?: boolean,
  /** confirm回调 */
  onConfirm?: () => void,
  /** cancel回调 */
  onCancel?: () => void,
}

/**
 * Modal 模态框
 */
const Modal: FC<ModalProps> = (props) => {
  const { children, className, prefixCls: customizePrefixCls, style, visible, onConfirm, onCancel } = props;
  const [state, setState] = useState(null);

  const { getPrefixCls } = useContext(ConfigContext);
  let prefixCls = getPrefixCls("modal", customizePrefixCls);

  const cls = classNames(prefixCls, className, {});

  const handleConfirm = () => {
    onConfirm && onConfirm()
  }

  const handleCancel = () => {
    onCancel && onCancel()
  }
  return (
    <>
      {
        visible && <div className={`${prefixCls}-mask`} onClick={handleCancel}></div>
      }
      {
        visible ? <div className={cls} style={style}>
          <div>提示内容</div>
          <div>{children}</div>
          <div className={`${prefixCls}-footer`}>
            <Space>
              <Button onClick={handleConfirm}>确定</Button>
              <Button onClick={handleCancel}>取消</Button>
            </Space>
          </div>
        </div> : ''
      }
    </>
  );
};

Modal.defaultProps = {
  visible: false
};

export default Modal;
