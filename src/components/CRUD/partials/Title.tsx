// import React from 'react'

// export default function Title(props: any) {
//   return (
//     <div>
//       {props.titlePage}
//     </div>
//   )
// }


import React from 'react'
import { useParams } from 'react-router'

export default function Title() {
  const params = useParams()
  switch (params.id) {
    case 'create':
      return <h2>Create</h2>
    case undefined:
      return <h2>Home</h2>
    default:
      return <h2>Update</h2>
  }
}

