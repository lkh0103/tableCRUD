import React from 'react'
import Search from 'antd/lib/input/Search'

export default function CRUDSearch(props: any) {
  return (
    <Search
      style={{ width: 300 }}
      placeholder="Search user"
      onSearch={(e) => props.onSearchUser(e)} />
  )
}
