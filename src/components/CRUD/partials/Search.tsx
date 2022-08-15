import React from 'react'
import Search from 'antd/lib/input/Search'

interface CRUDSearch {
  onSearchUser: (search: string, page: number) => void
}

export default function CRUDSearch(props: any) {
  return (
    <Search
      style={{ width: 300 }}
      placeholder="Search user"
      onSearch={(search, page) => props.onSearchUser(search, page)} />
  )
}
