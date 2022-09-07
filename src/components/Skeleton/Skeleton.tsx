import React, { FC, useContext, useState, ReactNode } from "react";
import { ConfigContext } from "../Config-Provider/ConfigProvider";
import classNames from "classnames";

export interface SkeletonProps {
  /** 样式命名隔离 */
  prefixCls?: string;
  /** 组件子节点 */
  children?: ReactNode;
  /** 容器内联样式 */
  style?: React.CSSProperties;
  /** 组件类名 */
  className?: string;
  /** 是否激活动画 */
  isActive?: boolean;
  /** 骨架屏样式 */
  type?: 'list' | 'side';
  /** key用于区分id, 请确保唯一 */
  kid: string;
}

/**
 * Skeleton 组件模板
 */
const Skeleton: FC<SkeletonProps> = (props) => {
  const { children, className, prefixCls: customizePrefixCls, style, isActive = false, type = 'side', kid } = props;

  const { getPrefixCls } = useContext(ConfigContext);
  let prefixCls = getPrefixCls("skeleton", customizePrefixCls);

  const cls = classNames(prefixCls, className, {});
  return (
    <div className={cls} style={style}>
      <svg aria-labelledby={`ml3udb-aria-${kid}`} viewBox="0 0 380 70">
        <title id={`ml3udb-aria-${kid}`} >Loading...</title>
        <rect
          x="0"
          y="0"
          width="100%"
          height="100%"
          clipPath={`url(#ml3udb-diff-${kid})`}
          fill={isActive ? '' : '#f2f2f2'}
          style={{ fill: isActive ? `url('#ml3udb-animated-diff-${kid}')` : '' }}
        ></rect>
        <defs>
          <clipPath id={`ml3udb-diff-${kid}`}>
            {
              type === 'side' &&
              <>
                <rect x="0" y="0" rx="5" ry="5" width="70" height="70"></rect>
                <rect x="80" y="0" rx="5" ry="5" width="300" height="15"></rect>
                <rect x="80" y="20" rx="5" ry="5" width="200" height="15"></rect>
                <rect x="80" y="40" rx="5" ry="5" width="100" height="15"></rect>
              </>
            }

            {
              type === 'list' &&
              <>
                <rect x="0" y="0" rx="5" ry="5" width="150" height="10"></rect>
                <rect x="0" y="20" rx="5" ry="5" width="380" height="10"></rect>
                <rect x="0" y="40" rx="5" ry="5" width="380" height="10"></rect>
                <rect x="0" y="60" rx="5" ry="5" width="250" height="10"></rect>
              </>
            }
          </clipPath>
          <linearGradient id={`ml3udb-animated-diff-${kid}`}>
            <stop offset="0%" stop-color="#f5f6f7" stop-opacity="1">
              <animate
                attributeName="offset"
                values="-2; -2; 1"
                keyTimes="0; 0.25; 1"
                dur="4s"
                repeatCount="indefinite"
              ></animate>
            </stop>
            <stop offset="50%" stop-color="#ccc" stop-opacity="1">
              <animate
                attributeName="offset"
                values="-1; -1; 2"
                keyTimes="0; 0.25; 1"
                dur="4s"
                repeatCount="indefinite"
              ></animate>
            </stop>
            <stop offset="100%" stop-color="#f5f6f7" stop-opacity="1">
              <animate
                attributeName="offset"
                values="0; 0; 3"
                keyTimes="0; 0.25; 1"
                dur="4s"
                repeatCount="indefinite"
              ></animate>
            </stop>
          </linearGradient>
        </defs>
      </svg>
    </div >
  );
};

Skeleton.defaultProps = {
  isActive: false,
  type: 'side'
};

export default Skeleton;
