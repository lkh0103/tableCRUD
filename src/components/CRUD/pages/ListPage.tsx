import { Button } from 'antd'
import React, { useCallback, useEffect } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { useCRUD } from '../hooks/CRUDProvider'
import CURDPagiantion from '../partials/Pagination'
import CRUDSearch from '../partials/Search'
import { CRUDTable } from '../partials/Table'
import Title from '../partials/Title'

export default function ListPage(props: any) {
  const { columns, loadData, pagination, params, setParams, data } = useCRUD();
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(loadData, [params]);

  const onPageChange = (page: any, pageSize: any) => {
    setSearchParams({ searchPage: page })
    setParams({
      ...params,
      page,
      limit: pageSize
    });
  };

  const onSearch = (search: string, page: number) => {
    setSearchParams({ search: search })
    setParams({
      ...params,
      searchParams,
      page,
      search
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
      </Button><br /><br /><br />
      <CRUDSearch onSearchUser={onSearch} />
      <CRUDTable columns={columns} dataSource={data} />
      {pagination.total > 0 && (
        <CURDPagiantion
          defaultCurrent={pagination.page} // Trang mặc định
          total={pagination.total * pagination.totalPages} // tổng all phần tử
          pageSize={pagination.total} // bao nhiêu phần tử trên 1 trang sau khi ng dùng chỉnh sửa
          onPageChange={onPageChange} // chuyển phân trang
        />
      )} <br /><br />
    </div>
  )
}
