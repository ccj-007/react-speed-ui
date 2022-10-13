import { render } from '@testing-library/react';
import Button from '../Button';
import "@testing-library/jest-dom/extend-expect";

describe('test button component', () => {
  it('should render a <Button/> components', () => {
    const { asFragment } = render(
      <>
        <Button >default button</Button>
        <Button size="lg">small button</Button>
        <Button size="sm">small button</Button>
        <Button btnType="success">success button</Button>
        <Button btnType="primary">primary button</Button>
        <Button btnType="warning">warning button</Button>
        <Button btnType="danger">danger button</Button>
        <Button btnType="link" href="https://google.com">
          link button
        </Button>
      </>
    );
    expect(asFragment()).toMatchSnapshot();
  })

  it('should use speed-ui classNames', () => {
    const { container } = render(
      <>
        <Button size="lg">small button</Button>
      </>
    );
    expect(container.firstChild).toHaveClass('speed-button speed-button-lg')
  })

  it("should be disabled", () => {
    const { getByTestId } = render(<Button disabled />);
    expect(getByTestId("button")).toBeDisabled();
  });


  it("if button type is link so tagName is a", () => {
    const { getByTestId } = render(<Button btnType='link' href='www.baidu.com' />);
    expect(getByTestId("button").tagName).toEqual('A');
  });
});
