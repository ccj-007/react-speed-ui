import React from 'react';
import { Icon } from './Icon'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'
import { ComponentStory, ComponentMeta } from '@storybook/react'

export default {
  title: '通用/Icon',
  component: Icon,
  parameters: {
    docs: {
      description: {
        component: "### 用于表达特殊意味的辅助符号",
      },
    },
  },
} as ComponentMeta<typeof Icon>

export const defaultIcon: ComponentStory<typeof Icon> = () => (
  <>
    <Icon icon={solid('angle-down')} size='5x' color='#d7d7d7'></Icon>
    <Icon icon={solid('angle-up')} size='5x' color='#cbcbcb'></Icon>
    <Icon icon={solid('angle-left')} size='5x' color='#888888'></Icon>
    <Icon icon={solid('angle-right')} size='5x' color='#636363'></Icon>
    <Icon icon={solid('xmark')} size='5x' color='#424242'></Icon>
    <Icon icon={solid('circle-xmark')} size='5x' color='#222222'></Icon>
  </>
)


