import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Collapse } from '../../index';

describe('test Collapse component', () => {
  it('should render', () => {
    const { asFragment } = render(<Collapse onChange={() => {}} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
