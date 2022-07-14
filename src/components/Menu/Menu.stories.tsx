import React from "react";
import Menu from "./menu";
import MenuItem from "./menuItem";
import SubMenu from "./subMenu";
import { ComponentStory, ComponentMeta } from '@storybook/react'

export default {
  title: "数据展示/Menu",
  component: Menu,
} as ComponentMeta<typeof Menu>


export const defaultMenu: ComponentStory<typeof Menu> = () => (
  <Menu onSelect={(index) => console.log(index)}>
    <MenuItem>标签1</MenuItem>
    <MenuItem>标签2</MenuItem>
    <MenuItem>标签3</MenuItem>
    <SubMenu title="标签4">
      <MenuItem>标签1</MenuItem>
      <MenuItem>标签2</MenuItem>
      <MenuItem>标签3</MenuItem>
    </SubMenu>
  </Menu>
);

export const verticalMenu: ComponentStory<typeof Menu> = () => (
  <Menu mode="vertical" onSelect={(index) => console.log(index)}>
    <MenuItem>标签1</MenuItem>
    <MenuItem>标签2</MenuItem>
    <MenuItem>标签3</MenuItem>
    <SubMenu title="标签4">
      <MenuItem>标签1</MenuItem>
      <MenuItem>标签2</MenuItem>
      <MenuItem>标签3</MenuItem>
    </SubMenu>
  </Menu>
);

