import { combineReducers } from 'redux'
import auth from './auth'
import register from './register'
import { connectRouter } from 'connected-react-router';
import history from '../../routes/history'
import logout from './logout'
import nav from './nav'

export default combineReducers({
    auth,
    register,
    logout,
    nav,
    router: connectRouter(history)
})