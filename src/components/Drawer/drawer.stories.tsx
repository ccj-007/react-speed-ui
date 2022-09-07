import React from "react";
import Drawer from "./Drawer";
import Button from "../Button";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import PageHeader from "../PageHeader";
import Space from "../Space";

export default {
  title: "反馈/Drawer 抽屉",
  component: Drawer,
  parameters: {
    docs: {
      description: {
        component: "### 屏幕边缘滑出的浮层面板",
      },
    },
  },
} as ComponentMeta<typeof Drawer>;

/**
 * 展示面板
 */
const defaultDrawerTpl: ComponentStory<typeof Drawer> = (args) => {
  const { title, placement } = args;
  const [visible, setVisible] = React.useState(false);
  const [visible2, setVisible2] = React.useState(false);
  const [visible3, setVisible3] = React.useState(false);
  const [visible4, setVisible4] = React.useState(false);

  const handleShow = React.useCallback(() => {
    setVisible(true);
  }, [visible]);
  const handleClose = React.useCallback(() => {
    setVisible(false);
  }, [visible]);

  const handleShow2 = React.useCallback(() => {
    setVisible2(true);
  }, [visible2]);
  const handleClose2 = React.useCallback(() => {
    setVisible2(false);
  }, [visible2]);

  const handleShow3 = React.useCallback(() => {
    setVisible3(true);
  }, [visible3]);
  const handleClose3 = React.useCallback(() => {
    setVisible3(false);
  }, [visible3]);

  const handleShow4 = React.useCallback(() => {
    setVisible4(true);
  }, [visible4]);
  const handleClose4 = React.useCallback(() => {
    setVisible4(false);
  }, [visible4]);
  return (
    <>
      <PageHeader title="基本使用" />
      <Space>
        <Drawer
          title={title}
          visible={visible}
          onClose={handleClose}
          placement="left"
        >
          左侧打开抽屉
        </Drawer>
        <Button onClick={handleShow}>左侧打开抽屉</Button>

        <Drawer
          title={title}
          visible={visible2}
          onClose={handleClose2}
          placement="right"
        >
          右侧打开抽屉
        </Drawer>
        <Button onClick={handleShow2}>右侧打开抽屉</Button>

        <Drawer
          title={title}
          visible={visible3}
          onClose={handleClose3}
          placement="top"
        >
          顶部打开抽屉
        </Drawer>
        <Button onClick={handleShow3}>顶部打开抽屉</Button>

        <Drawer
          title={title}
          visible={visible4}
          onClose={handleClose4}
          placement="bottom"
        >
          底部打开抽屉
        </Drawer>
        <Button onClick={handleShow4}>底部打开抽屉</Button>
      </Space>
    </>
  );
};

/**
 * 参数面板
 */
export const defaultDrawer = defaultDrawerTpl.bind({});
defaultDrawer.args = {
  title: "默认标题",
  placement: "left",
};
