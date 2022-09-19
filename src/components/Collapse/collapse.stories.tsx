import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { PageHeader, Collapse } from "../index";

const { Panel } = Collapse

export default {
  title: "模板/Collapse",
  component: Collapse,
  parameters: {
    docs: {
      description: {
        component: "### 组件模板",
      },
    },
  },
} as ComponentMeta<typeof Collapse>;

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;
/**
 * 展示面板
 */
const defaultCollapseTpl: ComponentStory<typeof Collapse> = (args) => {
  const onChange = () => {
    console.log("1111111111");
  }
  return (
    <>
      <PageHeader title="基本使用" />
      <Collapse onChange={onChange}>
        <Panel header="This is panel header 1" keyId="1">
          <p>{text}</p>
        </Panel>
        <Panel header="This is panel header 2" keyId="2">
          <p>{text}</p>
        </Panel>
        <Panel header="This is panel header 3" keyId="3">
          <p>{text}</p>
        </Panel>
      </Collapse>

      <PageHeader title="默认展开" />
      <Collapse defaultActiveKey={['1', '2']} onChange={onChange}>
        <Panel header="This is panel header 1" keyId="1">
          <p>{text}</p>
        </Panel>
        <Panel header="This is panel header 2" keyId="2">
          <p>{text}</p>
        </Panel>
        <Panel header="This is panel header 3" keyId="3">
          <p>{text}</p>
        </Panel>
      </Collapse>
    </>
  );
};

/**
 * 参数面板
 */
export const defaultCollapse = defaultCollapseTpl.bind({});
defaultCollapse.args = {};
