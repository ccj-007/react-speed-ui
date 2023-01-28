import React from 'react';
import Carousel from './Carousel';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { PageHeader, Space } from '../index';

export default {
  title: '数据展示/Carousel 轮播图',
  component: Carousel,
  parameters: {
    docs: {
      description: {
        component: '### 轮播图',
      },
    },
  },
} as ComponentMeta<typeof Carousel>;

/**
 * 展示面板
 */
const defaultCarouselTpl: ComponentStory<typeof Carousel> = args => {
  return (
    <div style={{ display: 'flex' }}>
      <Space>
        <div>
          <PageHeader title='基本使用' />
          <Carousel dots={false} onChange={() => console.log('触发了change')}></Carousel>
        </div>

        <div>
          <PageHeader title='切换器' />
          <Carousel dotPosition='bottom' defaultId={1} onChange={() => console.log('触发了change')}></Carousel>
        </div>

        <div>
          <PageHeader title='自动轮播' />
          <Carousel dotPosition='top' autoplay defaultId={0} onChange={() => console.log('触发了change')}></Carousel>
        </div>
      </Space>
    </div>
  );
};

/**
 * 参数面板
 */
export const defaultCarousel = defaultCarouselTpl.bind({});
defaultCarousel.args = {};
