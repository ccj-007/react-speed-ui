import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { DatePicker } from '../../index';

describe('test DatePicker component', () => {
  it('should render', () => {
    const { asFragment } = render(<DatePicker />);
    expect(asFragment()).toMatchSnapshot();
  });
});
