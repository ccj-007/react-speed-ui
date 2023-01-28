import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Typography } from '../../index';

describe('test Typography component', () => {
  it('should render', () => {
    const { asFragment } = render(
      <>
        <Typography.Text />
        <Typography.Title />
      </>,
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
