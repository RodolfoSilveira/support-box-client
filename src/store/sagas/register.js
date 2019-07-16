import { call, put } from 'redux-saga/effects'
import api from '../../services/api'
import { Creators as RegisterCreators, Types } from '../ducks/register'

export function* register({ payload: {name, email, password, cpf} }) {

    try{

        const response = yield call(api.post, '/registerClient', {name, email, password, cpf})

        const { data } = response

        yield put(RegisterCreators.registerResponse(data))

        localStorage.setItem('token', data.token)

        yield put(RegisterCreators.registerData(data))
        
    }catch(error){
        let message;
        switch (error.status) {
            case 500: message = 'Internal Server Error'; break;
            case 401: message = 'Invalid credentials'; break;
            default: message = 'Something went wrong';
        }
        yield put({ type: Types.REGISTER_ERROR, payload: message });
        localStorage.removeItem('token');
    }
}