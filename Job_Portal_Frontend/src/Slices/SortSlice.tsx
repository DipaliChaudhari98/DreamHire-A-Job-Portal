import { createSlice } from '@reduxjs/toolkit'
import React from 'react'

const sortSlice=createSlice({
    name:'sort',
    initialState:{},
    reducers:{
        updateSort:(state,action)=>{
            state=action.payload;
            
            return state;
        },

        resetSort:(state)=>{
            state={};
            return state;
        }
    }
})

export const {updateSort,resetSort}=sortSlice.actions;
export default sortSlice.reducer;