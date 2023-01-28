import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Steps } from '../../index';

describe('test Steps component', () => {
  it('should render', () => {
    const { asFragment } = render(<Steps statusList={[]} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
