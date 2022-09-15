import React, { FC, useContext } from "react";
import { ConfigContext } from "../Config-Provider/ConfigProvider";

export interface PageHeaderProps extends Partial<HTMLDivElement> {
  /** 主标题 */
  title: string;
  /** 副标题 */
  subtitle?: string;
}

/**
 * Steps 步骤条
 */
const PageHeader: FC<PageHeaderProps> = (props) => {
  const { title, subtitle, ...restProps } = props;
  const { getPrefixCls } = useContext(ConfigContext);
  let prefixCls = getPrefixCls("pageHeader");

  return (
    // @ts-ignore
    <div className={`${prefixCls}-warp`} {...restProps}>
      <span className={`${prefixCls}`}>{title}</span>
      <span className={`${prefixCls}-subtitle`}>{subtitle}</span>
    </div>
  );
};

export default PageHeader;
