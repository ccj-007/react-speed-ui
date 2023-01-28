import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Statistic } from '../../index';

describe('test Statistic component', () => {
  it('should render', () => {
    const { asFragment } = render(<Statistic />);
    expect(asFragment()).toMatchSnapshot();
  });
});
