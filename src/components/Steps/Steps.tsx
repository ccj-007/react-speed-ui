import React, { FC, useContext, ReactNode } from "react";
import classNames from "classnames";
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'
import Icon from "../Icon";
import { ConfigContext } from "../Config-Provider/ConfigProvider";

export interface StepsProps {
  /** 当前步骤 */
  current?: number;
  /** 默认步骤开始 */
  initial?: 0;
  /** 默认被固定的DOM */
  children: ReactNode;
  className: string
}

type statusType = 'wait' | 'process' | 'error' | 'success'

/**
 * Steps 步骤条
 */
const Steps: FC<StepsProps> = (props) => {
  const { children, current = 0, initial = 0, className } = props;
  const { getPrefixCls } = useContext(ConfigContext);
  let prefixCls = getPrefixCls("steps");

  const renderStatusIcon = (status: statusType) => {
    switch (status) {
      case 'wait':
        return <Icon icon={solid('check')} size='2x' color='#c7c7c7' className={`${prefixCls}-item-icon`}></Icon>;
      case "process":
        return <Icon icon={solid('spinner')} size='2x' color='#4981e9' className={`${prefixCls}-item-icon fa-spin`}></Icon>;
      case "error":
        return <Icon icon={solid('xmark')} size='2x' color='#c74a2b' className={`${prefixCls}-item-icon`}></Icon>
      case "success":
        return <Icon icon={solid('check')} size='2x' color='#4981e9' className={`${prefixCls}-item-icon`}></Icon>
      default:
        return <Icon icon={solid('check')} size='2x' color='#4981e9' className={`${prefixCls}-item-icon`}></Icon>
    }
  }

  return <div className={`${prefixCls}-warp`}>
    <div className={`${prefixCls}-item`}>
      {renderStatusIcon('wait')}
      <div className={`${prefixCls}-title`}>
        <div className={`${prefixCls}-item-title`}>第一步</div>

        <div className={`${prefixCls}-item-subtitle`}>赚钱第一步，先送个外卖</div>
      </div>
    </div>
    <div className={`${prefixCls}-lineBox`}>
      <div className={`${prefixCls}-line`}></div>
    </div>
    <div className={`${prefixCls}-item`}>
      {renderStatusIcon('process')}
      <div className={`${prefixCls}-title`}>
        <div className={`${prefixCls}-item-title`}>第一步</div>

        <div className={`${prefixCls}-item-subtitle`}>赚钱第一步，先送个外卖</div>
      </div>
    </div>
    <div className={`${prefixCls}-lineBox`}>
      <div className={`${prefixCls}-line`}></div>
    </div>

    <div className={`${prefixCls}-item`}>
      {renderStatusIcon('success')}
      <div className={`${prefixCls}-title`}>
        <div className={`${prefixCls}-item-title`}>第一步</div>

        <div className={`${prefixCls}-item-subtitle`}>赚钱第一步，先送个外卖</div>
      </div>
    </div>
  </div>;
};


export default Steps;
