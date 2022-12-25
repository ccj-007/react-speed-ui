/** @jsxImportSource @emotion/react */
import React, { FC, useContext, useState, ReactNode, RefObject, useEffect } from 'react';
import { ConfigContext } from '../Config-Provider/ConfigProvider';
import classNames from 'classnames';
import { css } from '@emotion/react';
import { Transition, Button } from '../index';

type PlacementType = 'left' | 'right' | 'top' | 'bottom';

export interface DrawerProps {
  /** 样式命名隔离 */
  prefixCls?: string;
  /** 弹窗内容 */
  children?: ReactNode;
  /** 容器内联样式 */
  style?: React.CSSProperties;
  /** 组件类名 */
  className?: string;
  /** title */
  title?: string;
  /** 显示抽屉 */
  visible?: boolean;
  /** 显示关闭按钮 */
  showClose?: boolean;
  /** 自定义关闭按钮 */
  customCloseIcon?: React.ReactNode;
  /** 显示底部footer */
  showFooter?: boolean;
  /** 方位 */
  placement?: PlacementType;
  /** 尺度大小 */
  size?: number;
  /** 是否显示遮罩 */
  mask?: boolean;
  /** 点击蒙层是否可以关闭 */
  maskClosable?: boolean;
  /** 是否支持esc按键退出 */
  esc?: boolean;
  /** 抽屉中确认的回调 */
  onConfirm?: () => void;
  /** 抽屉中取消的回调 */
  onCancel?: () => void;
  /** 关闭抽屉的回调 */
  onClose?: () => void;
}

/**
 * Drawer 屏幕边缘滑出的浮层面板
 */
const Drawer: FC<DrawerProps> = props => {
  const {
    children,
    className,
    prefixCls: customizePrefixCls,
    style,
    visible,
    showClose,
    customCloseIcon,
    showFooter,
    title,
    placement,
    size,
    mask,
    maskClosable,
    esc,
    onConfirm,
    onCancel,
    onClose,
  } = props;

  const maskRef = React.useRef() as RefObject<any> | undefined;
  const firstRef = React.useRef(true);
  const [maskShow, setMaskShow] = useState(true);
  const { getPrefixCls } = useContext(ConfigContext);
  let prefixCls = getPrefixCls('drawer', customizePrefixCls);
  const cls = classNames(prefixCls, className, {
    [`${prefixCls}-left`]: placement === 'left',
    [`${prefixCls}-right`]: placement === 'right',
    [`${prefixCls}-top`]: placement === 'top',
    [`${prefixCls}-bottom`]: placement === 'bottom',
  });

  useEffect(() => {
    if (firstRef.current) {
      firstRef.current = false;
    } else {
      if (!visible) {
        setTimeout(() => {
          setMaskShow(false);
        }, 300);
      } else {
        setMaskShow(true);
      }
    }
  }, [visible]);

  const handleClose = () => {
    if (onClose && visible) {
      onClose && onClose();
    }
  };

  const handleClickMask = () => {
    maskClosable && handleClose();
  };

  const handleConfirm = () => {
    handleClose();
    onConfirm && onConfirm();
  };

  const handleCancel = () => {
    handleClose();
    onCancel && onCancel();
  };

  const handleKeyboard = (e: KeyboardEvent) => {
    if (e.keyCode === 27) {
      onClose && onClose();
    }
  };
  React.useEffect(() => {
    esc && document.addEventListener('keydown', handleKeyboard);
    return () => {
      esc && document.removeEventListener('keydown', handleKeyboard);
    };
  }, []);

  let cssMoveStyle = React.useMemo(() => {
    const showSize = size + 'px';
    const hideSize = '-' + showSize;
    const lrRule = { width: size + 'px', minHeight: '100vh' };
    const tbRule = { minWidth: '100vw', height: showSize };
    if (placement === 'left' || placement === 'right') {
      return { [placement]: visible ? 0 : hideSize, ...lrRule, ...style };
    }
    if (placement === 'top' || placement === 'bottom') {
      return { [placement]: visible ? 0 : hideSize, ...tbRule, ...style };
    }
  }, [visible]);

  return (
    <>
      {mask && (
        <Transition
          in={visible && maskShow}
          classNames={'show'}
          addEndListener={(node, done) => {}}
          nodeRef={maskRef}
          onExited={() => {
            console.log('111111');
          }}
          unmountOnExit
        >
          <>{maskShow && <div ref={maskRef} className={`${prefixCls}-mask`} onClick={handleClickMask}></div>}</>
        </Transition>
      )}
      {
        <div
          className={cls}
          style={cssMoveStyle}
          css={css`
            transition: ${placement} 0.3s ease-in;
          `}
        >
          {
            <>
              <div className={`${prefixCls}-header`}>
                {title}
                {showClose && (
                  <div className={`${prefixCls}-close`} onClick={handleClose}>
                    {customCloseIcon ? customCloseIcon : 'X'}
                  </div>
                )}
              </div>
              <div className={`${prefixCls}-content`}>{children}</div>
              {showFooter && (
                <div className={`${prefixCls}-footer`}>
                  <Button onClick={handleConfirm}>确认</Button>
                  <Button onClick={handleCancel}>取消</Button>
                </div>
              )}
            </>
          }
        </div>
      }
    </>
  );
};

Drawer.defaultProps = {
  placement: 'left',
  size: 200,
  showClose: true,
  mask: true,
  maskClosable: true,
  showFooter: true,
};

export default Drawer;
