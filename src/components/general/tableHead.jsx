import React from 'react'

const TableHead = (props) => {
    const {head, className} = props
  return (
    <th className={className}>{head}</th>
  )
}

export default TableHead
