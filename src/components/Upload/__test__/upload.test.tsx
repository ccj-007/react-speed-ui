import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Upload } from '../../index';

describe('test Upload component', () => {
  it('should render', () => {
    const { asFragment } = render(<Upload action={''} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
