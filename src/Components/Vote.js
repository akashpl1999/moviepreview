import { Button } from '@material-ui/core'
import React, { useState } from 'react'
import { data } from '../json/vote'


const Vote = () => {
  
    const [name, setname]=useState('')
  
    return (


      <div style={{border:'1px solid black', width:"300px", margin:" 20px auto"}}>


               



           

           <h3>   voting List </h3>

        {
            data.map((elm)=>{

                return(
                    <>

                   
                      <div style={{display:'flex', justifyContent:"center", alignItems:"center",}}>

                       <p style={{color:'red', font:"20px"}}>  Name: {elm.name}</p>


                        <Button variant='outlined' style={{margin:"20px", backgroundColor:"lightgray"}}> vote</Button>

                      </div>
                    
                    
                    
                    </>
                )



            })
        }






    </div>


  )
}

export default Vote