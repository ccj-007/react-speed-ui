import React from 'react';
import DatePicker from './DatePicker';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { PageHeader, Container } from '../index';

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
  return (
    <>
      <div>
        <PageHeader title='基本使用' />
        <DatePicker></DatePicker>
      </div>
      <div>
        <PageHeader title='禁用' />
        <DatePicker disabled></DatePicker>
      </div>
      <div>
        <PageHeader title='范围选择器' />
        <DatePicker showArea></DatePicker>
      </div>
    </>
  );
};

/**
 * 参数面板
 */
export const defaultDatePicker = defaultDatePickerTpl.bind({});
defaultDatePicker.args = {};
