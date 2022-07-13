import React from "react";
import Dropdown from "./Dropdown";
import Button from '../Button/button'

export default {
  title: "导航/Dropdown",
  component: Dropdown,
};

const menu =
  [{
    key: '1',
    label: (
      <div>我是默认的</div>
    ),
  },
  {
    key: '2',
    label: (
      <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
        2nd menu item
      </a>
    ),
  },
  {
    key: '3',
    label: (
      <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
        3rd menu item
      </a>
    ),
  }]


const defaultDropdownTpl = (args: any) => {
  return (
    <>
      <Dropdown menu={menu} placement={'l'} onClickChange={(item) => console.log(item)
      }>
        <Button style={{ margin: '140px' }}>向左弹出列表</Button>
      </Dropdown>
      <Dropdown menu={menu} placement={'t'}>
        <Button style={{ margin: '140px' }}>向上弹出列表</Button>
      </Dropdown>
      <Dropdown menu={menu} placement={'b'}>
        <Button style={{ margin: '140px' }}>向下弹出列表</Button>
      </Dropdown>
      <Dropdown menu={menu} placement={'r'}>
        <Button style={{ margin: '140px' }}>向右弹出列表</Button>
      </Dropdown>
    </>
  );
};
export const defaultDropdown: any = defaultDropdownTpl.bind({});
defaultDropdown.args = {
  percent: 59,
};
