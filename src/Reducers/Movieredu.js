import { GETALLMOVIE,GETMOVIE,DARKMODE,SEARCHDATA ,GETMOVIEBYID,GETMOVIEDATA,REMOVE,USERLOGIN,LIKE_MOVIE,DISLIKE_MOVIE} from "../Action/Movieac";



const initialState={


    data:[],
    toggle:false,
    search:"",
    movie:"",
    Favourite:[],  
    login:"" ,
   

    
    User:{    
        likes: 0,
        dislikes: 0,
        likesByUserIds: [],
        dislikesByUserIds: []
      },
     

}


const Moviereducer=(state=initialState,action)=>{

    const {type,payload}=action



    switch(type){

        case GETALLMOVIE:
            return{

                ...state, data:payload

            }

            case GETMOVIE:
                return{
                    ...state ,data:payload
                }


               case DARKMODE:
                return{
                    ...state, toggle: !state.toggle
                }  


                case SEARCHDATA:

                    return{

                        ...state,  search:payload

                    }



                case GETMOVIEBYID:


                    

                    return{
                        ...state, movie:payload


                    }    


                    case GETMOVIEDATA:


                    if(state.Favourite.includes(payload)){
                        alert("already add")
                    }else{

                    
                        return{
                            
                            ...state, Favourite:[...state.Favourite, payload]
                        }
                    }


                    case REMOVE :
                        console.log(payload)  
                        return{
                            ...state , Favourite:state.Favourite.filter((elm)=>elm.id!==payload)
                        }


                     case USERLOGIN:

                        return{
                            ...state, login:payload
                        }   



                        case LIKE_MOVIE: {

                            const { userId, movieId } = payload;

                            const data=state?.data?.map((elm)=>elm.id===movieId)
                           
                                   console.log(data)

                            if(data){

                            
                            if (!state.User.likesByUserIds.includes(userId)  &&   !state.User.dislikesByUserIds.includes(userId)) {
                            
                            
                                state.User.likes += 1;
                          
                                state.User.likesByUserIds.push(userId);
                          
                          
                            }
                        
                            return { ...state };

                        }

                          }




                          case DISLIKE_MOVIE: {
                         
                            const { userId, movieId } = payload;
                            

                            const data=state?.data?.map((elm)=>elm.id===movieId)

                            console.log(data)


                            if(data){

                            

                            if (!state.User.dislikesByUserIds.includes(userId) && !state.User.likesByUserIds.includes(userId) ) {
                              
                              
                              state.User.dislikes += 1;
                              state.User.dislikesByUserIds.push(userId);
                          
                          
                          
                            }


                            return { ...state };
                            }
                          }
                      


                      

                     

                     default:return state
    }

}

export default Moviereducer;