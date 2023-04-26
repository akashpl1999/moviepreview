// import { configureStore } from "@reduxjs/toolkit";

// import Calreducer from './Reducers/Newreducer'
// import Weather from './Reducers/Weatherreducer'
// import votereducer from './Reducers/VoteReducer'


// const store=configureStore({
//     reducer:{
//           data:Calreducer,
//           Wea:Weather,
//           cdata:votereducer
    
//     }
// })

// export default store;


import { createStore ,applyMiddleware, compose} from "redux";

import rootreducer from "./Reducers";

import thunk from 'redux-thunk'

const initialState={}


const middleware=[thunk];


const store=createStore(

    rootreducer,
    initialState,

    compose (

        applyMiddleware(...middleware),
          window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
        )

)
export default store;