import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import { Breadcrumb, BreadcrumbItem } from '../../index'

describe('test badge component', () => {
  it('basic use should render', () => {
    const { asFragment } = render(
      <>
        <BreadcrumbItem>Home</BreadcrumbItem>
        <BreadcrumbItem>
          <a href="https://github.com/ccj-007/react-speed-ui">Application Center</a>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <a href="https://github.com/ccj-007/react-speed-ui">Application List</a>
        </BreadcrumbItem>
        <BreadcrumbItem>An Application</BreadcrumbItem>
        <Breadcrumb allSeparator={<span>-{">"}</span>}>
          <BreadcrumbItem>Home</BreadcrumbItem>
          <BreadcrumbItem>
            <a href="https://github.com/ccj-007/react-speed-ui">Application Center</a>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <a href="https://github.com/ccj-007/react-speed-ui">Application List</a>
          </BreadcrumbItem>
          <BreadcrumbItem>An Application</BreadcrumbItem>
        </Breadcrumb>
        <Breadcrumb>
          <BreadcrumbItem disabled>Home</BreadcrumbItem>
          <BreadcrumbItem disabled separator={<span>---{">"}</span>}>
            <a href="https://github.com/ccj-007/react-speed-ui">Application Center</a>
          </BreadcrumbItem>
          <BreadcrumbItem disabled separator={<span>-----{">"}</span>}>
            <a href="https://github.com/ccj-007/react-speed-ui">Application List</a>
          </BreadcrumbItem>
          <BreadcrumbItem disabled separator={<span>-----{">"}</span>}>
            An Application
          </BreadcrumbItem>
        </Breadcrumb>
      </>
    )
    expect(asFragment()).toMatchSnapshot()
  })
})