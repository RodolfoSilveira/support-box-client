import {Switch, Route} from 'react-router-dom'
import React from 'react'
import Login from './components/auth/Login'
import Register from './components/auth/Register'
import Home from './components/Home'

function Routes(){

    return (
        <Switch>
            <Route exact path='/' component={Login}/>
            <Route path='/register' component={Register}/>
            <Route path='/home' component={Home}/>
        </Switch>
    )
}

export default Routes