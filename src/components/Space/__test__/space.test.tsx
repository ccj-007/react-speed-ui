import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Space } from '../../index';

describe('test Space component', () => {
  it('should render', () => {
    const { asFragment } = render(<Space />);
    expect(asFragment()).toMatchSnapshot();
  });
});
