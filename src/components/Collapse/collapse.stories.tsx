import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { PageHeader, Collapse } from '../index';

const { Panel } = Collapse;

export default {
  title: '数据展示/Collapse 下拉展示',
  component: Collapse,
  parameters: {
    docs: {
      description: {
        component: '### 下拉展示',
      },
    },
  },
} as ComponentMeta<typeof Collapse>;

const getText = () => {
  return (
    <>
      <p>A dog is a type of domesticated animal. Known for its loyalty and faithfulness</p>
      <p>A dog is a type of domesticated animal. Known for its loyalty and faithfulness</p>
      <p>A dog is a type of domesticated animal. Known for its loyalty and faithfulness</p>
      <p>A dog is a type of domesticated animal. Known for its loyalty and faithfulness</p>
    </>
  );
};
/**
 * 展示面板
 */
const defaultCollapseTpl: ComponentStory<typeof Collapse> = args => {
  const onChange = () => {
    console.log('1111111111');
  };
  return (
    <>
      <PageHeader title='基本使用' />
      <Collapse onChange={onChange}>
        <Panel header='This is panel header 1' keyId='1'>
          <p>{getText()}</p>
        </Panel>
        <Panel header='This is panel header 2' keyId='2'>
          <p>{getText()}</p>
        </Panel>
        <Panel header='This is panel header 3' keyId='3'>
          <p>{getText()}</p>
        </Panel>
      </Collapse>

      <PageHeader title='默认展开' />
      <Collapse defaultActiveKey={['1', '2']} onChange={onChange}>
        <Panel header='This is panel header 1' keyId='1'>
          <p>{getText()}</p>
        </Panel>
        <Panel header='This is panel header 2' keyId='2'>
          <p>{getText()}</p>
        </Panel>
        <Panel header='This is panel header 3' keyId='3'>
          <p>{getText()}</p>
        </Panel>
      </Collapse>

      <PageHeader title='手风琴效果' />
      <Collapse defaultActiveKey={['3']} onChange={onChange} accordion>
        <Panel header='This is panel header 1' keyId='1'>
          <p>{getText()}</p>
        </Panel>
        <Panel header='This is panel header 2' keyId='2'>
          <p>{getText()}</p>
        </Panel>
        <Panel header='This is panel header 3' keyId='3'>
          <p>{getText()}</p>
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
