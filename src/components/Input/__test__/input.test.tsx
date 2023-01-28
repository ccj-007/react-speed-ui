import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Input } from '../../index';

describe('test Input component', () => {
  it('should render', () => {
    const { asFragment } = render(<Input />);
    expect(asFragment()).toMatchSnapshot();
  });
});
