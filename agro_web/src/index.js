import React from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import Routes from './routes'
import thunkMiddleware from 'redux-thunk'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './mainReducer'
import { applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'
import promise from 'redux-promise-middleware'

const store = createStore(reducer, applyMiddleware(promise(), thunkMiddleware, createLogger()))

ReactDOM.render(
    <Provider store={store}>
        <Routes className='container-fluid'/>
    </Provider>,
    document.getElementById('root')
)


