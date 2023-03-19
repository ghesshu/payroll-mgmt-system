import React from 'react'

const TableData = (props) => {
    const {data, className} = props
  return (
    <td className={className}>{data}</td>
  )
}

export default TableData
