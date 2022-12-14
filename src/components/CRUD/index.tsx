import React, { useCallback } from 'react'
import { useParams } from 'react-router-dom'
import CRUDProvider from './hooks/CRUDProvider'
import CreatePage from './pages/CreatePage'
import ListPage from './pages/ListPage'
import UpdatePage from './pages/UpdatePage'
/*
list page: /
create page: /create
update page: /:id
*/
type FetchListParams = {
    limit: number
    page: number
    search: string
}

interface ListResult {
    rows: any[]
    page: number
    limit: number
    total: number
    totalPages: number
}

export type FetchList = (params: Partial<FetchListParams>) => Promise<ListResult>
export interface CRUDProps {
    name: string
    fetchList?: FetchList
    createUser: (params: any) => any
    updateUser: (params: any) => any
    removeUser: (id: string) => any
    columns: any[]
    formSchema?: any
    dataEdit: any
    renderTitle(ctx: any): React.ReactNode
    formComponent?: (onChange: any, data: any) => void;
    onCreated: any
    onUpdated: any
    onRemove: any
}

export default function CRUD(props: CRUDProps) {

    const params = useParams()
    const renderContent = useCallback(() => {
        switch (params.id) {
            case 'create':
                return <CreatePage
                    formSchema={props.formSchema}
                    formComponent={props.formComponent} />
            case undefined:
                return <ListPage renderTitle={props.renderTitle} />
            default:
                return <UpdatePage
                    dataEdit={props.dataEdit}
                    formComponent={props.formComponent} />
        }
    }, [params.id])

    return (
        <CRUDProvider {...props}>
            {/* <h1>{props.name}</h1> */}
            {renderContent()}
        </CRUDProvider>
    )
}
