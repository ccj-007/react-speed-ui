import React from "react";
import Tooltip from "./Tooltip";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import PageHeader from "../PageHeader";
import Space from "../Space";
import Button from "../Button";

export default {
  title: "数据展示/Tooltip 气泡框",
  component: Tooltip,
  parameters: {
    docs: {
      description: {
        component: "### 简单文字提示的气泡框",
      },
    },
  },
} as ComponentMeta<typeof Tooltip>;

/**
 * 展示面板
 */
const defaultTooltipTpl: ComponentStory<typeof Tooltip> = (args) => {
  return (
    <>
      <PageHeader title="基本使用" />
      <br></br>
      <Tooltip title='文案提示' width='300px'>
        <p>简单的文本表示下，鼠标划过我......</p>
      </Tooltip>

      <PageHeader title="根据位置弹出" />
      <br></br>
      <br></br>
      <Space size="15px">
        <Tooltip title='Top' placement="Top">
          <Button>Top</Button>
        </Tooltip>
        <Tooltip title='TL' placement="TL">
          <Button>TL</Button>
        </Tooltip>
        <Tooltip title='TR' placement="TR">
          <Button>TR</Button>
        </Tooltip>
      </Space>
      <br></br>
      <br></br>

      <Space size="100px">
        <Tooltip title='LT' placement="LT">
          <Button> <div>LT</div><div>LT</div></Button>
        </Tooltip>
        <Tooltip title='Left' placement="Left">
          <Button>Left</Button>
        </Tooltip>
        <Tooltip title='LB' placement="LB">
          <Button> <div>LB</div><div>LB</div> </Button>
        </Tooltip>
      </Space>
      <br></br>
      <br></br>
      <Space size='100px'>
        <Tooltip title='RT' placement="RT">
          <Button><div>RT</div><div>RT</div></Button>
        </Tooltip>
        <Tooltip title='Right' placement="Right">
          <Button>Right</Button>
        </Tooltip>
        <Tooltip title='RB' placement="RB">
          <Button> <div>RB</div> <div>RB</div>  </Button>
        </Tooltip>
      </Space>
      <br></br>
      <br></br>
      <Space>
        <Tooltip title='BL' placement="BL">
          <Button>BL</Button>
        </Tooltip>
        <Tooltip title='Bottom' placement="Bottom">
          <Button>Bottom</Button>
        </Tooltip>
        <Tooltip title='BR' placement="BR">
          <Button>BR</Button>
        </Tooltip>
      </Space>
    </>
  );
};

/**
 * 参数面板
 */
export const defaultTooltip = defaultTooltipTpl.bind({});
defaultTooltip.args = {};
