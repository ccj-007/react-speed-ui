import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { BackTop } from '../../index'

describe('test backTop component', () => {
  it('should render component', () => {
    const Demo = () => {
      const boxRef = React.useRef<HTMLDivElement>(null)
      return (
        <>
          <div ref={boxRef}></div>
          <BackTop container={boxRef} visibilityHeight={100}>容器内 backTop</BackTop>
          <BackTop visibilityHeight={300}>root层级 backTop</BackTop>
        </>
      )
    }
    const { asFragment } = render(
      <Demo></Demo>
    )
    expect(asFragment()).toMatchSnapshot()
  })
})
