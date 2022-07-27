import { Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import React, { useContext } from 'react'
import { CRUDContext } from '../hooks/CRUDProvider';
import ListPage from '../pages/ListPage';

interface DataType {
  key: React.Key;
  name: string;
  age: number;
  address: string;
}

const columns: ColumnsType<DataType> = [
  {
    title: 'user Id',
    width: 30,
    dataIndex: 'userId',
    key: 'name',
    fixed: 'left',
  },
  {
    title: 'id',
    width: 30,
    dataIndex: 'id',
    key: 'age',
    fixed: 'left',
  },
  {
    title: 'title',
    dataIndex: 'title',
    key: '1',
    width: 100,
  },
  {
    title: 'body',
    dataIndex: 'body',
    key: '2',
    width: 150,
  },
  {
    title: 'Action',
    key: 'operation',
    fixed: 'right',
    width: 30,
    render: () => <a href=''>action</a>,
  },
];

export default function TableList(props: any) {
  const contextTable = useContext(CRUDContext)
  return (
    <Table columns={columns} dataSource={[]} scroll={{ x: 1500, y: 550 }} />
  )
}
export function CRUDTable(props: any) {
  return (
    <Table columns={props.columns} dataSource={props.dataSource} pagination={false} />
  )
}
