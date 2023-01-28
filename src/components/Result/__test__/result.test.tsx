import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Result } from '../../index';

describe('test Result component', () => {
  it('should render', () => {
    const { asFragment } = render(<Result />);
    expect(asFragment()).toMatchSnapshot();
  });
});
