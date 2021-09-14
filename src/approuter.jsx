import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect,
    useHistory,
    useParams
} from "react-router-dom";
import ProductList from './components/products/productList';
import ProductDetails from './components/products/productDetails'
import Login from './components/login';
import Cart from './components/cart/cart';

const Approuter = () => {

    return (
        <Switch>
            <Route exact path='/'>
                <ProductList />
            </Route>
            <Route exact path='/product-details/'>
                <ProductDetails />
            </Route>
            <Route exact path='/login/'>
                <Login />
            </Route>
            <Route exact path='/cart/'>
                <Cart />
            </Route>
            <Route path='*'>
                <p>404 Not Found</p>
            </Route>
        </Switch>
    );

}

export default Approuter

