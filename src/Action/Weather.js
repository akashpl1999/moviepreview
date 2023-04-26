import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'
export const DATASUCCESS="DATASUCCESS";
export const DATAFAIL="DATAFAIL";



export const Weatherdata=async(dispatch,name)=>{
    console.log(name)
    console.log(`https://api.openweathermap.org/data/2.5/weather?${name && 'q='+name+'&'}appid=64950f9c455d6d4662a8c9a5e4e6a9ff`)

  
   try{
  
    const reponse=await fetch(`https://api.openweathermap.org/data/2.5/weather?${name && 'q='+name+'&'}appid=64950f9c455d6d4662a8c9a5e4e6a9ff `)
  
    const data= await reponse.json()

   dispatch({type:DATASUCCESS, payload:data})
      
   }catch(err){
    
    dispatch({type:DATAFAIL,payload:err})
   }


}


