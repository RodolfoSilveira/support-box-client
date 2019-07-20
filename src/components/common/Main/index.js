import React from 'react'
import {Switch, Route } from 'react-router-dom'
import Dashboard from '../../main-content/Dashboard'
import Tasks from '../../main-content/Tasks'
import Client from '../../main-content/Client'
import Employee from '../../main-content/Employee'
import { MainContainer } from './styles'

function Main() {
    return (
        <MainContainer>
            <Switch>
                <Route path='/home/dashboard' component={Dashboard}/>
                <Route path='/home/tasks' component={Tasks}/>
                <Route path='/home/client' component={Client}/>
                <Route path='/home/employee' component={Employee}/>
            </Switch>
        </MainContainer>
    )
}

export default Main