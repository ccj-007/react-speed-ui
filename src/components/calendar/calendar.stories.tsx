import React from 'react';
import Calendar from './Calendar';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { PageHeader } from '../index';

export default {
  title: '数据展示/Calendar 日历',
  component: Calendar,
  parameters: {
    docs: {
      description: {
        component: '### 日历',
      },
    },
  },
} as ComponentMeta<typeof Calendar>;

/**
 * 展示面板
 */
const defaultCalendarTpl: ComponentStory<typeof Calendar> = args => {
  let date = new Date();
  const customData = [
    {
      day: 1,
      month: date.getMonth() + 1,
      year: date.getFullYear(),
      getNode: () => {
        return (
          <div style={{ display: 'flex' }}>
            <div>吃饭</div>
            <div
              style={{
                background: 'red',
                width: '5px',
                height: '5px',
                borderRadius: '50%',
                position: 'relative',
                left: '5px',
              }}
            ></div>
          </div>
        );
      },
    },
    {
      day: 2,
      month: date.getMonth() + 1,
      year: date.getFullYear(),
      getNode: () => {
        return <div>睡觉</div>;
      },
    },
    {
      day: 3,
      month: date.getMonth() + 1,
      year: date.getFullYear(),
      getNode: () => {
        return <div>打豆豆</div>;
      },
    },
    {
      day: 6,
      month: date.getMonth() + 1,
      year: date.getFullYear(),
      getNode: () => {
        return <div>学习一天</div>;
      },
    },
    {
      day: 15,
      month: date.getMonth() + 1,
      year: date.getFullYear(),
      getNode: () => {
        return <div>加班</div>;
      },
    },
    {
      day: 16,
      month: date.getMonth() + 1,
      year: date.getFullYear(),
      getNode: () => {
        return (
          <div style={{ display: 'flex' }}>
            <div>摸鱼</div>
            <div
              style={{
                background: 'red',
                width: '5px',
                height: '5px',
                borderRadius: '50%',
                position: 'relative',
                left: '5px',
              }}
            ></div>
          </div>
        );
      },
    },
  ];

  const minDate = {
    day: 11,
    month: date.getMonth() + 1,
    year: date.getFullYear(),
  };

  const maxDate = {
    day: 26,
    month: date.getMonth() + 1,
    year: date.getFullYear(),
  };
  return (
    <>
      <PageHeader title='基本使用' />
      <Calendar></Calendar>

      <PageHeader title='自定义渲染内容' />
      <Calendar customData={customData}></Calendar>

      <PageHeader title='默认日历模式' />
      <Calendar disabledDate></Calendar>

      <PageHeader title='限制最大日期与最小日期' />
      <Calendar minDate={minDate} maxDate={maxDate}></Calendar>

      <PageHeader title='mini模式' />
      <Calendar mode='mini'></Calendar>
    </>
  );
};

/**
 * 参数面板
 */
export const defaultCalendar = defaultCalendarTpl.bind({});
defaultCalendar.args = {};
