import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Tooltip } from '../../index';

describe('test Tooltip component', () => {
  it('should render', () => {
    const { asFragment } = render(<Tooltip />);
    expect(asFragment()).toMatchSnapshot();
  });
});
