const SET_LOGIN = 'customBox/profile/SET_LOGIN';
const SET_LOGOUT = 'customBox/profile/SET_LOGOUT';

let initialState = {
    profile: {
        username: 'nodity',
        password: '12345',
    },
    isLogIn: false,
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_LOGIN: {
            return {
                ...state,
                isLogIn: true,
            }
        }
        case SET_LOGOUT: {
            return {
                ...state,
                isLogIn: false,
            }
        }
        default:
            return state
    }
}

export const setLogin = () => ({type: SET_LOGIN})
export const setLogout = () => ({type: SET_LOGOUT})


export const setAuthThunk = () => {
    return (dispatch) => {
        dispatch(setLogin())
    }
}

export default profileReducer;

