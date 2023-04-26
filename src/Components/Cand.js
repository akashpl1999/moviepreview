import React, { useState } from 'react'
import { useDispatch ,useSelector} from 'react-redux'
import {Candadd} from '../Action/Voteaction'
const Cand = () => {


    const [name, setname]=useState('')
    const dispatch=useDispatch()

    const canddata=useSelector(state=>state.cdata)

    const handlesubmit=()=>{
        dispatch(Candadd(name))
    }



    return (
        <div>


            <form>


                <input type="text" placeholder='candidate name' onChange={(e) => setname(e.target.value)} style={{ padding: '8px', width: "200px" }} />

                <Button  variant='outlined'  onClick={handlesubmit} >submit</Button>


            </form>





        </div>
    )
}

export default Cand