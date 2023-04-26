import { combineReducers } from "redux";


import Moviereducer from "./Movieredu";

import Calureducer from './Newreducer'
const rootreducer=combineReducers({

      data:Moviereducer,
      
      cal:Calureducer

})

export default rootreducer;