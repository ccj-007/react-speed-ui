import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Icon } from '../../index';

describe('test Icon component', () => {
  it('should render', () => {
    const { asFragment } = render(<Icon icon />);
    expect(asFragment()).toMatchSnapshot();
  });
});
