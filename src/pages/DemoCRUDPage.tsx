import React, { useCallback, useState } from "react"
import CRUD from "../components/CRUD"
import { Avatar, Image } from "antd"
import { Link, useParams } from "react-router-dom"
import { create, findId, list, remove, update } from "../libs/DataStore"

export function DemoCRUDPage() {
    const [dataEdit, setDataEdit] = useState<any>();
    // demo
    const fetchList = (params: any) => {
        // console.log('call', params)
        const data = list(params)
        return Promise.resolve(data)
    }

    const createApi = (params: any) => {
        const response = create(params)
        console.log('success', response)
        return Promise.resolve(response)
    }

    const updateApi = (params: any) => {
        const resUpdateApi = update(params)
        console.log(resUpdateApi)
        return Promise.resolve(resUpdateApi)
    }

    const removeApi = (id: string) => {
        const delApi = remove(id)
        console.log(delApi);
        return Promise.resolve(delApi)
    }

    const columns: any = [
        {
            title: 'id',
            dataIndex: 'id',
            key: 'id',
            width: "15%",
        },
        {
            title: 'username',
            dataIndex: 'username',
            key: 'id',
            width: "15%",
        },
        {
            title: 'email',
            dataIndex: 'email',
            key: 'id',
            width: "18%",
            render: (value: any) => {
                return <p>{'@' + value}</p>
            }
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
            width: "10%",
            render: (value: any, record: any) => {
                return <Image src={value} />
            }
        },
        {
            title: 'Edit',
            width: "5%",
            render: (value: any, index: number) => (
                <Link to={`/demo/edit`} onClick={() => handleEdit(value)}>
                    Edit
                </Link>
            ),
        },
    ]

    const handleEdit = (data: any) => {
        const response = findId(data.id);
        setDataEdit(response);
        return Promise.resolve(response);
    };

    const params = useParams()
    const titleCRUD = useCallback(() => {
        switch (params.id) {
            case 'create':
                return <h1>Create</h1>
            case undefined:
                return <h1>Home</h1>
            default:
                return <h1>Update</h1>
        }
    }, [params.id])

    const schema = null

    return (
        <CRUD
            name="demo"
            fetchList={fetchList}
            createUser={createApi}
            updateUser={updateApi}
            removeUser={removeApi}
            columns={columns}
            formSchema={schema}
            dataEdit={dataEdit}
            titleCRUD={titleCRUD}
        />
    )
}