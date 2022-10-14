import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { Icon, Avatar } from '../../index'
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
describe('test avatar component', () => {
  it('use string & icon & img should render', () => {
    const { asFragment } = render(
      <>
        <Avatar text='User'></Avatar>
        <Avatar icon={<Icon icon={solid("user")} size="1x" color="#fff"></Icon>}></Avatar>
        <Avatar style={{ width: '30px', height: '30px' }} src='https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F201708%2F07%2F20170807114113_4efNW.thumb.1000_0.jpeg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1665131372&t=27759fd5e80cffad11405f01579fb6a1'></Avatar>
      </>
    )
    expect(asFragment()).toMatchSnapshot()
  })

  it('different size should render', () => {
    const { asFragment } = render(
      <>
        <Avatar style={{ background: 'green' }} size={40} text='A'></Avatar>
        <Avatar style={{ background: 'orange' }} size={60} icon={<Icon icon={solid("user")} size="2x" color="#fff"></Icon>} ></Avatar>
      </>
    )
    expect(asFragment()).toMatchSnapshot()
  })

  it('different shape should render', () => {
    const { asFragment } = render(
      <>
        <Avatar shape="circle" style={{ background: 'green' }} size={40} text='A'></Avatar>
        <Avatar shape="circle" style={{ background: 'orange' }} size={60} icon={<Icon icon={solid("user")} size="2x" color="#fff"></Icon>} ></Avatar>
      </>
    )
    expect(asFragment()).toMatchSnapshot()
  })
})
