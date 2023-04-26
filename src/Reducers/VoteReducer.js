import { createReducer } from "@reduxjs/toolkit";

import{VOTEDATASUCCESS,VOTEDATAFAIL,CANDADD} from '../Action/Voteaction';



let initialState ={
     
   data:[],
   vote:null,


}


const votereducer=createReducer(initialState,{

     [CANDADD]:(state,action)=>{
         const newcand={
            'id':new Date.now(),
            'name':action.payloa
         }
         state.data.push(newcand)

     }

   


 
})

export default votereducer;