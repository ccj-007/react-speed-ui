import React from 'react';
import Cascader from './Cascader';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { PageHeader } from '../index';

export default {
  title: '模板/Cascader 级联选择',
  component: Cascader,
  parameters: {
    docs: {
      description: {
        component: '### 级联选择框',
      },
    },
  },
} as ComponentMeta<typeof Cascader>;

interface Option {
  value: string;
  label: string;
  children?: Option[];
}

const options: Option[] = [
  {
    value: 'zhejiang',
    label: 'Zhejiang',
    children: [
      {
        value: 'hangzhou',
        label: 'Hangzhou',
        children: [
          {
            value: 'wuhan',
            label: 'Wuhan',
          },
        ],
      },
    ],
  },
  {
    value: 'jiangsu',
    label: 'Jiangsu',
    children: [
      {
        value: 'nanjing',
        label: 'Nanjing',
        children: [
          {
            value: 'zhonghuamen',
            label: 'Zhong Hua Men',
            children: [
              {
                value: 'beijing',
                label: 'Beijing',
                children: [
                  {
                    value: 'yunnan',
                    label: 'Yunnan',
                  },
                ],
              },
            ],
          },

        ],
      },
    ],
  },
];

/**
 * 展示面板
 */
const defaultCascaderTpl: ComponentStory<typeof Cascader> = args => {
  const onChange = (val: number) => {
    console.log(val);
  };
  return (
    <>
      <PageHeader title='基本使用' />
      <Cascader options={options} onChange={onChange} placeholder='Please select'></Cascader>
    </>
  );
};

/**
 * 参数面板
 */
export const defaultCascader = defaultCascaderTpl.bind({});
defaultCascader.args = {};
