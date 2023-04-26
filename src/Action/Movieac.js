import axios from "axios"

export const GETALLMOVIE="GETALLMOVIE"
export const GETMOVIE="GETMOVIE"
export const DARKMODE='DARKMODE'
export const SEARCHDATA="SEARCHDATA"
export const GETMOVIEBYID="GETMOVIEBYID"
export const GETMOVIEDATA="GETMOVIEDATA"
export const REMOVE ="REMOVE"

export const USERLOGIN="USERLOGIN"


export const LIKE_MOVIE = 'LIKE_MOVIE';
export const DISLIKE_MOVIE = 'DISLIKE_MOVIE';




export const getallmovie=()=>async(dispatch)=>{
  
    const response=await axios.get('http://localhost:7000/data')

      dispatch({type:GETALLMOVIE, payload:response})


}

export const getmovie=(data)=>async(dispatch)=>{
  
    const response=await axios.get(`http://localhost:7000/data?${data &&'genre='+data}`)
      dispatch({type:GETMOVIE, payload:response})


}

export const darkmode=()=>{
     return{
        type:DARKMODE,
        
     }

}

export const searchdata=(data)=>{
    return{
        type:'SEARCHDATA',
        payload:data
    }
}

export const getmoviebyid=(id)=>async(dispatch)=>{

       const response=await axios.get(`http://localhost:7000/data/${id}`)
       dispatch({type:GETMOVIEBYID, payload:response.data})
}

export const Favourite=(data)=>{
    return{
        type:GETMOVIEDATA,
        payload:data
    }
}

export const Removemovie=(id)=>{
    console.log(id); 
    return{

        type:REMOVE,
        payload:id
        
    }
}

export const userdata=(data)=>{
 
    return{
        type:USERLOGIN,
        Payload:data
    }
}


export const likeMovie = ( movieId,userId) => {
    return{
        type: LIKE_MOVIE,
        payload: { userId, movieId }
     

    }
  }
  
 export  const dislikeMovie = ( movieId,userId) => {
   
    return{

        type: DISLIKE_MOVIE,
        payload: { userId, movieId }
     

    }
  }
  