import React from "react";
import Radio from "./index";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import PageHeader from "../PageHeader";

export default {
  title: "数据录入/Radio",
  component: Radio,
  parameters: {
    docs: {
      description: {
        component: "### 单选框",
      },
    },
  },
} as ComponentMeta<typeof Radio>;

/**
 * 展示面板
 */
const defaultRadioTpl: ComponentStory<typeof Radio> = (args) => {

  const [select, setSelect] = React.useState(2)

  const onChange = (value) => {
    console.log('radio checked11', value);
  };
  const onChange2 = (value) => {
    setSelect(value)
    console.log('radio checked22', value);
  };

  const onChange3 = (value) => {
    console.log('radio checked11', value);
  };

  const onChange4 = (value) => {
    console.log('radio checked11', value);
  };
  return (
    <>
      <PageHeader title="基本使用" />
      <Radio.Group onChange={onChange} >
        <Radio value={1} >A</Radio>
        <Radio value={2}>B</Radio>
        <Radio value={3}>C</Radio>
        <Radio value={4}>D</Radio>
      </Radio.Group>
      <PageHeader title="互斥" />
      <Radio.Group onChange={onChange2} defaultSelect={select} isExclude>
        <Radio value={1} >A</Radio>
        <Radio value={2}>B</Radio>
        <Radio value={3}>C</Radio>
        <Radio value={4}>D</Radio>
      </Radio.Group>

      <PageHeader title="竖向" />
      <Radio.Group onChange={onChange3} align='column' >
        <Radio value={'a'}>JUNE</Radio>
        <Radio value={'b'}>AHUE</Radio>
        <Radio value={'c'}>OPOPE</Radio>
        <Radio value={'d'}>VIVIO</Radio>
      </Radio.Group>

      <PageHeader title="禁用" />
      <Radio.Group onChange={onChange4} align='column' >
        <Radio value={111}>JUNE</Radio>
        <Radio value={222} disabled>AHUE</Radio>
        <Radio value={333}>OPOPE</Radio>
        <Radio value={444} disabled>VIVIO</Radio>
      </Radio.Group>
    </>
  );
};

/**
 * 参数面板
 */
export const defaultRadio = defaultRadioTpl.bind({});
defaultRadio.args = {};
