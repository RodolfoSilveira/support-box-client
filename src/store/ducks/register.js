export const Types = {
    REGISTER_REQUEST: 'subject/REGISTER_REQUEST',
    REGISTER_RESPONSE: 'subject/REGISTER_RESPONSE',
    REGISTER_SUCCESS: 'subject/REGISTER_SUCCESS',
    REGISTER_ERROR: 'subject/REGISTER_ERROR',
    REGISTER_ONDATA: 'subject/REGISTER_ONDATA',
}

const INITIAL_STATE = {
    data: [],
    error: false,
    loading: true
}

export const Creators = {
    register: (name, email, password, cpf) => ({
        type: Types.REGISTER_REQUEST,
        payload: {name, email, password, cpf}
    }),

    registerResponse: data => ({
        type: Types.REGISTER_RESPONSE,
        payload: {data}
    }),

    registerData: data => ({
        type: Types.REGISTER_ONDATA,
        payload: {data}
    }),

    registerSuccess: data => ({
        type: Types.REGISTER_SUCCESS,
        payload: {data}
    }),

    registerError: () => ({
        type: Types.REGISTER_ERROR
    })
}

const subject = (state = INITIAL_STATE, { type, payload }) => {
    switch(type) {
        case Types.REGISTER_RESPONSE:
            return {
                ...state,
                data: payload.data,
                loading: false
            }
        
        case Types.REGISTER_ONDATA:
            return {
                ...state,
                data: payload.data,
                loading: false
            }
        
        case Types.REGISTER_SUCCESS:
            return {
                ...state,
                data: payload.data,
                loading: false
            }

        case Types.REGISTER_ERROR:
            return {
                ...state,
                loading: false,
                error: true
            }

        default:
            return state
    }
}

export default subject