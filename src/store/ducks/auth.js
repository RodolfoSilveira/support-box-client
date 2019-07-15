export const Types = {
    AUTH_REQUEST: 'subject/AUTH_REQUEST',
    AUTH_RESPONSE: 'subject/AUTH_RESPONSE',
    AUTH_SUCCESS: 'subject/AUTH_SUCCESS',
    AUTH_ERROR: 'subject/AUTH_ERROR',
    AUTH_ONDATA: 'subject/AUTH_ONDATA',
}

const INITIAL_STATE = {
    data: [],
    error: false,
    loading: true
}

export const Creators = {
    authorize: (email, password) => ({
        type: Types.AUTH_REQUEST,
        payload: {email, password}
    }),

    authResponse: data => ({
        type: Types.AUTH_RESPONSE,
        payload: { data }
    }),

    authData: data => ({
        type: Types.AUTH_ONDATA,
        payload: { data }
    }),

    authSuccess: data => ({
        type: Types.AUTH_SUCCESS,
        payload: { data }
    }),

    authError: () => ({
        type: Types.AUTH_ERROR
    })
}

const subject = (state = INITIAL_STATE, { type, payload }) => {
    switch (type) {        
        case Types.AUTH_RESPONSE:
            return {
                ...state,
                data: payload.data,
                loading: false,
            }
    
        case Types.AUTH_ONDATA:
            return {
                ...state,
                data: payload.data,
                loading: false,
            }

        case Types.AUTH_SUCCESS:
            return {
                ...state,
                data: payload.data,
                loading: false,
            };
    
        case Types.AUTH_ERROR:
            return {
                ...state,
                loading: false,
                error: true,
            };
    
        default:
        return state;
    }
} 

export default subject