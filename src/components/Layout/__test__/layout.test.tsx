import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Layout } from '../../index';

describe('test Layout component', () => {
  it('should render', () => {
    const { asFragment } = render(<Layout />);
    expect(asFragment()).toMatchSnapshot();
  });
});
