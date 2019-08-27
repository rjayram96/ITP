import React from 'react'
import {Redirect, Route, Switch, BrowserRouter } from 'react-router-dom'
import HomePage from './Dashboard/component/HomePage'
import PricePage from './Price/component/priceCards'
import mainPrice from './Price/component/mainPrice'





function Routes () {
    return (
        <div>
            <BrowserRouter>
                <Switch>

                    <Redirect exact from='/' to='/home'/>

                    <Route
                        exact
                        path='/home'
                        component={HomePage}/>

                   <Route
                        exact
                        path='/price'
                        component={PricePage}/>
                    <Route
                        exact
                        path='/mainPrice'
                        component={mainPrice}/>


                </Switch>
            </BrowserRouter>
        </div>
    )
}

export default Routes
