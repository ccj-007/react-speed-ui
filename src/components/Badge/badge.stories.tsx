import React from 'react';
import Badge from './Badge';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { PageHeader, Avatar, Space } from '../index';

export default {
  title: '数据展示/Badge 徽标数',
  component: Badge,
  parameters: {
    docs: {
      description: {
        component: '### 图标右上角的圆形徽标数字',
      },
    },
  },
} as ComponentMeta<typeof Badge>;

/**
 * 展示面板
 */
const defaultBadgeTpl: ComponentStory<typeof Badge> = args => {
  return (
    <>
      <PageHeader title='基本使用' />
      <Space>
        <Badge>
          <Avatar shape='square' text='AAa'></Avatar>
        </Badge>
        <Badge count={0} showZero>
          <Avatar shape='square' text='BBB'></Avatar>
        </Badge>
        <Badge count={10} dotSize={20} showZero style={{ background: 'pink', color: 'red' }}>
          <Avatar shape='square' text='User'></Avatar>
        </Badge>
      </Space>

      <PageHeader title='标记' />
      <Space>
        <Badge dot dotSize={5}>
          <Avatar shape='square' text='User'></Avatar>
        </Badge>
        <Badge dot dotSize={10}>
          <Avatar shape='square' text='User'></Avatar>
        </Badge>
        <Badge dot dotSize={15}>
          <Avatar shape='square' text='User'></Avatar>
        </Badge>
      </Space>
    </>
  );
};

/**
 * 参数面板
 */
export const defaultBadge = defaultBadgeTpl.bind({});
defaultBadge.args = {};
