import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Spin } from '../../index';

describe('test Spin component', () => {
  it('should render', () => {
    const { asFragment } = render(<Spin />);
    expect(asFragment()).toMatchSnapshot();
  });
});
