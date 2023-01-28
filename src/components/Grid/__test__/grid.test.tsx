import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Row, Col } from '../../index';

describe('test Grid component', () => {
  it('should render', () => {
    const { asFragment } = render(
      <>
        <Row />
        <Col />
      </>,
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
