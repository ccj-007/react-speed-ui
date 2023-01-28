import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Select } from '../../index';

describe('test Select component', () => {
  it('should render', () => {
    const { asFragment } = render(<Select />);
    expect(asFragment()).toMatchSnapshot();
  });
});
