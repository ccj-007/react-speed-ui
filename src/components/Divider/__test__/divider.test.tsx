import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Divider } from '../../index';

describe('test Divider component', () => {
  it('should render', () => {
    const { asFragment } = render(<Divider />);
    expect(asFragment()).toMatchSnapshot();
  });
});
