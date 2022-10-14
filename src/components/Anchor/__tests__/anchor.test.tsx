import { render, fireEvent, screen } from '@testing-library/react';
import { Anchor } from '../../index';
import "@testing-library/jest-dom/extend-expect";
import React from 'react';

describe('test anchor component', () => {
  it('should render', () => {
    let jumpObj = [
      {
        queryId: "#header",
        title: "标题头部",
        key: 0,
      },
      {
        queryId: "#content",
        title: "内容区域",
        key: 1,
      },
      {
        queryId: "#content2",
        title: "内容2区域",
        key: 2,
      },
      {
        queryId: "#footer",
        title: "尾部区域",
        key: 3,
      },
    ];
    const { asFragment } = render(
      <>
        <Anchor jumpObj={jumpObj}></Anchor>
      </>
    );
    expect(asFragment()).toMatchSnapshot();
  })

  it('use speed-anchor className', () => { 
    const {container} = render(
        <Anchor />
    );
    expect(container.firstChild).toHaveClass('speed-anchor')
  });
})
