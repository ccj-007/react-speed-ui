import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Pagination } from '../../index';

describe('test Pagination component', () => {
  it('should render', () => {
    const { asFragment } = render(<Pagination />);
    expect(asFragment()).toMatchSnapshot();
  });
});
