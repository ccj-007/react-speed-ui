import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Modal } from '../../index';

describe('test Modal component', () => {
  it('should render', () => {
    const { asFragment } = render(<Modal />);
    expect(asFragment()).toMatchSnapshot();
  });
});
