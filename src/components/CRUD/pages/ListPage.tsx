import React, { useContext, useEffect, useState } from 'react'
import { useCRUD } from '../hooks/CRUDProvider'
import CURDPagiantion from '../partials/Pagination'
import Pagination from '../partials/Pagination'
import SearchTable from '../partials/Search'
import SelectSizeTable from '../partials/SelectSizeTable'
import Table, { CRUDTable } from '../partials/Table'
import Title from '../partials/Title'

export default function ListPage() {
  // const [inputsearch, setInputSearch] = useState<any>('');
  const [data, setData] = useState<any[]>()
  const [params, setParams] = useState<any>({
    page: 1,
    limt: 10
  })
  const [pagination, setPagination] = useState<any>({})
  const {
    fetchList,
    columns
  } = useCRUD()

  const loadData = () => {
    fetchList(params)
      .then(response => {
        console.log('xx', response)
        const { rows, ...pagination } = response
        setData(rows)
        setPagination(pagination)
      })
      .catch(e => {
        console.log(e)
      })
  }

  useEffect(() => {
    loadData()
  }, [params])

  const onPageChange = (page: number) => {
    setParams({
      ...params,
      page
    })
  }

  useEffect(() => {
   setTimeout(() => {
    onPageChange(5)
   }, 5000) 
  }, [])

  return (
    <div>
      {/* <input value={inputsearch} onChange={e=>setInputSearch(e.target.value)}/> */}
      <button onClick={() => { console.log(1) }}>Search</button>
      <br /><br />
      <CRUDTable columns={columns} dataSource={data} />
      <CURDPagiantion />
      <br /><br />
      {/* <button onClick={contextListpage.getData}>Click Data</button>
      <Table /> */}

      {/* <Title />
        <Search />
        <Table />
        <Pagination />
        <SelectSizeTable /> */}
    </div>
  )
}
