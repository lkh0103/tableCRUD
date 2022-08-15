import { Button } from 'antd'
import React, { useCallback, useEffect } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { useCRUD } from '../hooks/CRUDProvider'
import CURDPagiantion from '../partials/Pagination'
import CRUDSearch from '../partials/Search'
import { CRUDTable } from '../partials/Table'
import Title from '../partials/Title'

interface ListPageProps {
  renderTitle: (ctx: any) => React.ReactNode
}

export default function ListPage(props: ListPageProps) {
  const { columns, loadData, pagination, params, setParams, data } = useCRUD();
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(loadData, [params]);

  const onPageChange = (page: number, pageSize: number) => {
    setSearchParams({ page: String(page) })
    setParams({
      ...params, page, limit: pageSize
    });
  };

  const onSearch = (search: string, page: number) => {
    setSearchParams({ search: search })
    setParams({
      ...params, searchParams, page, search
    });
  };

  const renderTitle = useCallback(() => {
    if (typeof props.renderTitle === 'function') {
      return props.renderTitle('List Page')
    }
    return <Title />
  }, [props.renderTitle])

  return (
    <div>
      {renderTitle()}

      <Button style={{ float: 'right' }}>
        <Link to="/demo/create">Create User</Link>
      </Button> <br /><br />

      <CRUDSearch onSearchUser={onSearch} /> <br /><br />

      <CRUDTable columns={columns} dataSource={data} /> <br /><br />

      {
        pagination.total > 0 && (
          <CURDPagiantion
            defaultCurrent={pagination.page}
            total={pagination.total * pagination.totalPages}
            pageSize={pagination.total}
            onPageChange={onPageChange}
          />
        )
      }
    </div>
  )
}
