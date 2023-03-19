import React from 'react'

const TableData = (props) => {
    const {data} = props
  return (
    <td className='text-left p-8 border-l-2'>{data}</td>
  )
}

export default TableData
