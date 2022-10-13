import { render, fireEvent, screen } from '@testing-library/react';
import { Alert, Button } from '../../index';
import "@testing-library/jest-dom/extend-expect";
import React from 'react';

describe('test alert component', () => {
  it('should render', () => {
    const { asFragment } = render(
      <>
        <Alert
          title='title content'
          alertType='success'
          content='test content'
        ></Alert>
      </>
    );
    expect(asFragment()).toMatchSnapshot();
  })

  it('click it show alert', () => {
    const Demo = () => {
      let [isOpen, setIsOpen] = React.useState(false);
      render(
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
    const { getByTestId } = render(
      <Demo />
    );
    fireEvent.click(screen.getByText(/alert/i))
    expect(getByTestId('alert')).toBeInTheDocument()
    expect(getByTestId('alert')).toHaveClass('speed-alert speed-alert-success')
  });
})
