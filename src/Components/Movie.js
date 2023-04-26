import { Button, Card, Typography } from '@material-ui/core'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Mdata } from "../json/Data"
import { getallmovie, getmovie } from '../Action/Movieac'
import { useSelector, useDispatch } from 'react-redux'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import PlaylistAddIcon from '@material-ui/icons/PlaylistAdd';
import { Link } from 'react-router-dom'
import {Removemovie} from '../Action/Movieac'
import {Favourite} from '../Action/Movieac'
import { useNavigate } from 'react-router-dom'
import Cookies from 'js-cookie';



const Movie = () => {


    const dispatch = useDispatch()

    const [gdata, setgdata] = useState("")

    const [show, setshow]=useState(null)
 
    const navigate=useNavigate()

    const data = useSelector(state => state?.data?.data)

    const sdata = useSelector(state => state?.data?.search)

    console.log(data)




    const user=useSelector(state=>state?.data?.login)
     console.log(user)


    const filteredMovies = data?.data?.filter(movie =>

        movie.title.toLowerCase().startsWith(sdata.toLowerCase())
    );

    const isLoggedIn = JSON.parse(localStorage.getItem("isLoggedIn")) || false;


    console.log(data)

    useEffect(() => {

        dispatch(getallmovie())

    }, [])


    useEffect(() => {
        console.log(gdata)
        dispatch(getmovie(gdata))
       }, [gdata])



       useEffect(()=>{
           if(!isLoggedIn){

              navigate('/login')
              
           }

       },[isLoggedIn])

    return (





        <div >


            <div>


                <Button color='inherit' onClick={() => setgdata("Drama")}>Drama</Button>
                <Button color='inherit' onClick={() => setgdata("Sci-fic")}>Sci-fic</Button>
                <Button color='inherit' onClick={() => setgdata("Action")}>Action</Button>
                <Button color='inherit' onClick={() => setgdata("Crime")}>Crime</Button>

            </div>


            <div style={{ display: "flex", justifyContent: "flex-start", alignItems: "center", flexDirection: "row", flexWrap: 'wrap', height: "100%" }}>



                {


                    filteredMovies?.map((elm) => {
                       
                       
                        return (

                            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexDirection: "column", margin: "10px" }} >

                             
                                  <Card style={{backgroundColor:'inherit', color:"inherit", padding: '10px',  }} onMouseEnter={()=>setshow(elm.id)} onMouseLeave={()=>setshow(null)} >

                                  <Link to={`/movie/${elm.id}`}>

                                    <img src={elm.img} alt='movie img' style={{ width: "100%", height: '190px' }} />

                                    </Link>

                                    <Typography variant='h6' >{elm.title}</Typography>

                                    <Typography>12/12/2022</Typography>

                                    { show == elm.id && (<><Button onClick={()=>dispatch(Favourite(elm))}><FavoriteBorderIcon/></Button><Button><PlaylistAddIcon/></Button></>)    }
                           

                                </Card>
                              

                            </div>



                        )
                    })
                }







            </div>

        </div>


    )
}

export default Movie