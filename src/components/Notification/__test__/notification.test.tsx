import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Notification } from '../../index';

describe('test Notification component', () => {
  it('should render', () => {
    const { asFragment } = render(
      <Notification
        data={{
          content: undefined,
          title: undefined,
          icon: undefined,
        }}
        width={0}
        height={0}
        position={'br'}
      />,
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
