
import { createAction } from "@reduxjs/toolkit";
import {LOAD_ANSWER, LOAD_BUTTONS, LOAD_CLEAR, LOAD_BACKSPACE} from "./Type"



  
export const loadButtons = createAction(LOAD_BUTTONS,(number)=>{
    return {

        type: LOAD_BUTTONS,
        payload:number
  
    }
})

export const loadAnswer = createAction(LOAD_ANSWER,(number)=>{
    return {

        type: LOAD_ANSWER,
        payload:number
  
    }
})

export const loadClear = createAction(LOAD_CLEAR,(number)=>{
    return {

        type: LOAD_CLEAR,
        payload:number
  
    }
})

export const loadBackspace = createAction(LOAD_BACKSPACE,(number)=>{
   
    return {


        type: LOAD_BACKSPACE,
        payload:number
  

    }
})

    
// export const loadAnswer = (number) =>{
//     return{
//         type:LOAD_ANSWER,
//         payload:number
//     }
// }

// export const loadClear = (number) =>{
//     return{
//         type:LOAD_CLEAR,
//         payload:number
//     }
// }

// export const loadBackspace = (number) =>{
//     return{
//         type:LOAD_BACKSPACE,
//         payload:number
//     }
// }

