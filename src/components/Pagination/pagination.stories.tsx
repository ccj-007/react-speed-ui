import React from "react";
import Pagination from "./Pagination";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "导航/Pagination",
  component: Pagination,
} as ComponentMeta<typeof Pagination>;

const defaultPaginationTpl: ComponentStory<typeof Pagination> = (args) => {
  return (
    <>
      <Pagination {...args}></Pagination>
      <Pagination defaultCurrent={3} total={80}></Pagination>
      <Pagination {...args} editJumpPage></Pagination>
      <Pagination {...args} showTotal></Pagination>
      <Pagination {...args} editPageSize></Pagination>
    </>
  );
};

const disabledPaginationTpl: ComponentStory<typeof Pagination> = (args) => {
  return (
    <>
      <Pagination {...args}></Pagination>
    </>
  );
};

export const defaultPagination = defaultPaginationTpl.bind({});
defaultPagination.args = {
  disabled: false,
  defaultCurrent: 1,
  total: 50,
  onChange: (page, pageSize) => {
    console.log("当前页码---", page, "每页多少条----", pageSize);
  },
};

export const disabledPagination = disabledPaginationTpl.bind({});
disabledPagination.args = {
  disabled: true,
};
