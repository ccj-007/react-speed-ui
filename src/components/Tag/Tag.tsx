/** @jsxImportSource @emotion/react */
import React, { FC, useContext, useState, ReactNode } from 'react';
import { ConfigContext } from '../Config-Provider/ConfigProvider';
import classNames from 'classnames';
import Icon from '../Icon';
import { css } from '@emotion/react';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';

export interface TagProps {
  /** 样式命名隔离 */
  prefixCls?: string;
  /** 组件子节点 */
  children?: ReactNode;
  /** 容器内联样式 */
  style?: React.CSSProperties;
  /** 组件类名 */
  className?: string;
  /** 是否可关闭 */
  closable?: boolean;
  /** 关闭的自定义icon */
  closeIcon?: React.ReactNode;
  /** 自定义icon */
  iconJSX?: React.ReactNode;
  /** 自定义颜色 */
  color?: string;
  /** 自定义背景颜色 */
  bgColor?: string;
  /** 自定义边框 */
  borderColor?: string;
  /** 关闭时的回调 */
  onClose?: () => void;
  /** 点击标签时的回调 */
  onChange?: () => void;
  /** 选中的时候的状态 */
  checked?: boolean;
}

/**
 * Tag 组件模板
 */
const Tag: FC<TagProps> = props => {
  const {
    children,
    className,
    prefixCls: customizePrefixCls,
    style,
    closeIcon,
    iconJSX,
    onClose,
    onChange,
    color = '#000',
    bgColor = '#eeeeeea4',
    borderColor = '#aaa',
    closable = false,
    checked = false,
  } = props;
  const [visible, setVisible] = useState(true);
  const [check, setCheck] = useState(checked);

  const { getPrefixCls } = useContext(ConfigContext);
  let prefixCls = getPrefixCls('tag', customizePrefixCls);

  const cls = classNames(prefixCls, className, {});

  const handleClose = () => {
    setVisible(false);
    onClose && onClose();
  };

  const handleClick = () => {
    setCheck(!check);
    onChange && onChange();
  };

  return (
    <>
      {visible && (
        <div
          className={cls}
          style={style}
          onClick={handleClick}
          css={css`
            border: ${'1px solid ' + borderColor};
            color: ${color};
            bgcolor: ${bgColor};
          `}
        >
          {iconJSX && <div className={`${prefixCls}-icon`}>{iconJSX}</div>}
          <div>{children}</div>
          {closable && (
            <div className={`${prefixCls}-close`} onClick={handleClose}>
              {closeIcon ? closeIcon : <Icon icon={solid('circle-xmark')} size='1x' color='#4c4c4c'></Icon>}
            </div>
          )}
        </div>
      )}
    </>
  );
};

Tag.defaultProps = {
  closable: false,
  checked: false,
  borderColor: '#aaa',
  bgColor: '#eeeeeea4',
  color: '#000',
};

export default Tag;
