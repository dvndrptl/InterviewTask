import React from 'react'
import { useState } from 'react'
import {useDispatch} from "react-redux"
import { addData } from '../slices/tableSlice'


export default function TableInput() {
    const [name, setName] = useState()
    const [id, setId] = useState(1)
    const dispatch = useDispatch()


    const handleClick = () => {
        setId(id + 1)
        dispatch(addData({name, id}))

    }


    return (
        <div>
            <br />
            <br />
            <br />

            <input type="text" placeholder='name' onChange={(e) => {
                setName(e.target.value)
            }} />
            <button onClick={handleClick} >Add</button>

            <h3>{name}</h3>


        </div>
    )
}
