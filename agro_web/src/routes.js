import React from 'react'
import {Redirect, Route, Switch, BrowserRouter } from 'react-router-dom'
import HomePage from './Dashboard/component/HomePage'
import PricePage from './Price/component/priceCards'



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

                </Switch>
            </BrowserRouter>
        </div>
    )
}

export default Routes
