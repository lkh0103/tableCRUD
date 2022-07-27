import axios from "axios";
import React, {
    createContext,
    PropsWithChildren,
    useCallback,
    useContext,
    useState,
} from "react";
import { CRUDProps, FetchList } from "..";
import { api, EMethod } from "../../../hooks/useRequest";

interface CRUDContext {
    fetchList: FetchList
    columns: any[]
}

export const CRUDContext = createContext<CRUDContext>({} as any);

export default function CRUDProvider(props: PropsWithChildren<CRUDProps>) {
    const [list, setList] = useState<any>();
    const [title, setTitle] = useState<any>();

    const fetchList = (params: any) => {
        if (typeof props.fetchList === 'function') {
            return props.fetchList(params)
        }
        // TODO self handler
        return fetch(`/api/${props.name}`).then(result => result.json())
    }

    const getData = (userId = Number) => {

        api(EMethod.GET, `https://jsonplaceholder.typicode.com/posts?${userId}`).then(
            (res) => {
                setList(res.data); console.log(res.error);
            }
        );
    };

    const getTitle = () => {
        setTitle(Object.keys(list[0]));
    };

    const showList = () => {
        {
            list && getTitle();
        }
        console.log(title);
    };

    const createList = () => {
        getData();
    };

    const updateList = () => {
        getData();
    };

    const DeleteList = () => {
        getData();
    };

    const contextvalueCRUD = {
        list,
        title,
        fetchList,
        showList,
        updateList,
        DeleteList,
        getData,
        createList,
        columns: props.columns
    };

    return (
        <CRUDContext.Provider value={contextvalueCRUD}>
            {props.children}
        </CRUDContext.Provider>
    );
}

export const useCRUD = () => useContext(CRUDContext)