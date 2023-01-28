import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Rate } from '../../index';

describe('test Rate component', () => {
  it('should render', () => {
    const { asFragment } = render(<Rate />);
    expect(asFragment()).toMatchSnapshot();
  });
});
