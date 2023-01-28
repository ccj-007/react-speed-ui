import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Menu } from '../../index';

describe('test Menu component', () => {
  it('should render', () => {
    const { asFragment } = render(<Menu />);
    expect(asFragment()).toMatchSnapshot();
  });
});
