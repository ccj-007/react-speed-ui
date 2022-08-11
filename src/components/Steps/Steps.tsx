import React, { FC, useContext, ReactNode } from "react";
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'
import Icon from "../Icon";
import { ConfigContext } from "../Config-Provider/ConfigProvider";

type statusType = 'wait' | 'process' | 'error' | 'success'

export type stepStatusType = {
  status: statusType
  title: string
  subtitle?: string
  icon?: JSX.Element
}

export interface StepsProps {
  /** 步骤状态 */
  statusList: stepStatusType[]
  /** 默认被固定的DOM */
  children?: ReactNode;
  className?: string
}

/**
 * Steps 步骤条
 */
const Steps: FC<StepsProps> = (props) => {
  const { children, statusList, className } = props;
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
  return (
    <div className={`${prefixCls}-warp`}>
      {
        statusList.map((step, index) => {
          return (
            <>
              <div className={`${prefixCls}-item`}>
                {step.icon ? step.icon : renderStatusIcon(step.status)}
                <div className={`${prefixCls}-title`}>
                  <div className={`${prefixCls}-item-title`}>{step.title}</div>

                  <div className={`${prefixCls}-item-subtitle`}>{step.subtitle}</div>
                </div>
              </div>
              {
                index === statusList.length - 1 ? '' : <div className={`${prefixCls}-lineBox`} >
                  <div className={`${prefixCls}-line`} style={{ background: statusList[index + 1].status === 'wait' ? "#aaa" : '#4981e9' }}></div>
                </div>
              }

            </>
          )
        })
      }
    </div >
  )
};

Steps.defaultProps = {
  statusList: [
    {
      status: 'wait',
      title: '第一步',
      subtitle: '迎娶白富美'
    },
    {
      status: 'process',
      title: '第二步',
      subtitle: '当上CEO'
    },
    {
      status: 'success',
      title: '第三步',
      subtitle: '走上人生巅峰'
    }
  ]
}

export default Steps;
