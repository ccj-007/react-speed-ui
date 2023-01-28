import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Carousel } from '../../index';

describe('test Carousel component', () => {
  it('should render', () => {
    const { asFragment } = render(<Carousel />);
    expect(asFragment()).toMatchSnapshot();
  });
});
