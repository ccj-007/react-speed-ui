import React from "react";
import Menu from "./Menu";
import MenuItem from "./MenuItem";
import SubMenu from "./SubMenu";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import PageHeader from "../PageHeader";

export default {
  title: "导航/Menu 菜单",
  component: Menu,
  parameters: {
    docs: {
      description: {
        component: "### 为页面和功能提供导航的菜单列表 ",
      },
    },
  },
} as ComponentMeta<typeof Menu>;

export const defaultMenu: ComponentStory<typeof Menu> = () => (
  <><PageHeader title="基本使用"></PageHeader>
    <Menu onSelect={(index) => console.log(index)}>
      <MenuItem>标签1</MenuItem>
      <MenuItem>标签2</MenuItem>
      <MenuItem>标签3</MenuItem>
      <SubMenu title="标签4">
        <MenuItem>标签1</MenuItem>
        <MenuItem>标签2</MenuItem>
        <MenuItem>标签3</MenuItem>
      </SubMenu>
    </Menu></>

);

export const verticalMenu: ComponentStory<typeof Menu> = () => (
  <>
    <PageHeader title="垂直"></PageHeader>
    <Menu mode="vertical" onSelect={(index) => console.log(index)}>
      <MenuItem>标签1</MenuItem>
      <MenuItem>标签2</MenuItem>
      <MenuItem>标签3</MenuItem>
      <SubMenu title="标签4">
        <MenuItem>标签1</MenuItem>
        <MenuItem>标签2</MenuItem>
        <MenuItem>标签3</MenuItem>
      </SubMenu>
    </Menu></>
);
