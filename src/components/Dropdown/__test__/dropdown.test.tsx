import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Dropdown, Button } from '../../index';

const menu = [
  {
    key: '1',
    label: <div>我是默认的</div>,
  },
  {
    key: '2',
    label: (
      <a target='_blank' rel='noopener noreferrer' href='https://www.aliyun.com'>
        2nd menu item
      </a>
    ),
  },
  {
    key: '3',
    label: (
      <a target='_blank' rel='noopener noreferrer' href='https://www.luohanacademy.com'>
        3rd menu item
      </a>
    ),
  },
];

describe('test Dropdown component', () => {
  it('should render', () => {
    const { asFragment } = render(
      <Dropdown menu={menu}>
        <Button>打开</Button>
      </Dropdown>,
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
