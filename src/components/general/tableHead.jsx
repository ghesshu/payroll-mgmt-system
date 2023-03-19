import React from 'react'

const TableHead = (props) => {
    const {head} = props
  return (
    <th className='text-left p-8 border-l-2'>{head}</th>
  )
}

export default TableHead
