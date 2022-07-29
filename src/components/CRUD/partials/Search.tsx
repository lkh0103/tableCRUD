// import React, { useRef } from 'react'
// import Search from 'antd/lib/input/Search'
// import { useSearchParams } from 'react-router-dom';

// export default function SearchCRUD(props: any) {

//   const input = useRef<any>();
//   const [searchParam, setSearchParam] = useSearchParams();
//   const handleSearch = () => {

//     setSearchParam({ value: `${input.current.value}` })
//     console.log(input.current.value);

//   }

//   return (
//     <div>
//       <input ref={input} />
//       <button
//         onClick={handleSearch}
//       >Search</button>
//     </div>
//   )
// }

import React from 'react'

export default function Search() {
  return (
    <div>Search</div>
  )
}
