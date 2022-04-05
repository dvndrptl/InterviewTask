import React from 'react'
import { useSelector } from 'react-redux'

export default function TablePrint() {
    const data = useSelector(state=>state.tableData.state)
  return (
    <div>
{console.log(data)}
    </div>
  )
}
