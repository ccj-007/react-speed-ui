import React, { FC, useContext, useState, ReactNode } from 'react';
import { ConfigContext } from '../Config-Provider/ConfigProvider';
import classNames from 'classnames';
import Button from '../Button';
import Space from '../Space';

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
  visible?: boolean;
  /** 动画持续时间  */
  duration?: number;
  /** confirm回调 */
  onConfirm?: () => void;
  /** cancel回调 */
  onCancel?: () => void;
}

/**
 * Modal 模态框
 */
const Modal: FC<ModalProps> = props => {
  const {
    children,
    className,
    prefixCls: customizePrefixCls,
    style,
    visible,
    onConfirm,
    onCancel,
    duration = 700,
  } = props;
  const [animationVisible, setAnimationVisible] = useState(visible);
  const firstRef = React.useRef(true);

  const { getPrefixCls } = useContext(ConfigContext);
  let prefixCls = getPrefixCls('modal', customizePrefixCls);

  const cls = classNames(prefixCls, className, {});

  const handleConfirm = () => {
    onConfirm && onConfirm();
  };
  React.useEffect(() => {
    if (firstRef.current) {
      firstRef.current = false;
    } else {
      if (!visible) {
        setTimeout(() => {
          setAnimationVisible(false);
        }, duration);
      } else {
        setAnimationVisible(true);
      }
    }
  }, [visible]);
  const handleCancel = () => {
    onCancel && onCancel();
  };
  return (
    <>
      {animationVisible && (
        <div
          className={`${prefixCls}-mask`}
          onClick={handleCancel}
          style={{
            animation: visible ? `fadeShow ${duration / 1000}s ease-in` : `fadeHide ${duration / 1000}s ease-in`,
          }}
        ></div>
      )}
      {animationVisible ? (
        <div
          className={cls}
          style={{
            animation: visible
              ? `slide-in-elliptic-top-fwd ${duration / 1000}s cubic-bezier(.25, .46, .45, .94) both`
              : `slide-out-elliptic-top-bck ${duration / 1000}s ease-in both`,
            ...style,
          }}
        >
          <div>提示内容</div>
          <div>{children}</div>
          <div className={`${prefixCls}-footer`}>
            <Space>
              <Button onClick={handleConfirm}>确定</Button>
              <Button onClick={handleCancel}>取消</Button>
            </Space>
          </div>
        </div>
      ) : (
        ''
      )}
    </>
  );
};

Modal.defaultProps = {
  visible: false,
  duration: 700,
};

export default Modal;
