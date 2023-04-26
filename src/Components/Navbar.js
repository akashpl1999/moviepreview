import React, { useEffect, useState } from 'react';
import { alpha, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import FavoriteIcon from '@material-ui/icons/Favorite';

import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';
import Switch from '@material-ui/core/Switch';
import { Link } from "react-router-dom"

import { darkmode, searchdata } from '../Action/Movieac'

import { useDispatch, useSelector } from 'react-redux';
import { Button } from '@material-ui/core';

import { IconButton, Menu, MenuItem } from '@material-ui/core';
import { useNavigate } from 'react-router-dom';



const useStyles = makeStyles((theme) => ({


    grow: {
        flexGrow: 1,
    },

    menuButton: {
        marginRight: theme.spacing(2),
    },

    title: {
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },

        textDecoration: 'none',
        color: 'inherit',
    },

    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: alpha(theme.palette.common.white, 0.25),
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(3),
            width: 'auto',
        },
    },


    searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },


    inputRoot: {
        color: 'inherit',
    },


    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },



    sectionDesktop: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'flex',
        },
    },
    sectionMobile: {
        display: 'flex',
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },
}));

export default function PrimarySearchAppBar(props) {


    const dispatch = useDispatch()

    const [searchTerm, setSearchTerm] = useState('');

    const isLoggedIn = JSON.parse(localStorage.getItem("isLoggedIn"));


    const toggle = useSelector(state => state.data.toggle)

    console.log(toggle)

    const navigate =useNavigate()


    const handleChange = () => {
        dispatch(darkmode())
    };


    useEffect(() => {

        dispatch(searchdata(searchTerm))

    }, [searchTerm])



    const classes = useStyles();



    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = event => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleout=()=>{
        setAnchorEl(null);
        navigate('/login')
        localStorage.removeItem("isLoggedIn")
     }

     const handleprofile=()=>{
        setAnchorEl(null);
        navigate('/profile')
   
     }


    return (




        <div className={classes.grow}>


            <AppBar position="static" color='transparent'>


                <Toolbar>
                    <Link className={classes.title} to="/home">

                        <Typography className={classes.title} variant="h6" noWrap>

                            MovieDB

                        </Typography>

                    </Link>

                    <div className={classes.search}>
                        <div className={classes.searchIcon}>
                            <SearchIcon />
                        </div>
                        <InputBase
                            placeholder="Search…"
                            classes={{
                                root: classes.inputRoot,
                                input: classes.inputInput,
                            }}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            inputProps={{ 'aria-label': 'search' }}
                        />
                    </div>
                    <div className={classes.grow} />
                    <div className={classes.sectionDesktop}>

                        <IconButton>
                            <Switch

                                checked={toggle}
                                onChange={handleChange}
                            />

                        </IconButton>

                        <IconButton aria-label="show 4 new mails" color="inherit">

                            <Link to='/fav' style={{ textDecoration: "none" }}>
                                <Button style={{ backgroundColor: 'inherit', color: 'inherit' }}>

                                    <FavoriteIcon style={{ color: 'pink' }} />

                                </Button>
                            </Link>

                        </IconButton>
                        <IconButton
                            aria-controls="simple-menu"
                            aria-haspopup="true"
                            onClick={handleClick}
                        >
                            <AccountCircle />
                        </IconButton>
                        <Menu
                            id="simple-menu"
                            anchorEl={anchorEl}
                            keepMounted
                            open={Boolean(anchorEl)}
                            onClose={handleClose}
                        >
                          
                          
                             
                          {
                            !isLoggedIn &&(<>
                       
                            <MenuItem onClick={handleClose} ><Link to='/reg' style={{textDecoration:'none'}}>Register</Link></MenuItem>
                            <MenuItem onClick={handleClose}><Link to='/login' style={{textDecoration:'none'}}>Login</Link></MenuItem>
                          
                               </>)
                          }
                          {
                            isLoggedIn &&(<>
                            <MenuItem onClick={handleprofile}>Profile</MenuItem>
                            <MenuItem onClick={handleClose}>MyAccount</MenuItem>
                            <MenuItem onClick={handleout}>Logout</MenuItem>
                       
                            </>)
                          }

                        </Menu>
                    </div>

                </Toolbar>
            </AppBar>
        </div>
    );
}
