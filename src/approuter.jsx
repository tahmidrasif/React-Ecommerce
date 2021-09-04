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
        </Switch>
    );

}

export default Approuter

