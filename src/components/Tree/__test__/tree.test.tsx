import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Tree } from '../../index';

describe('test Tree component', () => {
  it('should render', () => {
    const { asFragment } = render(<Tree />);
    expect(asFragment()).toMatchSnapshot();
  });
});
