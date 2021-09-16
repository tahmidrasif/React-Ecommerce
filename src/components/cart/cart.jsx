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
import { GetAllCartList } from '../../store/actions/cartAction/cartAction';
import { useState } from 'react';

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
    const [buttonClick, setButtonClick] = useState('N')
    useEffect(() => {
        if (!userInfo.token) {
            history.push('/login')
            return;
        }
        else {

            dispatch(GetAllCartList(userInfo.token))
            setButtonClick('N')


            // cartList.map((item) => {
            //     console.log(item, '=== cart list travarse')
            // })
        }
    }, [buttonClick])
  console.log(buttonClick,'button clicked')

   const ToggleCartButton=()=>{

       setButtonClick('Y')
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
                                            </TableRow>
                                        ))
                                    }
                                    {/* {rows.map((row) => (
                        <TableRow key={row.name}>
                            <TableCell component="th" scope="row">
                                {row.name}
                            </TableCell>
                            <TableCell align="right">{row.calories}</TableCell>
                            <TableCell align="right">{row.fat}</TableCell>
                            <TableCell align="right">{row.carbs}</TableCell>
                            <TableCell align="right">{row.protein}</TableCell>
                        </TableRow>
                    ))} */}
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



