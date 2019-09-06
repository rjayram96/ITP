import React from 'react'
import {Redirect, Route, Switch, BrowserRouter,Router,link  } from 'react-router-dom'
import history from './history';
import HomePage from './Dashboard/component/HomePage'
import PricePage from './Price/component/priceCards'
import CategoryPage from './Category/component/categoryCard'
import addProduct from "./Category/component/addProduct"
import mainPrice from './Price/component/mainPrice'
import ListMarket from './Market/component/ListMarket'
import MarketPriceTimeGraph from './Market/component/MarketPriceTimeGraph'
import mainCategory from "./Category/component/mainCategory"
import VegetablePage from "./Category/component/VegetablePage";


function Routes () {
    return (
        <div>
            <BrowserRouter>
                <Switch>
                    <Redirect exact from='/' to='/home'/>
                    <Router history={history}>


                        <Route
                            exact
                            path='/home'
                            component={HomePage}/>

                        <Route
                            exact
                            path='/market'
                            component={ListMarket}/>

                        <Route
                            exact
                            path='/graph'
                            component={MarketPriceTimeGraph}/>

                        <Route
                            exact
                            path='/price'
                            component={PricePage}/>

                        <Route
                            exact
                            path='/mainPrice'
                            component={mainPrice}/>

                        <Route
                            exact
                            path='/category'
                            component={CategoryPage}/>

                        <Route
                            exact
                            path='/addProduct'
                            component={addProduct}/>

                        <Route
                            exact
                            path='/mainCategory'
                            component={mainCategory}/>

                        <Route
                            exact
                            path='/VegetablePage'
                            component={VegetablePage}/>




                    </Router>



                </Switch>
            </BrowserRouter>
        </div>
    )
}

export default Routes
