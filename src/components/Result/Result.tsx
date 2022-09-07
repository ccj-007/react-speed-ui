import React, { FC, useContext, useState, ReactNode } from "react";
import { ConfigContext } from "../Config-Provider/ConfigProvider";
import classNames from "classnames";
import { Space } from "../index";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import Icon from "../Icon";
export type StatusType = 'success' | 'error' | 'info' | 'warning'

export interface ResultProps {
  /** 样式命名隔离 */
  prefixCls?: string;
  /** 组件子节点 */
  children?: ReactNode;
  /** 容器内联样式 */
  style?: React.CSSProperties;
  /** 组件类名 */
  className?: string;
  /** 操作区 */
  extra?: React.ReactNode;
  /** 自定义icon */
  icon?: React.ReactNode;
  /** 状态 */
  status?: StatusType;
  /** 主标题 */
  title?: React.ReactNode;
  /** 副标题 */
  subTitle?: React.ReactNode;
}

/**
 * Result 组件模板
 */
const Result: FC<ResultProps> = (props) => {
  const { children, className, prefixCls: customizePrefixCls, style, title, subTitle, icon, extra, status = 'success' } = props;

  const { getPrefixCls } = useContext(ConfigContext);
  let prefixCls = getPrefixCls("result", customizePrefixCls);

  const cls = classNames(prefixCls, className, {});

  const renderExtra = () => {
    if (Array.isArray(extra)) {
      return extra.map(item => item)
    }
    return extra
  }

  const renderIcon = () => {
    let statusObj = {
      success: <Icon icon={solid("check")} size="5x" color="#52c41a"></Icon>,
      error: <Icon icon={solid("xmark")} size="5x" color="#ff4d4f"></Icon>,
      info: <Icon icon={solid("circle-exclamation")} size="5x" color="#1890ff"></Icon>,
      warning: <Icon icon={solid("triangle-exclamation")} size="5x" color="#ffc53d"></Icon>,
    }
    return statusObj[status]
  }
  return (
    <div className={cls} style={style}>
      <div className={`${prefixCls}-icon`}>{renderIcon()}</div>
      <strong className={`${prefixCls}-title`}>{title}</strong>
      <div className={`${prefixCls}-subTitle`}>{subTitle}</div>
      {/* extra */}
      <div className={`${prefixCls}-extra`}>
        <Space>
          {
            extra && renderExtra()
          }
        </Space>
      </div>
    </div>
  );
};

Result.defaultProps = {
  status: 'success'
};

export default Result;
