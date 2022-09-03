import React, { useState } from "react";
import Modal from "./Modal";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import PageHeader from "../PageHeader";
import Button from '../Button'

export default {
  title: "反馈/Modal",
  component: Modal,
  parameters: {
    docs: {
      description: {
        component: "### 模态框",
      },
    },
  },
} as ComponentMeta<typeof Modal>;

/**
 * 展示面板
 */
const defaultModalTpl: ComponentStory<typeof Modal> = (args) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleConfirm = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <PageHeader title="基本使用" />
      <Button onClick={showModal}>打开模态框</Button>
      <Modal visible={isModalVisible} onConfirm={handleConfirm} onCancel={handleCancel}>
        <p>some contents .....</p>
        <p>some contents .....</p>
        <p>some contents .....</p>
        <p>some contents .....</p>
      </Modal>
    </>
  );
};

/**
 * 参数面板
 */
export const defaultModal = defaultModalTpl.bind({});
defaultModal.args = {};
