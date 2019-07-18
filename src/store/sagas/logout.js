import { put } from 'redux-saga/effects'
import { Creators as LogoutCreators, Types } from '../ducks/logout'
import { push } from 'connected-react-router'

export function* logout() {

    try{

        localStorage.removeItem('token')

        yield put(LogoutCreators.logoutSuccess())

        yield put(push('/'))

    }catch(error) {
        yield put({ type: Types.LOGOUT_ERROR });
    }
}