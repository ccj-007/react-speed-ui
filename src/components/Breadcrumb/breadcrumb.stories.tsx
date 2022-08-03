import React from "react";
import { action } from "@storybook/addon-actions";
import Breadcrumb from "./breadcrumb";
import BreadcrumbItem from "./breadcrumbItem";
import { ComponentStory, ComponentMeta } from '@storybook/react'
export default {
  title: "导航/BreadCrumb",
  component: Breadcrumb,
} as ComponentMeta<typeof Breadcrumb>

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
        <Breadcrumb >
          <BreadcrumbItem >Home</BreadcrumbItem>
          <BreadcrumbItem separator={<span>---{">"}</span>}>
            <a href="">Application Center</a>
          </BreadcrumbItem>
          <BreadcrumbItem disabled separator={<span>-----{">"}</span>}>
            <a href="" >Application List</a>
          </BreadcrumbItem>
          <BreadcrumbItem disabled separator={<span>-----{">"}</span>}>An Application</BreadcrumbItem>
        </Breadcrumb>
      </div>
    </>
  )
}

export const defaultBreadCrumb = defaultBreadCrumbTpl.bind({});
defaultBreadCrumb.args = {
};

