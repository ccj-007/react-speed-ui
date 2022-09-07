import React from "react";
import Badge from "./Badge";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { PageHeader, Avatar, Space } from "../index";

export default {
  title: "数据展示/Badge 徽标数",
  component: Badge,
  parameters: {
    docs: {
      description: {
        component: "### 图标右上角的圆形徽标数字",
      },
    },
  },
} as ComponentMeta<typeof Badge>;

/**
 * 展示面板
 */
const defaultBadgeTpl: ComponentStory<typeof Badge> = (args) => {
  return (
    <>
      <PageHeader title="基本使用" />
      <Badge>
        <Avatar shape="square"><div>User</div></Avatar>
      </Badge>

      <PageHeader title="小圆点" />
      {/* <Badge dot>
        <span>Text...................</span>
      </Badge> */}
    </>
  );
};

/**
 * 参数面板
 */
export const defaultBadge = defaultBadgeTpl.bind({});
defaultBadge.args = {};
