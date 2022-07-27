import React, { useContext, useRef, useState } from 'react';
import 'antd/dist/antd.css';
import { SearchOutlined } from '@ant-design/icons';
import { Button, Input, Space, Table } from 'antd';
import Highlighter from 'react-highlight-words';
import { ColumnsType } from 'antd/es/table';
import { CRUDContext } from '../hooks/CRUDProvider';
import { useParams } from 'react-router-dom';

interface DataType {
  key: React.Key;
  name: string;
  age: number;
  address: string;
}

export default function SearchTable() {
  const contextSearch = useContext(CRUDContext)
  const [searchText, setSearchText] = useState('');
  const [searchedColumn, setSearchedColumn] = useState('');
  const searchInput = useRef(null);

  const handleSearch = (selectedKeys: any, confirm: any, dataIndex: any) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };

  const getColumnSearchProps = (dataIndex: any) => ({
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm }: any) => (
      <div
        style={{
          padding: 8,
        }}
      >
        <Input
          ref={searchInput}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
          onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
          style={{
            marginBottom: 8,
            display: 'block',
          }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{
              width: 90,
            }}
          >
            Search
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered: any) => (
      <SearchOutlined
        style={{
          color: filtered ? '#1890ff' : undefined,
        }}
      />
    ),
    onFilter: (value: any, record: any) =>
      record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
    render: (text: any) =>
      searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{
            backgroundColor: '#ffc069',
            padding: 0,
          }}
          searchWords={[searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ''}
        />
      ) : (
        text
      ),
  });

  const columns: ColumnsType<DataType> = [
    {
      title: 'user Id',
      dataIndex: 'userId',
      key: 'userId',
      width: 30,
      ...getColumnSearchProps('namuserIde'),
    },
    {
      title: 'Id',
      dataIndex: 'id',
      key: 'id',
      width: 30,
      ...getColumnSearchProps('id'),
    },
    {
      title: 'Title',
      dataIndex: 'title',
      key: 'title',
      width: 100,
      ...getColumnSearchProps('title'),
    },
    {
      title: 'body',
      dataIndex: 'body',
      key: 'body',
      width: 150,
      ...getColumnSearchProps('body'),
    },
    {
      title: 'Action',
      key: 'operation',
      fixed: 'right',
      width: 30,
      render: () => <a href=''>action</a>,
    },
  ];

  const id = useParams();

  return (
    <div>
      <div>Search Id: {JSON.stringify(id)} </div><br />
      <Table columns={columns} dataSource={[]} scroll={{ x: 1500, y: 550 }} />
    </div>
  )
}

