import React, { useState } from "react"
import CRUD from "../components/CRUD"
import { Avatar, Image, message } from "antd"
import { Link } from "react-router-dom"
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
        console.log('response', response)
        if (response.username && response.avatar && response.email && response.password && response.registeredAt) {
            message.success('Data Create "Success"');
        }
        return Promise.resolve(response)
    }

    const updateApi = (params: any) => {
        const resUpdateApi = update(params)
        console.log(resUpdateApi)
        if (resUpdateApi.id) {
            message.success('Data Update "Success"')
        }
        return Promise.resolve(resUpdateApi)
    }

    const removeApi = (id: string) => {
        const delApi = remove(id)
        console.log(delApi);
        if (delApi.id) {
            message.success('Data Delete "Success"')
        } else {
            message.error('Not Found User')
        }
        return Promise.resolve(delApi)
    }

    const columns: any = [
        {
            title: 'id',
            dataIndex: 'id',
            key: 'id',

        },
        {
            title: 'username',
            dataIndex: 'username',
            key: 'id',
        },
        {
            title: 'email',
            dataIndex: 'email',
            key: 'id',
            render: (value: any) => {
                return <p>{'@' + value}</p>
            }
        },
        {
            title: 'registeredAt',
            dataIndex: 'registeredAt',
            key: 'age',
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
    }

    // const schema = {
    //     title: "Todo",
    //     type: "object",
    //     required: ["title"],
    //     properties: {
    //         title: { type: "string", title: "Title", default: "A new task" },
    //         done: { type: "boolean", title: "Done?", default: false }
    //     }
    // };

    const schema = null

    const onCreated = () => {
        console.log('1');
    }

    const onUpdated = () => {
        console.log('2');
    }

    const onRemove = () => {
        console.log('3');
    }


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
            renderTitle={(ctx: any) => <h1>{ctx}</h1>}
            onCreated={onCreated}
            onUpdated={onUpdated}
            onRemove={onRemove}
        // formComponent={(onChange, data) => (
        //     <TestFormEdit onChange={onChange} data={data} />
        // )}
        />
    )
}