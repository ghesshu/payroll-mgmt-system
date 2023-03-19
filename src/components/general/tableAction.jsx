import React from 'react'

import trash from '../../assets/delete.png'
import view from '../../assets/view.png'
import edit from '../../assets/edit.png'


const TableAction = () => {
  return (
    
    <td className='text-left p-6 flex items-center justify-between'>
    <button><img src={view} alt="" className='h-5'/></button>
    <button><img src={edit} alt="" className='h-5'/></button>
    <button><img src={trash} alt="" className='h-5'/></button>
    </td>
  )
}

export default TableAction
