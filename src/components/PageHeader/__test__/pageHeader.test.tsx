import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { PageHeader } from '../../index';

describe('test PageHeader component', () => {
  it('should render', () => {
    const { asFragment } = render(<PageHeader title={'test title'} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
