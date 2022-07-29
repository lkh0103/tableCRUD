import React from "react"
import CRUD from "../components/CRUD"
import { listData } from "../components/CRUD/mock-data"
import { Avatar, Image } from "antd"

export function DemoCRUDPage() {
    // demo
    const fetchList = (params: any) => {
        return Promise.resolve(listData)
    }

    const columns: any = [
        {
            title: 'Id',
            dataIndex: 'id',
            key: 'id'
        },
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name'
        },
        {
            title: 'Age',
            dataIndex: 'age',
            key: 'age'
        },
        {
            title: 'Address',
            dataIndex: 'address',
            key: 'address'
        },
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            render: (value: any, record: any) => {
                return <Avatar src={value} />
            }
        }
    ]

    return (
        <CRUD
            name="demo"
            fetchList={fetchList}
            columns={columns}
        />
    )
}