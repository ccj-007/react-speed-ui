import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Transition } from '../../index';

describe('test Transition component', () => {
  it('should render', () => {
    const { asFragment } = render(<div></div>);
    expect(asFragment()).toMatchSnapshot();
  });
});
