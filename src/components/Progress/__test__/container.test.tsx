import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Progress } from '../../index';

describe('test Progress component', () => {
  it('should render', () => {
    const { asFragment } = render(<Progress percent={0} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
