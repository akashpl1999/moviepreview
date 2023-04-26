import React, { useState } from 'react'
import { Typography, Card, Button, } from '@material-ui/core'

import { Link } from 'react-router-dom'

import { useDispatch, useSelector } from 'react-redux'
import DeleteIcon from '@material-ui/icons/Delete';
import {Removemovie} from '../Action/Movieac'

const Fav = () => {


   

    const [Showbutton,setshowbutton]=useState(null)

    const fdata = useSelector(state => state.data.Favourite)

    console.log(fdata)

    const dispatch=useDispatch()


   

    return (




        <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: "flex-start", flexDirection: 'row', flexWrap: 'wrap', margin: '10px' }}>

            {
                fdata.map((elm) => {
                    return (
                        <div >

                            <Card style={{ backgroundColor: 'inherit', color: "inherit", padding: '10px', width: "250px", }} onMouseEnter={() => setshowbutton(elm.id)}
                                 
                                 onMouseLeave={() => setshowbutton(null)}>

                                <Link to={`/movie/${elm.id}`}>
                              
                                <img src={elm.img} style={{ width: '100%', height: "280px" ,position:'relative'}}/>
                                </Link>
                                
                                 {
                                   
                                   Showbutton== elm.id &&  <Button onClick={()=>dispatch(Removemovie(elm.id))}><DeleteIcon /></Button> 

                                 }

                                
                                
                            

                            </Card>
                               
                              


                        </div>
                    )
                })
            }






        </div>


    )
}

export default Fav