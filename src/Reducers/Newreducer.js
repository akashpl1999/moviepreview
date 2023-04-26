
import { LOAD_ANSWER,LOAD_BUTTONS,LOAD_CLEAR,LOAD_BACKSPACE } from "../Action/Type";

let initialState ={
    number:'',
    ans:'',
  
}


const Calculaterreducer=(state=initialState,action)=>{

       const {type,payload}=action

       switch(type){
        case LOAD_BUTTONS:


            return{
                ...state, 
                 number:state.number.concat(payload)

            }


          case  LOAD_ANSWER:
            try{
                return {...state, number:eval(state.number).toString(),   }  //number:eval(state.number).toString()
    
            }catch(err){
                return {...state, ans:'error' }
    
            }
       

           case  LOAD_CLEAR:
              return {...state, 
                number:'' ,ans:'' 
            }
 
             
           
            case LOAD_BACKSPACE:
                return {...state, 
                     number:(state.number).slice(0,-1), ans:''
                    
                    }
   


              default:return state  

    
       }

         
    }


export default Calculaterreducer;













// import { createReducer } from "@reduxjs/toolkit";

// import { LOAD_ANSWER,LOAD_BUTTONS,LOAD_CLEAR,LOAD_BACKSPACE } from "../Action/Type";

// let initialState ={
//     number:'',
//     ans:'',
  
// }


// const Calculaterreducer=createReducer(initialState,{

//     [LOAD_BUTTONS]:(state,action)=>{
//         return {...state,  number:state.number.concat(action.payload) }
//     },

//     [LOAD_ANSWER]:(state,action)=>{
//         try{
//             return {...state, number:eval(state.number).toString(),   }  //number:eval(state.number).toString()

//         }catch(err){
//             return {...state, ans:'error' }

//         }
//     },

//     [LOAD_CLEAR]:(state,action)=>{
//         return {...state, number:'',ans:'' }
//     },


//     [LOAD_BACKSPACE]:(state,action)=>{
//         return {...state,  number:(state.number).slice(0,-1), ans:'' }
//     },

// }



// )

// export default Calculaterreducer;