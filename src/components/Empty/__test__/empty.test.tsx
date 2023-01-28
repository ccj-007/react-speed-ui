import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Empty } from '../../index';

describe('test Empty component', () => {
  it('should render', () => {
    const { asFragment } = render(<Empty />);
    expect(asFragment()).toMatchSnapshot();
  });
});
