import React from 'react';
import { Progress } from './progress'
import { action } from '@storybook/addon-actions'

export default {
  title: '数据展示/Progress',
  component: Progress,
};

const defaultProgressTpl = (args: any) => {
  return (
    <>
      <Progress percent={args.percent}></Progress>
    </>
  )
}
export const defaultProgress: any = defaultProgressTpl.bind({});
defaultProgress.args = {
  percent: 59
}



