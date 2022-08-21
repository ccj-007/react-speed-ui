import React from "react";
import Tree from "./Tree";
import { action } from "@storybook/addon-actions";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import PageHeader from "../PageHeader";
import type { DataNode } from './type';
export default {
  title: "模板/Tree",
  component: Tree,
  parameters: {
    docs: {
      description: {
        component: "### 树形控件",
      },
    },
  },
} as ComponentMeta<typeof Tree>;


const treeData: DataNode[] = [
  {
    title: 'parent 1',
    key: '0-0',
    expand: false,
    children: [
      {
        title: 'parent 1-0',
        key: '0-0-0',
        disabled: true,
        expand: false,

        children: [
          {
            title: 'leaf',
            key: '0-0-0-0',
            expand: false,

            children: [
              {
                title: 'leaf-1',
                key: '0-0-0-0-0',
                expand: false,

              },
              {
                title: 'leaf-2',
                key: '0-0-0-0-1',
                expand: false,

              },
            ],
          },
          {
            title: 'leaf2',
            key: '0-0-0-1',
            expand: false,

          },
        ],
      },
      {
        title: 'parent 1-1',
        key: '0-0-1',
        expand: false,
      },
    ],
  },
];

/**
 * 展示面板
 */
const defaultTreeTpl: ComponentStory<typeof Tree> = (args) => {
  return (
    <>
      <PageHeader title="基本使用" />
      <Tree treeData={treeData}></Tree>
    </>
  );
};

/**
 * 参数面板
 */
export const defaultTree = defaultTreeTpl.bind({});
defaultTree.args = {};
