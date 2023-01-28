import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Form } from '../../index';

describe('test Form component', () => {
  it('should render', () => {
    const { asFragment } = render(<Form />);
    expect(asFragment()).toMatchSnapshot();
  });
});
