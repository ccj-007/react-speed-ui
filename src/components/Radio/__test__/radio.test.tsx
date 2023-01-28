import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Radio } from '../../index';

describe('test Radio component', () => {
  it('should render', () => {
    const { asFragment } = render(<Radio />);
    expect(asFragment()).toMatchSnapshot();
  });
});
