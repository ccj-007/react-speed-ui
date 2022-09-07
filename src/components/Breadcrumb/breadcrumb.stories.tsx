import React from "react";
import { action } from "@storybook/addon-actions";
import Breadcrumb from "./Breadcrumb";
import BreadcrumbItem from "./BreadcrumbItem";
import PageHeader from "../PageHeader";
import { ComponentStory, ComponentMeta } from "@storybook/react";
export default {
  title: "导航/BreadCrumb 面包屑",
  component: Breadcrumb,
  parameters: {
    docs: {
      description: {
        component: "### 显示当前页面在系统层级结构中的位置，并能向上返回",
      },
    },
  },
} as ComponentMeta<typeof Breadcrumb>;

const defaultBreadCrumbTpl: ComponentStory<typeof Breadcrumb> = (args: any) => {
  return (
    <>
      <PageHeader title="默认的面包屑导航" />
      <div>
        <Breadcrumb allSeparator={<span>/</span>}>
          <BreadcrumbItem>Home</BreadcrumbItem>
          <BreadcrumbItem>
            <a href="">Application Center</a>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <a href="">Application List</a>
          </BreadcrumbItem>
          <BreadcrumbItem>An Application</BreadcrumbItem>
        </Breadcrumb>
      </div>

      <PageHeader title="自定义分隔符" />
      <div>
        <Breadcrumb allSeparator={<span>-{">"}</span>}>
          <BreadcrumbItem>Home</BreadcrumbItem>
          <BreadcrumbItem>
            <a href="">Application Center</a>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <a href="">Application List</a>
          </BreadcrumbItem>
          <BreadcrumbItem>An Application</BreadcrumbItem>
        </Breadcrumb>
      </div>

      <PageHeader title="自定义分隔符" />
      <div>
        <Breadcrumb>
          <BreadcrumbItem disabled>Home</BreadcrumbItem>
          <BreadcrumbItem disabled separator={<span>---{">"}</span>}>
            <a href="">Application Center</a>
          </BreadcrumbItem>
          <BreadcrumbItem disabled separator={<span>-----{">"}</span>}>
            <a href="">Application List</a>
          </BreadcrumbItem>
          <BreadcrumbItem disabled separator={<span>-----{">"}</span>}>
            An Application
          </BreadcrumbItem>
        </Breadcrumb>
      </div>
    </>
  );
};

export const defaultBreadCrumb = defaultBreadCrumbTpl.bind({});
defaultBreadCrumb.args = {};
