import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Cascader } from '../../index';
import { options } from '../cascader.stories';

describe('test Cascader component', () => {
  it('should render', () => {
    const { asFragment } = render(
      <>
        <Cascader options={options} />
      </>,
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
