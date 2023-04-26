import React, { useState } from 'react'
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Weatherdata } from '../Action/Weather';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { CardHeader } from '@material-ui/core';

//import Display from './Display';


const useStyles = makeStyles({
    root: {
        maxWidth: 345,
        margin:'auto'
    },
    media: {
        height: 140,
    },
});


const Weather = () => {
    const classes = useStyles();

    const [name, setname] = useState("shimoga")



    const dispatch = useDispatch();
    const data = useSelector(state => state.Wea)

    console.log(data)

    const handlechange = (e) => {
        e.preventDefault()
        setname(e.target?.value)


    }

    useEffect(() => {

        Weatherdata(dispatch, name)


    }, [name])



    return (

        <div>

            <select value={name} onChange={handlechange} >

                {
                    ["shimoga", "davangere", "bangalore", "Honnali"].map((elm) => {
                        return <option value={elm}>{elm}</option>
                    })
                }
            </select>


            <div>

                <Card className={classes.root}>
                    <CardActionArea>
                        <CardHeader>
                            weather information </CardHeader>
                        <CardMedia
                            className={classes.media}
                            image="https://images.unsplash.com/photo-1593978301851-40c1849d47d4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8d2VhdGhlciUyMGFwcHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60"
                            title="Contemplative Reptile"
                        />


                        <CardContent>
                        <div style={{ position: "relative" }}>

                     
                         
                               
                            <Typography gutterBottom variant="h5" component="h2">
                                CITY : {data.data?.name}
                            </Typography>
                          
                            <Typography variant="body2" color="textSecondary" component="p" >
                                <p>latitude  :{data.data.coord?.lat}</p>
                                <p>logitude  :{data.data.coord?.lon}</p>
                                <p>teampeture :{data.data.main?.temp}</p>
                                <p>country :{data.data.sys?.country}</p>
                                <p>weather :{data.data.weather?.map((elm) => elm.main)}</p>
                             <p>current condition :{data.data.weather?.map((elm) => elm.description)}</p>

                            </Typography>
                            </div>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary">
                           More
                        </Button>
                    </CardActions>
                </Card>


                <p></p>



            </div>







        </div>

    )
}

export default Weather









