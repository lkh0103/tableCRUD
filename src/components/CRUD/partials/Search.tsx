import React, { useState } from 'react'
import Search from 'antd/lib/input/Search'
import { useCRUD } from '../hooks/CRUDProvider';

export default function SearchCRUD(props: any) {

  const handleSearch = (params: any) => {
    console.log(params);
  }

  return (
    <Search onSearch={handleSearch}/>
  )
}