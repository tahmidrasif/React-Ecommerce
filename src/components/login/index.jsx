import React from 'react';
import { useState, useEffect } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Copyright from '../uicomponents/copyright';
import axios from 'axios';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
    useHistory,
    useParams
} from "react-router-dom";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { UserAction } from '../../store/actions/userActions/userAction';
import { GlobalConstant } from '../../lib/constant';



const Login = () => {

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

    const classes = useStyles();
    const store = useSelector((store) => store)
    const dispatch = useDispatch();
    const params = useParams();
    const history = useHistory();

    console.log(store, '====store');

    const [user, setUser] = useState(
        {
            email: '',
            password: ''
        }
    );


    const setLoginData = (e, datatype) => {
        setUser({
            ...user,
            [datatype]: e.target.value
        })
    }

    const userLogin = async () => {
        //http://localhost:8080/signin
        if (user.email === '' || user.password === '') {
            alert('User Id or password can not be empty')
            return;
        }
        try {
            const response = await axios.post(GlobalConstant.BASE_URL+'/signin',
                {
                    email: user.email,
                    password: user.password
                }

            );
            console.log(response.data.userInfo, '===resoponse.data')
            if (response.data.userInfo) {
                dispatch(UserAction(response.data.userInfo))
                alert(response.data.message)
                history.push('/')
            }
            else {
                alert(response.data.message)
            }
        } catch (e) {
            console.log(e, '===error')
            alert('An unexpected error occured. Please try again later')
        }

    }

    useEffect(() => {
        console.log('user effect')
    }, [user])


    return (
        <>
            {!store.persistedStore.UserReducer.userInfo.token ?
                <Container component="main" maxWidth="xs">
                    <CssBaseline />
                    <div className={classes.paper}>
                        <Avatar className={classes.avatar}>
                            <LockOutlinedIcon />
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            Sign in
                        </Typography>
                        {/* <form className={classes.form} noValidate> */}
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
                            onChange={((e) => setLoginData(e, 'email'))}
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
                            onChange={((e) => setLoginData(e, 'password'))}
                        />
                        <FormControlLabel
                            control={<Checkbox value="remember" color="primary" />}
                            label="Remember me"
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                            onClick={userLogin}
                        >
                            Sign In
                        </Button>
                        <Grid container>
                            <Grid item xs>
                                <Link href="#" variant="body2">
                                    Forgot password?
                                </Link>
                            </Grid>
                            <Grid item>
                                <Link variant="body2" href="/signup/" >
                                    {"Don't have an account? Sign Up"}
                                </Link>
                            </Grid>
                        </Grid>
                        {/* </form> */}
                    </div>
                    <Box mt={8}>
                        <Copyright />
                    </Box>
                </Container> :
                history.push('/')
            }
        </>

    )
}
export default Login