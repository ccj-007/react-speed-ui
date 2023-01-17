import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Card } from '../../index';

describe('test Card component', () => {
  it('should render', () => {
    const { asFragment } = render(<Card />);
    expect(asFragment()).toMatchSnapshot();
  });
});
