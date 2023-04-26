import { createReducer } from "@reduxjs/toolkit";
import { DATASUCCESS,DATAFAIL } from "../Action/Weather";

 

const initialState={
    data:[],
    error: null,
    loading:false
}


const weatherred=createReducer(initialState,{
  
     [DATASUCCESS]:(state,action)=>{
         state.data=action.payload;
     },

     [DATAFAIL]:(state,action)=>{
        state.data=action.payload;
     }





})

export default weatherred;