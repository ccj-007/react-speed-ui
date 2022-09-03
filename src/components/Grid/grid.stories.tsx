import React from "react";
import Row from "./Row";
import Col from "./Col";
import { ComponentStory, ComponentMeta } from '@storybook/react'
import PageHeader from "../PageHeader";

const defaultGridTpl = (args: any) => {
  const style: React.CSSProperties = { background: '#0092ff', width: '100%', height: '100%', textAlign: 'center', lineHeight: '100px' };

  return (
    <>
      <PageHeader title="24格网格（span）"></PageHeader>
      <Row className='speed-example-row'>
        <Col span={8} className='speed-example-col'><span style={style}>8</span></Col>
        <Col span={8} className='speed-example-col'><span style={style}>8</span></Col>
        <Col span={8} className='speed-example-col'><span style={style}>8</span></Col>
      </Row>
      <Row className='speed-example-row'>
        <Col span={6} className='speed-example-col'><span style={style}>6</span></Col>
        <Col span={6} className='speed-example-col'><span style={style}>6</span></Col>
        <Col span={6} className='speed-example-col'><span style={style}>6</span></Col>
        <Col span={6} className='speed-example-col'><span style={style}>6</span></Col>
      </Row>
      <Row className='speed-example-row'>
        <Col span={4} className='speed-example-col'><span style={style}>4</span></Col>
        <Col span={4} className='speed-example-col'><span style={style}>4</span></Col>
        <Col span={4} className='speed-example-col'><span style={style}>4</span></Col>
        <Col span={4} className='speed-example-col'><span style={style}>4</span></Col>
        <Col span={4} className='speed-example-col'><span style={style}>4</span></Col>
        <Col span={4} className='speed-example-col'><span style={style}>4</span></Col>
      </Row>

      <PageHeader title="设置gutter"></PageHeader>
      <Row className='speed-example-row' gutter={4}>
        <Col span={6} className='speed-example-col'>
          <span style={style}>6</span>
        </Col>
        <Col span={6} className='speed-example-col'><span style={style}>6</span></Col>
        <Col span={6} className='speed-example-col'><span style={style}>6</span></Col>
        <Col span={6} className='speed-example-col'><span style={style}>6</span> </Col>
      </Row>

      <PageHeader title="设置间隙"></PageHeader>
      <Row className='speed-example-row' gutter={4}>
        <Col span={10} className='speed-example-col'><span style={style}>10</span></Col>
        <Col span={2} offset={2} className='speed-example-col'><span style={style}>2</span></Col>
        <Col span={2} offset={2} className='speed-example-col'><span style={style}>2</span> </Col>
        <Col span={5} offset={1} className='speed-example-col'><span style={style}>5</span> </Col>
      </Row>

    </>
  );
};
export const defaultGrid: any = defaultGridTpl.bind({});
defaultGrid.args = {
};

export default {
  title: "布局/Grid",
  component: defaultGridTpl,
  parameters: {
    docs: {
      description: {
        component: "### Grid格栅布局",
      },
    },
  },
};
