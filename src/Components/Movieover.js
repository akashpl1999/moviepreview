import { Avatar, Badge, Button, Card, Divider, Grid, Typography } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import { getmoviebyid } from '../Action/Movieac'
import { useDispatch, useSelector } from 'react-redux';
import { CircularProgress } from '@material-ui/core';

import FavoriteIcon from '@material-ui/icons/Favorite';
import PlaylistAddIcon from '@material-ui/icons/PlaylistAdd';
import AddToQueueIcon from '@material-ui/icons/AddToQueue';
import StarIcon from '@material-ui/icons/Star';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbDownAltIcon from '@material-ui/icons/ThumbDownAlt';
import { Favourite } from '../Action/Movieac'
import { likeMovie, dislikeMovie } from '../Action/Movieac'
import Cookies from 'js-cookie';



const Movieover = () => {



    const { movieid } = useParams()

    const [isHovering1, setIsHovering1] = useState(false);
    const [isHovering2, setIsHovering2] = useState(false);
    const [isHovering3, setIsHovering3] = useState(false);
    const [isHovering4, setIsHovering4] = useState(false);
    const [isHovering5, setIsHovering5] = useState(false);
    const [isHovering6, setIsHovering6] = useState(false);


    const [like, setlike] = useState(0)
    const [dislike, setdislike] = useState(0)

    const [likearr, setlikearr] = useState([])

    const [dislikearr, setdislikearr] = useState([])



    const dispatch = useDispatch()

    console.log(movieid)

    const moviedata = useSelector(state => state?.data?.data)


    const data = useSelector(state => state.data.movie)

    console.log(data)


    const fdata = useSelector(state => state.data.Favourite)

    console.log(fdata)



    const logindata = JSON.parse(localStorage.getItem("login"))


    console.log(movieid, logindata)


    const rating = useSelector(state => state?.data?.User)

    console.log(rating)



    const handlelike = () => {


        console.log(likearr, dislikearr);
        if (!likearr.includes(logindata.id) && !dislikearr.includes(logindata.id)) {
            setlike(1);

        }


    }

    const handledislike = () => {

        if (!likearr.includes(logindata.id) && !dislikearr.includes(logindata.id)) {

            setdislike(1)
        }



    }

   
   
    const myArrayString = JSON.stringify(data);
    const expirationDate = new Date();
    expirationDate.setDate(expirationDate.getDate() + 7);
    Cookies.set('name', myArrayString, { expires: expirationDate });





    useEffect(() => {

        if (movieid && movieid !== "") {

            dispatch(getmoviebyid(movieid))

        }

    }, [movieid])



    return (



        <div >



            <div style={{ margin: '20px' }}>

                <Grid container spacing={2}>

                    <Grid item container xs={4} >

                        <img src={data.img} style={{ width: '400px', height: "100vh", position: 'relative' }} />

                        <Button style={{ width: '700px', padding: '20px', margin: '2px', backgroundColor: "#203354" }}>

                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXA1KK89VepDyzV0F3r7jjkvmHibXFGpYtRZkEstYMEg&s" style={{ height: '40px', position: 'absolute', left: "10px", }} />


                            <div class="text-container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>


                                <span style={{ backgroundColor: 'inherit', color: 'red' }}> Now Streaming </span>

                                <span style={{ backgroundColor: 'inherit', color: 'red' }}>Watch Now</span>


                            </div>



                        </Button>


                    </Grid>



                    <Grid item container xs={8}>




                        <div style={{ display: 'flex', flexDirection: "column", justifyContent: 'flex-start', alignItems: 'flex-start', width: "100%", padding: '20px' }}>


                            <Typography variant='h4' style={{ fontWeight: '1000' }}> {data.title}(2023)   </Typography>

                            <Typography style={{ margin: '10px' }} variant='h6'>30/09/2022 (IN) Mystery, Action, Thriller  2h 27m</Typography>




                            <Typography style={{ display: 'flex', flexDirection: "row" }} >


                                <Button style={{ backgroundColor: 'black' }} onMouseEnter={() => setIsHovering1(true)} onMouseLeave={() => setIsHovering1(false)}>



                                    <StarIcon style={{ color: 'skyblue', }} />



                                    <div class="text-container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>


                                        <span style={{ backgroundColor: 'inherit', color: 'skyblue' }}> Rating </span>

                                        <span style={{ backgroundColor: 'inherit', color: 'skyblue' }}>10k</span>


                                    </div>



                                </Button>




                                <Button onMouseEnter={() => setIsHovering2(true)} onMouseLeave={() => setIsHovering2(false)}  >

                                    <Avatar style={{ margin: '10px', backgroundColor: 'black' }}>

                                        <PlaylistAddIcon style={{
                                            backgroundColor: 'inherit', color: 'skyblue'
                                        }} />

                                    </Avatar>
                                </Button>



                                <Button onClick={() => dispatch(Favourite(data))} onMouseEnter={() => setIsHovering3(true)} onMouseLeave={() => setIsHovering3(false)} >

                                    <Avatar style={{ margin: '10px', backgroundColor: 'black' }}>

                                        <FavoriteIcon style={{ backgroundColor: 'inherit', color: 'skyblue' }} />

                                    </Avatar>
                                </Button>



                                <Button onMouseEnter={() => setIsHovering4(true)} onMouseLeave={() => setIsHovering4(false)} >

                                    <Avatar style={{ margin: '10px', backgroundColor: 'black' }}>
                                        <AddToQueueIcon style={{
                                            backgroundColor: 'inherit', color: 'skyblue'
                                        }} />

                                    </Avatar>
                                </Button>


                                <Button onMouseEnter={() => setIsHovering5(true)} onMouseLeave={() => setIsHovering5(false)} onClick={handlelike} >

                                    <Avatar style={{ margin: '10px', backgroundColor: 'black' }}>

                                        <ThumbUpIcon style={{ color: 'skyblue' }} />
                                        <p>{like}</p>


                                    </Avatar>

                                </Button>

                                <Button onMouseEnter={() => setIsHovering6(true)} onMouseLeave={() => setIsHovering6(false)} onClick={handledislike}>

                                    <Avatar style={{ margin: '10px', backgroundColor: 'black' }}>

                                        <ThumbDownAltIcon style={{ color: 'skyblue' }} />

                                        <p>{dislike}</p>


                                    </Avatar>

                                </Button>



                            </Typography>



                            <Grid container>

                                <Grid item xs={1}>

                                    {isHovering1 && (<div style={{ fontFamily: 'Rowdies' }}> 'Rate this '</div>)}


                                </Grid>

                                <Grid item xs={2}>
                                    {isHovering2 && (<div style={{ fontFamily: 'Rowdies' }}> 'Add to watchlist '</div>)}

                                </Grid>

                                <Grid item xs={1}>

                                    {isHovering3 && (<div style={{ fontFamily: 'Rowdies' }}> 'Add Favourit '</div>)}

                                </Grid>

                                <Grid item xs={1}>
                                    {isHovering4 && (<div style={{ fontFamily: 'Rowdies' }}>' create your playlist' </div>)}

                                </Grid>

                                <Grid item xs={1}>
                                    {isHovering5 && (<div style={{ fontFamily: 'Rowdies' }}> 'Liked this '</div>)}


                                </Grid>

                                <Grid item xs={2}>

                                    {isHovering6 && (<div style={{ fontFamily: 'Rowdies' }}>'dislike this '</div>)}

                                </Grid>


                            </Grid>


                            <Typography variant='h5' style={{ marginTop: '30px', fontWeight: '1000' }}>


                                Overview

                            </Typography>


                            <Typography variant='body' style={{ margin: "30px" }} >

                                {data.body}

                            </Typography>


                        </div>





                        <Grid container spacing={2} style={{ margin: '10px' }}>



                            <Grid item container xs={4}>



                                <div class="text-container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>

                                    <span style={{ backgroundColor: 'inherit', margin: '10px' }}> <b>Director</b>  </span>

                                    <span >{data.Director}</span>

                                    <span style={{ backgroundColor: 'inherit', margin: '10px' }}> <b>Writer</b>   </span>

                                    <span >{data.Director}</span>


                                </div>


                            </Grid>


                            <Grid item container xs={4}>

                                <div class="text-container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>


                                    <span style={{ backgroundColor: 'inherit', margin: '10px' }}> <b>Characters</b>  </span>

                                    <span >{data.Director}</span>

                                    <span style={{ backgroundColor: 'inherit', margin: '10px' }}> <b>Characters</b>   </span>

                                    <span >{data.Director}</span>

                                </div>


                            </Grid>


                            <Grid item container xs={4}>

                                <div class="text-container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>


                                    <span style={{ backgroundColor: 'inherit', margin: '10px' }}> <b>Characters</b>  </span>

                                    <span >{data.Director}</span>

                                    <span style={{ backgroundColor: 'inherit', margin: '10px' }}> <b>Characters</b>   </span>

                                    <span >{data.Director}</span>


                                </div>


                            </Grid>


                        </Grid>






                    </Grid>


                </Grid>





            </div>




        </div>


    )
}

export default Movieover