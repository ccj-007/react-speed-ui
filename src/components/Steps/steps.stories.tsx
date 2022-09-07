import React from "react";
import Steps, { stepStatusType } from "./Steps";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import PageHeader from "../PageHeader";
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'
import Icon from "../Icon";


export default {
  title: "导航/Steps 步骤",
  component: Steps,
  parameters: {
    docs: {
      description: {
        component: "### 步骤条",
      },
    },
  },
} as ComponentMeta<typeof Steps>;
const defaultStepsTpl: ComponentStory<typeof Steps> = (args) => {
  const statusList_less: stepStatusType[] = [
    {
      status: 'wait',
      title: '完成新手教程',
    },
    {
      status: 'process',
      title: '开始写个小案例',
    },
    {
      status: 'error',
      title: '错误示范',
    },
    {
      status: 'success',
      title: '高级进阶',
    }
  ]

  const statusList_icon: stepStatusType[] = [
    {
      status: 'wait',
      title: '图片',
      icon: <Icon icon={solid('images')} size='2x' color='#dddddd' ></Icon>
    },
    {
      status: 'process',
      title: '声音',
      icon: <Icon icon={solid('volume-xmark')} size='2x' color='#38b3ae' ></Icon>
    },
    {
      status: 'success',
      title: 'WIFI',
      icon: <Icon icon={solid('rss')} size='2x' color='#4981e9' ></Icon>
    }
  ]
  return (
    <>
      <PageHeader title='基本使用' />
      <Steps statusList={args.statusList}></Steps>;
      <PageHeader title='简洁版' />
      <Steps statusList={statusList_less}></Steps>;
      <PageHeader title='自定义图标' />
      <Steps statusList={statusList_icon}></Steps>;
    </>
  )

};
export const defaultSteps = defaultStepsTpl.bind({});
defaultSteps.args = {
  statusList: [
    {
      status: 'success',
      title: '第一步',
      subtitle: '迎娶白富美'
    },
    {
      status: 'process',
      title: '第二步',
      subtitle: '当上CEO'
    },
    {
      status: 'wait',
      title: '第三步',
      subtitle: '走上人生巅峰'
    }
  ],
};
