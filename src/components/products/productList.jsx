
import React, { useEffect, useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CameraIcon from '@material-ui/icons/PhotoCamera';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import Copyright from '../uicomponents/copyright';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { GetProductByCategoryId, GetProductList } from '../../store/actions/productAction/productAction';
import { GlobalConstant } from '../../lib/constant';
import { CurrentCategoryAction } from '../../store/actions/categoryAction/categoryAction';

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));



const ProductList = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { productList } = useSelector((store) => store.ProductReducer)
  const { currentCategory } = useSelector((store) => store.CategoryReducer)
  const { userInfo } = useSelector((store) => store.UserReducer)
  const [currentCategoryName,setCurrentCategoryName]=useState();


  useEffect(() => {
   
    if (!productList.length) {

        dispatch(GetProductList())


    }
    if (currentCategory.name) {
     
      if(currentCategory.name!==currentCategoryName){
        console.log(currentCategoryName, '==in if')
        setCurrentCategoryName(currentCategory.name);
        dispatch(GetProductByCategoryId(currentCategory._id))
      }
      //

    }

  }, [productList,currentCategory])

  const AddToCart=(product)=>{
    console.log('Addto cart')
    if(userInfo.token){
      
    } 
  }
  return (

    <React.Fragment>
      <CssBaseline />

      <main>
        {/* Hero unit */}

        <Container className={classes.cardGrid} maxWidth="lg">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {productList.map((item) => (
              <Grid item xs={12} sm={6} md={4}>
                {/* key={card} */}
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={GlobalConstant.BASE_URL + item.image}
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {item.title}
                    </Typography>
                    <Typography>
                      {item.description}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary">
                      Details
                    </Button>
                    <Button size="small" color="primary" onClick={()=>AddToCart(item)}>
                      Add To Cart
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>

    </React.Fragment>

  )

}

export default ProductList