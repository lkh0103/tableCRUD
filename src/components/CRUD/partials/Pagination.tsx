import React from 'react'
import { Pagination } from 'antd'

export default function CURDPagiantion() {
  const onPageChange = (page: number) => {
    console.log(page)
  }
  return (
    <Pagination onChange={onPageChange}/>
  )
}
