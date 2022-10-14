import { render, fireEvent, screen } from '@testing-library/react';
import { Alert, Button } from '../../index';
import "@testing-library/jest-dom/extend-expect";
import React from 'react';

describe('test alert component', () => {
  const Demo = () => {
    let [isOpen, setIsOpen] = React.useState(false);
    return (
      <>
        <Button onClick={() => setIsOpen(true)}>
          alert
        </Button>
        <Alert
          isOpen={isOpen}
          title='title content'
          alertType='success'
          content='test content'
          closeAlert={() => setIsOpen(false)}
        ></Alert>
      </>
    )
  }

  it('should render', () => {
    const { asFragment } = render(
      <Demo />
    );
    fireEvent.click(screen.getByText(/alert/i))

    expect(asFragment()).toMatchSnapshot();
  })

  it('click it show alert', () => {

    const { getByTestId } = render(
      <Demo />
    );
    fireEvent.click(screen.getByText(/alert/i))
    expect(getByTestId('alert')).toBeInTheDocument()
    expect(getByTestId('alert')).toHaveClass('speed-alert speed-alert-success')
  });
})
