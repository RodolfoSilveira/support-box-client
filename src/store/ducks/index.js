import { combineReducers } from 'redux'
import auth from './auth'
import register from './register'
import { connectRouter } from 'connected-react-router';
import history from '../../routes/history'

export default combineReducers({
    auth,
    register,
    router: connectRouter(history)
})