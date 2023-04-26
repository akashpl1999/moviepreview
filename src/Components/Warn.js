import React from 'react'
import { Link } from 'react-router-dom'

const Warn = () => {
  return (
 
 
     <div style={{fontSize:"18px", fontFamily:'serif', display:'flex', justifyContent:'center', alignItems:'center', position:'relative', top:"50%" }}>
        
        
        

        <Link style={{textDecoration:'none' }} to={'/reg'}> 

             <p style={{fontSize:"40px", fontFamily:'serif', display:'flex', justifyContent:'center', alignItems:'center', position:'relative', top:"50%"}}>
           
             ...Register or Login
          
             </p>

           </Link>  




    </div>


     )
}

export default Warn