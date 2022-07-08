import React from 'react';
import { action } from '@storybook/addon-actions'
import Icon from './icon'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'

export const defaultIcon = () => (
  <>
    <Icon icon={solid('angle-down')} size='5x' color='#0d6efd'></Icon>
    <Icon icon={solid('angle-up')} size='5x' color='#6610f2'></Icon>
    <Icon icon={solid('angle-left')} size='5x' color='#d63384'></Icon>
    <Icon icon={solid('angle-right')} size='5x' color='#17a2b8'></Icon>
    <Icon icon={solid('xmark')} size='5x' color='#fadb14'></Icon>
    <Icon icon={solid('circle-xmark')} size='5x' color='#20c997'></Icon>
  </>
)

export default {
  title: 'Icon',
  component: Icon,
};
