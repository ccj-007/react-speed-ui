import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Switch } from '../../index';

describe('test Switch component', () => {
  it('should render', () => {
    const { asFragment } = render(<Switch />);
    expect(asFragment()).toMatchSnapshot();
  });
});
