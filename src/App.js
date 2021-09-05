import logo from './logo.svg';
import React from 'react';
import './App.css';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Dashboard from './components/sidebar/dashboard';
import clsx from 'clsx';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import NotificationsIcon from '@material-ui/icons/Notifications';
import ProductList from './components/products/productList';
import ListSubheader from '@material-ui/core/ListSubheader';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import CategoryIcon from '@material-ui/icons/Category';
import PersonIcon from '@material-ui/icons/Person';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import CategoryList from './components/category/categoryList';
import Footer from './components/footer';
import Box from '@material-ui/core/Box';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import Approuter from './approuter';
import Login from './components/login';
import SignUp from './components/signup/index'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useParams
} from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import store from './store';
import { UserAction } from './store/actions/userAction';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: 'none',
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9),
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),

  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeight: {
    height: 240,
  },
}));

function App() {
  const classes = useStyles();
  const store=useSelector((store)=>store)
  const dispatch=useDispatch();
  const history=useHistory();
  const [open, setOpen] = React.useState(true);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  
  const setLoginLogout=(userInfo)=>{
    if(userInfo!==null){
      dispatch(UserAction({}));
    }
    history.push('/login')
  }
  console.log(store.UserReducer.userInfo,'===User Reducer Length')
  return (

    <>
      <Switch>
        <Route exact path='/login/'>
          <Login />
        </Route>
        <Route exact path='/signup/'>
          <SignUp/>
        </Route>
        <div className={classes.root}>
          <CssBaseline />
          <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
            <Toolbar className={classes.toolbar}>
              <IconButton
                edge="start"
                color="inherit"
                aria-label="open drawer"

                className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
              >
                <MenuIcon />
              </IconButton>
              <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
                My-Ecommerce
              </Typography>


              <IconButton color="inherit">
                <Badge color="secondary">
                  <ShoppingBasketIcon />
                </Badge>
              </IconButton>
              <IconButton color="inherit" onClick={()=>setLoginLogout(store.UserReducer.userInfo)}>
                <Badge color="secondary">
                  {store.UserReducer.userInfo?'Log in':'Log out'}
                </Badge>
              </IconButton>

            </Toolbar>
          </AppBar>
          <Drawer
            variant="permanent"
            classes={{
              paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
            }}
            open={open}
          >

            <Divider />
            <List
              subheader={
                <ListSubheader component="div" id="nested-list-subheader">
                  Admin
                </ListSubheader>
              }>
              <ListItem button key='Categories'>
                <ListItemIcon><CategoryIcon />  </ListItemIcon>
                <ListItemText primary='Categories' />
              </ListItem>

              <ListItem button key='Products'>
                <ListItemIcon><ShoppingBasketIcon />  </ListItemIcon>
                <ListItemText primary='Products' />
              </ListItem>
              <ListItem button key='Users'>
                <ListItemIcon><PersonIcon />  </ListItemIcon>
                <ListItemText primary='Users' />
              </ListItem>
              {/* {mainListItems} */}
            </List>
            <Divider />
            <List
              subheader={
                <ListSubheader component="div" id="nested-list-subheader">
                  Categories
                </ListSubheader>
              }>
              {/* {secondaryListItems} */}
              <ListItem button key='Categories'>
                <ListItemIcon><CategoryIcon />  </ListItemIcon>
                <ListItemText primary='Categories' />
              </ListItem>

              <ListItem button key='Products'>
                <ListItemIcon><ShoppingBasketIcon />  </ListItemIcon>
                <ListItemText primary='Products' />
              </ListItem>
              <ListItem button key='Users'>
                <ListItemIcon><PersonIcon />  </ListItemIcon>
                <ListItemText primary='Users' />
              </ListItem>
            </List>
          </Drawer>
          <main className={classes.content}>
            <div className={classes.appBarSpacer} />

            <Approuter />

            <Box pt={4}>
              <Footer />
            </Box>
          </main>

        </div>
      </Switch>
    </>
  );
}

export default App;
