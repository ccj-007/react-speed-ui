import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Message } from '../../index';

describe('test Message component', () => {
  it('should render', () => {
    const { asFragment } = render(<Message type='success' />);
    expect(asFragment()).toMatchSnapshot();
  });
});
