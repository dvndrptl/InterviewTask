import { createSlice } from "@reduxjs/toolkit";

export const Table = createSlice({
    name: "usedata",
    initialState: {
        state:[]
        
    },
    reducers:{
        addData: (state, action)=>{
state.state.push(action.payload)

        }
    }
})

export const {addData} = Table.actions
export default Table.reducer