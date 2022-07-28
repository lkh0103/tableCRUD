import React, { useEffect, useState } from 'react'
import { useCRUD } from '../hooks/CRUDProvider'
import CURDPagiantion from '../partials/Pagination'
import SearchCRUD from '../partials/Search'
import { CRUDTable } from '../partials/Table'

export default function ListPage() {
  const [inputsearch, setInputSearch] = useState<any>('');
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
      <SearchCRUD  />
      <CRUDTable columns={columns} dataSource={data} />
      <CURDPagiantion />
      <br /><br />
      {/* <Title />
        <Search />
        <Table />
        <Pagination />
        <SelectSizeTable /> */}
    </div>
  )
}
