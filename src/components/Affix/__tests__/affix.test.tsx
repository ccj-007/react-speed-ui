import { render } from '@testing-library/react';
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
    const Demo = () => {
      return (
        <>
          <Anchor jumpObj={jumpObj}></Anchor>
        </>
      );
    }
    const { asFragment } = render(<Demo />)
    expect(asFragment()).toMatchSnapshot();
  })

  it('should use speed-ui classNames', () => {
    const { container } = render(
      <Anchor ></Anchor>
    );
    expect(container.firstChild).toHaveClass('speed-anchor')
  })
});
