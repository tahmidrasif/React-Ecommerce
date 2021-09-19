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
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { GetProductList, InsertProductAction } from '../../store/actions/productAction/productAction';
import { useEffect } from 'react';

const useStyles = makeStyles((theme) => ({
    table: {
        minWidth: 650,
    },
    cardGrid: {
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8),
    },
}));



const ProductListAdmin = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const { categoryList } = useSelector((store) => store.CategoryReducer);
    const { userInfo } = useSelector((store) => store.persistedStore.UserReducer)
    const { productList } = useSelector((store) => store.ProductReducer)
    const productReducer= useSelector((store) => store.ProductReducer)
    const [product, setProduct] = useState(
        {
            title: '',
            price: 0,
            description: '',
            image: '',
            category: ''
        }
    );

    const insertProduct = () => {
        console.log(product,'===product parameter in insertProduct')
        dispatch(InsertProductAction(product, userInfo.token))
        setProduct({})
    }

    const addData = (e, datatype) => {
        console.log(e.target.value, '=== product admin e')
        console.log(datatype, '=== product admin datatype')
        setProduct({
            ...product,
            [datatype]: e.target.value
        })
    }

    useEffect(() => {
        //console.log(cartCount, '===user effect app js')
        dispatch(GetProductList())
    
      }, [productReducer.product])

    const convertImage = async (e, datatype) => {
        const file = e.target.files[0]
        let reader = new FileReader();
        reader.readAsDataURL(file);

        reader.onload = (e) => {
            console.log(e.target.result, '====== after file upload')
            setProduct({ ...product, [datatype]: e.target.result })
        }
        //const base64 = await this.convertBase64(file)
        //console.log(base64,'====== after file upload')
    }

    console.log(productList, '=====products after change');

    return (
        <React.Fragment>
            <CssBaseline />

            <main>
                <Container className={classes.cardGrid} maxWidth="lg">
                    {/* End hero unit */}

                    <Grid container spacing={12} justify="center">

                        <Grid item lg={12} >
                            <Paper className={classes.paper}>
                                <Card className={classes.root}>

                                    <div>
                                        <TextField required id="standard-required" value={product.title} label="Title" onChange={((e) => addData(e, 'title'))} />
                                    </div>
                                    <div>
                                        <TextField required id="standard-required" value={product.description} label="Description" onChange={((e) => addData(e, 'description'))} />
                                    </div>
                                    <div>
                                        {/* <TextField required id="standard-required"  label="Category" /> */}
                                        <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                                            <Select
                                                labelId="demo-simple-select-standard-label"
                                                id="demo-simple-select-standard"
                                                onChange={((e) => addData(e, 'category'))}
                                                label="Age"
                                                value={product.category}
                                            >
                                                {categoryList.map((item) =>

                                                    < MenuItem value={item._id}>{item.name}</MenuItem>
                                                )}
                                            </Select>
                                        </FormControl>
                                    </div>

                                    <div>
                                        <TextField required id="standard-required" value={product.price} label="Price" type="number" onChange={((e) => addData(e, 'price'))}
                                            InputLabelProps={{
                                                shrink: true,
                                            }} />
                                    </div>
                                    <div>
                                        <TextField required id="standard-required" value={product.stock} label="Stock" type="number" onChange={((e) => addData(e, 'stock'))}
                                            InputLabelProps={{
                                                shrink: true,
                                            }} />
                                    </div>
                                    <div>
                                        {/* <TextField required id="standard-required" label="Image" /> */}
                                        <input
                                            accept="image/*"
                                            className={classes.input}
                                            id="raised-button-file"
                                            multiple
                                            type="file"
                                            onChange={((e) => convertImage(e, 'image'))}
                                        />
                                        {/* <label htmlFor="raised-button-file">
                                            <Button variant="raised" component="span" className={classes.button}>
                                                Upload
                                            </Button>
                                        </label> */}
                                    </div>


                                    <div>

                                        <Button size="small" color="success" onClick={insertProduct}>
                                            Save
                                        </Button>


                                    </div>

                                </Card>
                            </Paper>
                        </Grid>
                    </Grid>

                    <br />

                    <Grid container spacing={1}>
                        <TableContainer component={Paper}>
                            <Table className={classes.table} aria-label="simple table">
                                <TableHead>
                                    <TableRow>

                                        <TableCell align="left">Title</TableCell>
                                        <TableCell align="left">Description</TableCell>
                                        <TableCell align="left">Category Name</TableCell>
                                        <TableCell align="left">Price</TableCell>
                                        <TableCell align="left">Stock</TableCell>
                                        {/* <TableCell align="left">Image</TableCell> */}

                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {productList.map((item) =>

                                        <TableRow key='test'>

                                            <TableCell align="left">  {item.title}</TableCell>
                                            <TableCell align="left"> {item.description} </TableCell>
                                            <TableCell align="left"> {item.category.name} test</TableCell>
                                            <TableCell align="left"> {item.price} </TableCell>
                                            <TableCell align="left"> {item.stock} </TableCell>
                                            {/* <TableCell align="left"> {item.title} test</TableCell> */}

                                        </TableRow>
                                    )}

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
        </React.Fragment >
    );
}

export default ProductListAdmin



