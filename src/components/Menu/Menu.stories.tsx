import React from 'react';
import { action } from '@storybook/addon-actions'
import { Menu } from './menu'
import MenuItem from './menuItem'
import SubMenu from './subMenu'

export const defaultMenu = () => (
  <Menu onSelect={(index) => console.log(index)} >
    <MenuItem >标签1</MenuItem>
    <MenuItem>标签2</MenuItem>
    <MenuItem>标签3</MenuItem>
    <SubMenu title='标签4'>
      <MenuItem >标签1</MenuItem>
      <MenuItem>标签2</MenuItem>
      <MenuItem>标签3</MenuItem>
    </SubMenu>
  </Menu>
)

export const verticalMenu = () => (
  <Menu mode='vertical' onSelect={(index) => console.log(index)} >
    <MenuItem >标签1</MenuItem>
    <MenuItem>标签2</MenuItem>
    <MenuItem>标签3</MenuItem>
    <SubMenu title='标签4'>
      <MenuItem >标签1</MenuItem>
      <MenuItem>标签2</MenuItem>
      <MenuItem>标签3</MenuItem>
    </SubMenu>
  </Menu>
)

export default {
  title: '数据展示/Menu',
  component: Menu,
};
