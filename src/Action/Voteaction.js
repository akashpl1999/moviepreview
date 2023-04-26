

import { createAction } from "@reduxjs/toolkit";

export const  VOTEDATASUCCESS='DATASUCCESS';
export const CANDADD='CANDADD'
export const VOTEDATAFAIL='DATAFAIL';




export const Candadd=createAction(CANDADD,(data)=>{

    return{
         payload:data
    }
})




export const voteadd=createAction(VOTEDATASUCCESS,(data)=>{
    return{
         payload:data
    }
})


export const votefail=createAction(VOTEDATAFAIL,(data)=>{
    return{
         payload:data
    }
})
