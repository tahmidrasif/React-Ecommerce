import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Badge from '@material-ui/core/Badge';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import MailIcon from '@material-ui/icons/Mail';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { AddProductToggleAction, RemoveProductToggleAction, setProductToCartAction } from '../../store/actions/cartAction/cartAction';
import { ActionType } from '../../lib/constant';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    '& > *': {
      marginBottom: theme.spacing(2),
    },
    '& .MuiBadge-root': {
      marginRight: theme.spacing(4),
    },
  },
}));

export default function Counter({product,ToggleCartButton}) {
  const classes = useStyles();
  const [count, setCount] = React.useState(1);
  const [invisible, setInvisible] = React.useState(false);
  const dispatch=useDispatch();
  const { userInfo } = useSelector((store) => store.persistedStore.UserReducer)

  const handleBadgeVisibility = () => {
    setInvisible(!invisible);
  };

const AddToCart=(product)=>{
  if(userInfo.token){
    //ToggleCartButton();
    dispatch(setProductToCartAction(product,userInfo.token,ActionType.PRODCUT_ADD))
   
    //history.push('/cart')
  } 

}

const RemoveToCart=(product)=>{
  if(userInfo.token){
    //ToggleCartButton();
    dispatch(RemoveProductToggleAction(product,userInfo.token))
    
    //history.push('/cart')
  } 

}

 //console.log(product,'===in counter comp')
  return (
    <div className={classes.root}>
      <div>
      
        <ButtonGroup>
          <Button
            aria-label="reduce"
            onClick={() => {
              RemoveToCart(product)
            }}
          >
            <RemoveIcon fontSize="small" />
          </Button>
          <Button
            aria-label="increase"
            onClick={() => {
              AddToCart(product)
            }}
          >
            <AddIcon fontSize="small" />
          </Button>
        </ButtonGroup>
      </div>

    </div>
  );
}
