import { call, put } from 'redux-saga/effects'
import api from '../../services/api'
import { Creators as AuthCreators, Types } from '../ducks/auth'
import { push } from 'connected-react-router'

export function* authorize({ payload: { email, password } }){

    try{

        const response = yield call(api.post,'/authenticate', { email, password })
        
        const { data } = response

        yield put(AuthCreators.authResponse(data));

        localStorage.setItem('token', data.token);

        yield put(AuthCreators.authData(data))

        yield put(push('/home'))

    }catch (error){
        let message;
        switch (error.status) {
            case 500: message = 'Internal Server Error'; break;
            case 401: message = 'Invalid credentials'; break;
            default: message = 'Something went wrong';
        }
        yield put({ type: Types.AUTH_ERROR, payload: message });
        localStorage.removeItem('token');
    }
}