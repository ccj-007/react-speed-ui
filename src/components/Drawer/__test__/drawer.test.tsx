import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Drawer } from '../../index';

describe('test Drawer component', () => {
  it('should render', () => {
    const { asFragment } = render(<Drawer />);
    expect(asFragment()).toMatchSnapshot();
  });
});
