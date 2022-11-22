import React from 'react';
import DatePicker from './DatePicker';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Icon } from '../index';
import { PageHeader } from '../index';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';
export default {
  title: '数据录入/DatePicker 日期选择器',
  component: DatePicker,
  parameters: {
    docs: {
      description: {
        component: '### 日期选择器',
      },
    },
  },
} as ComponentMeta<typeof DatePicker>;

/**
 * 展示面板
 */
const defaultDatePickerTpl: ComponentStory<typeof DatePicker> = args => {
  const startDate = {
    year: 2022,
    month: 11,
    day: 2,
  };
  const endDate = {
    year: 2022,
    month: 11,
    day: 30,
  };

  return (
    <>
      <div>
        <PageHeader title='基本使用' />
        <DatePicker
          width={200}
          leftCustomIcon={<Icon icon={solid('calendar-days')} size='1x' color='#aaa'></Icon>}
        ></DatePicker>
      </div>
      <div>
        <PageHeader title='禁用' />
        <DatePicker width={200} disabled></DatePicker>
      </div>
      <div>
        <PageHeader title='范围选择器' />
        <DatePicker
          width={200}
          showArea
          startDate={startDate}
          endDate={endDate}
          leftCustomIcon={<Icon icon={solid('calendar-days')} size='1x' color='#aaa'></Icon>}
        ></DatePicker>
      </div>
    </>
  );
};

/**
 * 参数面板
 */
export const defaultDatePicker = defaultDatePickerTpl.bind({});
defaultDatePicker.args = {};
