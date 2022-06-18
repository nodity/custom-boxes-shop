const ADD_MAIL = 'customBox/app/ADD_MAIL';

let initialState = {
    mails: []

}

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MAIL: {
            return {
                ...state,
                ...state.mails.push(action.mail), 
            }
        }
        default :
            return state
    }
}

export const addMail = (mail) => ({type: ADD_MAIL, mail})

export default appReducer;