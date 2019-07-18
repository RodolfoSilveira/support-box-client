export const Types = {
    LOGOUT_REQUEST: 'subject/LOGOUT_REQUEST',
    LOGOUT_REPONSE: 'subject/LOGOUT_RESPONSE',
    LOGOUT_ONDATA: 'subject/LOGOUT_ONDATA',
    LOGOUT_SUCCESS: 'subject/LOGOUT_SUCCESS',
    LOGOUT_ERROR: 'subject/LOGOUT_ERROR',
}

const INITAL_STATE = {
    loading: false,
    error: false
}

export const Creators = {
    logout: () => ({
        type: Types.LOGOUT_REQUEST
    }),

    logoutSuccess: () => ({
        type: Types.LOGOUT_SUCCESS
    }),

    logoutError: () => ({
        type: Types.LOGOUT_ERROR
    })
}

const subject = ( state = INITAL_STATE, { type }) => {
    switch(type) {
        case Types.LOGOUT_REPONSE:
            return {
                ...state,
                loading: false
            }

        case Types.LOGOUT_ONDATA:
            return {
                ...state,
                loading: false
            }

        case Types.LOGOUT_SUCCESS:
            return {
                ...state,
                loading: false
            }

        case Types.LOGOUT_ERROR:
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