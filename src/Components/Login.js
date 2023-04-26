import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { useNavigate } from 'react-router-dom';
import { userdata } from '../Action/Movieac';
import { useDispatch, useSelector } from 'react-redux';

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

export default function SignIn() {
    const classes = useStyles();



    const [email, setemail] = useState("")

    const [password, setpassword] = useState("")

    const [ErrorMessag, setErrorMessage] = useState("")

    const navigate = useNavigate()

    const dispatch = useDispatch()




    const handleSubmit = (event) => {

        event.preventDefault();

        const storedData = JSON.parse(localStorage.getItem("user")) || [];

        if (email && password) {

            const loguser = storedData.find((item) => item.email === email && item.password === password)


            if (loguser) {

                alert("done")
                localStorage.setItem("isLoggedIn", true);
                console.log(loguser)
                localStorage.setItem("login", JSON.stringify(loguser))


                dispatch(userdata(loguser))

                navigate('/home')

            } else {



                setErrorMessage("Invalid email or password. Please try again.");
                alert("err")


                
            }



        } else {



            alert(ErrorMessag)




        }






    }

    return (


        <Container component="main" maxWidth="xs" style={{ backgroundColor: 'white', color: 'black', height: '500px' }}>


            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar} style={{ backgroundColor: 'inherit', color: 'inherit' }}
                >
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5" style={{ backgroundColor: 'inherit', color: 'inherit' }}
                >
                    Sign in
                </Typography>
                <form className={classes.form} noValidate>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        autoFocus

                        onChange={(e) => setemail(e.target.value)}

                        style={{ backgroundColor: 'inherit', color: 'inherit' }}
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"

                        onChange={(e) => setpassword(e.target.value)}

                        style={{ backgroundColor: 'inherit', color: 'inherit' }}

                    />


                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                        onClick={handleSubmit}
                    >
                        Sign In

                    </Button>

                </form>
            </div>


        </Container>
    );
}
