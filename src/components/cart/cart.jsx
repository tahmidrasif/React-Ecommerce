import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Counter from './counter';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { useDispatch } from 'react-redux';
import { CartListAction, CartTotalItem, CheckOutAction, GetAllCartList, RemoveProductToggleAction } from '../../store/actions/cartAction/cartAction';
import { useState } from 'react';
import Button from '@mui/material/Button';
import { CheckOutlined } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
    table: {
        minWidth: 650,
    },
    cardGrid: {
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8),
    },

}));



const Cart = () => {
    const classes = useStyles();
    const history = useHistory();
    const dispatch = useDispatch();
    const { userInfo } = useSelector((store) => store.persistedStore.UserReducer)
    const { cartList } = useSelector((store) => store.persistedStore.CartReducer)
    const [totalPrice, setTotalPrice] = useState(0)
    useEffect(() => {

        console.log('use effect in cart')
        if (!userInfo.token) {
            history.push('/login')
            return;
        }
        else {
            let total = 0;
            cartList.map((item) => (
                total += parseFloat(item.quantity) * parseFloat(item.productId.price)
            ))
            setTotalPrice(total);
        }
    }, [cartList])
    //console.log(buttonClick,'button clicked')
    //console.log(cartList,'cart list')
    const ToggleCartButton = () => {


    }

    const deleteCartProduct=(item)=>{

        if (window.confirm('Are you sure you want to delete the product')) {
            dispatch(RemoveProductToggleAction(item,userInfo.token,'true'))
          } else {
            // Do nothing!
            console.log('Thing was not saved to the database.');
          }
    }

    const CheckOut=()=>{
        var a=dispatch(CheckOutAction(userInfo.token))
        console.log(a,'=== return value of a')
        history.push('/checkout')
    }
    return (
        <React.Fragment>
            <CssBaseline />

            <main>
                <Container className={classes.cardGrid} >
                    {/* End hero unit */}
                    <Grid container spacing={1}>
                        <TableContainer component={Paper}>
                            <Table className={classes.table} aria-label="simple table" >
                                <TableHead>
                                    <TableRow>

                                        <TableCell align="left">Product Name</TableCell>
                                        <TableCell align="left">Qty</TableCell>
                                        <TableCell align="left">Unit Price</TableCell>
                                        <TableCell align="left"></TableCell>
                                        <TableCell align="left">Total</TableCell>
                                        <TableCell align="left"></TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {
                                        cartList.map((item) => (
                                            <TableRow key='test'>

                                                <TableCell align="left">  {item.productId.title}</TableCell>
                                                <TableCell align="left">  {item.quantity}</TableCell>
                                                <TableCell align="left">  {item.productId.price}</TableCell>
                                                <TableCell align="left"> <Counter product={item.productId} ToggleCartButton={ToggleCartButton} /> </TableCell>
                                                <TableCell align="left">  {parseFloat(item.quantity) * parseFloat(item.productId.price)}</TableCell>
                                                <TableCell align="left">
                                                    <Button variant="outlined" color="error" onClick={()=>deleteCartProduct(item.productId)}>
                                                        Delete
                                                    </Button>
                                                </TableCell>
                                            </TableRow>
                                        ))

                                    }
                                    {cartList.length ?
                                        <>
                                            <TableRow key='test'>

                                                <TableCell align="left"> </TableCell>
                                                <TableCell align="left">  </TableCell>
                                                <TableCell align="left">  </TableCell>
                                                <TableCell align="center"> Total </TableCell>
                                                <TableCell align="left"> {totalPrice} </TableCell>
                                                <TableCell align="left"></TableCell>
                                            </TableRow>
                                            <TableRow key='test'>

                                                <TableCell align="left"> </TableCell>
                                                <TableCell align="left">  </TableCell>
                                                <TableCell align="left">  </TableCell>
                                                <TableCell align="center">  </TableCell>
                                                <TableCell align="left">  </TableCell>
                                                <TableCell align="left">
                                                    <Button variant="outlined" color="error" onClick={CheckOut}>
                                                        Checkout
                                                    </Button>
                                                </TableCell>
                                            </TableRow>
                                        </>
                                        : <></>
                                    }

                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Grid>
                </Container>
            </main>
        </React.Fragment>
    );
}

export default Cart



