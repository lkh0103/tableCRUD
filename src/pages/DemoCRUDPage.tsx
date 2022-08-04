import React from "react"
import CRUD from "../components/CRUD"
import { Avatar, Image } from "antd"
import { Link } from "react-router-dom"
import { create, list, update } from "../libs/DataStore"

export function DemoCRUDPage() {
    // demo
    const fetchList = (params: any) => {
        // console.log('call', params)
        const data = list(params)
        return Promise.resolve(data)
    }

    const createApi = (params: any) => {
        const response = create(params)
        console.log(response);
        return Promise.resolve(response)
    }

    const updateApi = (params: any) => {
        const resUpdateApi = update(params)
        console.log(resUpdateApi)
        return Promise.resolve(resUpdateApi)
    }

    const columns: any = [
        {
            title: 'id',
            dataIndex: 'id',
            key: 'id'
        },
        {
            title: 'username',
            dataIndex: 'username',
            key: 'id'
        },
        {
            title: 'email',
            dataIndex: 'email',
            key: 'id'
        },
        {
            title: 'registeredAt',
            dataIndex: 'registeredAt',
            key: 'age'
        },
        {
            title: 'avatar',
            dataIndex: 'avatar',
            key: 'avatar',
            render: (value: any, record: any) => {
                return <Image src={value} />
            }
        },
        {
            title: 'Action',
            dataIndex: 'name',
            key: 'name',
            render: () => <Link to='/demo/update'>Edit</Link>
        }
    ]

    const schema = null
    
    return (
        <CRUD
            name="demo"
            fetchList={fetchList}
            createAPI={createApi}
            updateUser={updateApi}
            columns={columns}
            formSchema={schema}
        />
    )
}