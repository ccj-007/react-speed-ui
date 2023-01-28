import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Table } from '../../index';
import { defaultDataSource } from '../data';

const paginationParams = {
  total: 6,
  defaultCurrent: 1,
  current: 1,
  defaultPageSize: 3,
  pageSize: 3,
};
const columns = [
  {
    title: 'ID',
    dataIndex: 'key',
    key: 'key',
  },
  {
    title: '姓名',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: '年龄',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: '住址',
    dataIndex: 'address',
    key: 'address',
  },
];

describe('test Table component', () => {
  it('should render', () => {
    const { asFragment } = render(
      <Table dataSource={defaultDataSource} columns={columns} paginationParams={paginationParams} />,
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
