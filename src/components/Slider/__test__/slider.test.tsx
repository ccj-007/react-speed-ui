import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Slider } from '../../index';

describe('test Slider component', () => {
  it('should render', () => {
    const { asFragment } = render(<Slider defaultVal={0} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
