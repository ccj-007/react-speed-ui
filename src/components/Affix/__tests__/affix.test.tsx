import { render } from '@testing-library/react';
import { Affix, Button } from '../../index';
import "@testing-library/jest-dom/extend-expect";
import React from 'react';

describe('test affix component', () => {
  it('should render a <Affix/> components', () => {
    const { asFragment } = render(
      <>
        <Affix offsetTop={20}>
          <Button>Affix top</Button>
        </Affix>
        <Affix offsetBottom={40}>
          <Button>Affix bottom</Button>
        </Affix>
      </>
    );
    expect(asFragment()).toMatchSnapshot();
  })

  it('should use speed-ui classNames', () => {
    const { container } = render(
      <Affix offsetTop={20}>
        <Button>Affix top</Button>
      </Affix>
    );
    expect(container.firstChild).toHaveClass('speed-affix speed-affix-top')
  })
});
