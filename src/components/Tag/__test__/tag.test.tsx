import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Tag } from '../../index';

describe('test Tag component', () => {
  it('should render', () => {
    const { asFragment } = render(<Tag />);
    expect(asFragment()).toMatchSnapshot();
  });
});
