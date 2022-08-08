import React from "react";
import { action } from "@storybook/addon-actions";
import Breadcrumb from "./Breadcrumb";
import BreadcrumbItem from "./BreadcrumbItem";
import { ComponentStory, ComponentMeta } from "@storybook/react";
export default {
  title: "导航/BreadCrumb",
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
