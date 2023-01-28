import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Skeleton } from '../../index';

describe('test Skeleton component', () => {
  it('should render', () => {
    const { asFragment } = render(<Skeleton kid={''} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
