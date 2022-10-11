import React from 'react';
import Table from './Table';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Button, Input, Space, PageHeader, Modal } from '../index';
import { defaultDataSource } from './data';

export default {
  title: '数据展示/Table 表格',
  component: Table,
  parameters: {
    docs: {
      description: {
        component: '### 表格',
      },
    },
  },
} as ComponentMeta<typeof Table>;

const defaultpaginationParams = {
  total: 6,
  defaultCurrent: 1,
  current: 1,
  defaultPageSize: 3,
  pageSize: 3,
};

/**
 * 展示面板
 */
const defaultTableTpl: ComponentStory<typeof Table> = args => {
  const [paginationParams] = React.useState(defaultpaginationParams);
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

  return (
    <>
      <PageHeader title='基本使用' />
      <Table dataSource={defaultDataSource} columns={columns} paginationParams={paginationParams}></Table>
    </>
  );
};

const customTableTpl: ComponentStory<typeof Table> = args => {
  const [dataSource, setDataSource] = React.useState(defaultDataSource);
  const [paginationParams, setPaginationParams] = React.useState(defaultpaginationParams);
  const [isModalVisible, setIsModalVisible] = React.useState(false);

  /** input 单元格 */
  const hanldeBlur = e => {
    let val = e.target.value;
    if (val.trim()) {
      let cloneData = [...dataSource];
      cloneData.forEach((item, index) => {
        if (item.key === source.key) {
          cloneData[index].name = val;
        }
      });
      setDataSource(cloneData);
    }
  };

  /** 编辑操作 单元格 */
  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleConfirm = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleDelete = key => {
    let result = dataSource.filter(item => item.key !== key);
    setDataSource(result);
    setPaginationParams({
      ...paginationParams,
      total: paginationParams.total - 1,
    });
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
      render: source => {
        if (!source) return;

        return <Input placeholder={source.name} onBlur={hanldeBlur} style={{ width: '200px' }} blurClear></Input>;
      },
    },
    {
      title: '年龄',
      dataIndex: 'age',
      key: 'age',
      render: source => {
        if (!source) return;
        return <Button>{source.age}</Button>;
      },
    },
    {
      title: '住址',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: '操作',
      dataIndex: 'edit',
      key: 'edit',
      render: source => {

        return (
          <>
            <Modal visible={isModalVisible} onConfirm={handleConfirm} onCancel={handleCancel}>
              <h2>我是{source.name}</h2>
            </Modal>
            <Space>
              <Button btnType='primary' onClick={showModal}>
                编辑
              </Button>
              <Button btnType='danger' onClick={() => handleDelete(source.key)}>
                删除
              </Button>
            </Space>
          </>
        );
      },
    },
  ];

  return (
    <>
      <PageHeader title='自定义表格' />
      <Table dataSource={dataSource} columns={columns} paginationParams={paginationParams}></Table>
    </>
  );
};

/**
 * 参数面板
 */
export const defaultTable = defaultTableTpl.bind({});
defaultTable.args = {};

export const customTable = customTableTpl.bind({});
customTable.args = {};
