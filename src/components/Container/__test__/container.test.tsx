import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Container } from '../../index';

describe('test Container component', () => {
  it('should render', () => {
    const { asFragment } = render(<Container />);
    expect(asFragment()).toMatchSnapshot();
  });
});
