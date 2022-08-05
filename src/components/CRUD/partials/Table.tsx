import React from 'react'
import { Table } from 'antd';

export function CRUDTable(props: any) {
  return (
    <Table 
    columns={props.columns} 
    dataSource={props.dataSource}
     pagination={false} scroll={{ x: 1500, y: 550 }} 
     rowKey='id'
     />
  )
}
