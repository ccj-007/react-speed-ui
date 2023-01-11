/** @jsxImportSource @emotion/react */
import React, { FC, useContext, useState, ReactNode } from 'react';
import { ConfigContext } from '../Config-Provider/ConfigProvider';
import classNames from 'classnames';
import { css } from '@emotion/react';

export interface CardProps {
  /** 样式命名隔离 */
  prefixCls?: string;
  /** 组件子节点 */
  children?: ReactNode;
  /** 容器内联样式 */
  style?: React.CSSProperties;
  /** 组件类名 */
  className?: string;
  /** 展示底部 */
  showFooter?: boolean;
  /** 展示头部 */
  showHeader?: boolean;
  /** 展示内容 */
  showContent?: boolean;
  /** 头部标题 */
  headerTitle?: string;
  /** 底部内容 */
  footerTitle?: string;
  /** 是否浮动动画 */
  float?: boolean;
  /** 如果有头部右侧内容展示 */
  headerRightContent?: any;
}

/**
 * Card 组件模板
 */
const Card: FC<CardProps> = props => {
  const {
    children,
    className,
    prefixCls: customizePrefixCls,
    style,
    showFooter,
    showHeader,
    showContent,
    headerTitle,
    footerTitle,
    headerRightContent,
    float,
  } = props;
  const [state, setState] = useState(null);

  const { getPrefixCls } = useContext(ConfigContext);
  let prefixCls = getPrefixCls('card', customizePrefixCls);

  const cls = classNames(prefixCls, className);
  return (
    <div
      className={cls}
      style={style}
      css={css`
        &:hover {
          box-shadow: ${float ? '0 0 20px -5px #b4b4b4' : ''};
          transition: all 0.5s linear;
        }
      `}
    >
      {showHeader && (
        <div className={`${prefixCls}-header`}>
          <div>{headerTitle}</div> {headerRightContent && <div>{headerRightContent}</div>}
        </div>
      )}
      {showContent && <div className={`${prefixCls}-content`}>{children}</div>}
      {showFooter && <div className={`${prefixCls}-footer`}>{footerTitle}</div>}
    </div>
  );
};

Card.defaultProps = {
  showFooter: true,
  showHeader: true,
  showContent: true,
  headerTitle: 'default header title',
  footerTitle: 'default footer title',
  float: false,
};

export default Card;
