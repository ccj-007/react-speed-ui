/**
 * @description  button test
 */

import React from 'react'
import { render, getByTestId, queryByText } from '@testing-library/react'
import Alert, { AlertProps } from '../alert'

const defaultProps: AlertProps = {
  title: 'my title',
  content: 'my content'
}

describe('test alert component', () => {
  it('element props', () => {
    const wrapper = render(
      <Alert {...defaultProps}> Nice</Alert>
    )
  })
})