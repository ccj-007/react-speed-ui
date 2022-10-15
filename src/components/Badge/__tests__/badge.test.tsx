import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import { Badge, Avatar } from '../../index'

describe('test badge component', () => {
  it('basic use should render', () => {
    const { asFragment } = render(
      <>
        <Badge>
          <Avatar shape="square" text='User'></Avatar>
        </Badge>
        <Badge count={0} showZero>
          <Avatar shape="square" text='User'></Avatar>
        </Badge>
        <Badge count={10} dotSize={20} style={{ background: 'green' }}>
          <Avatar shape="square" text='User' ></Avatar>
        </Badge>
      </>
    )
    expect(asFragment()).toMatchSnapshot()
  })

  it('different tag should render', () => {
    const { asFragment } = render(
      <>
        <Badge dot dotSize={5}>
          <Avatar shape="square" text='User'></Avatar>
        </Badge>
        <Badge dot dotSize={10}>
          <Avatar shape="square" text='User'></Avatar>
        </Badge>
        <Badge dot dotSize={15}>
          <Avatar shape="square" text='User'></Avatar>
        </Badge>
      </>
    )
    expect(asFragment()).toMatchSnapshot()
  })
})