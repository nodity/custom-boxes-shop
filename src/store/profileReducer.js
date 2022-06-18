const SET_LOGIN = 'customBox/profile/SET_LOGIN';
const SET_LOGOUT = 'customBox/profile/SET_LOGOUT';
const ADD_PRODUCT = 'customBox/profile/ADD_PRODUCT';
const REMOVE_PRODUCT = 'customBox/profile/REMOVE_PRODUCT';
const ADD_PRODUCT_COUNT = 'customBox/profile/ADD_PRODUCT_COUNT';

let initialState = {
    profile: {
        username: 'nodity',
        password: '12345',
        cart: [],
    },
    cartLen: 0,
    isLogIn: false,
}

// FIND INDEX OF SOME OBJECT IN ARRAY BY OBJECT.ID 
export const FindIndexById = (arr, id) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].id == id) {
            return i
        }
    }
}

// ONLY IF OBJECT.NAME IN OBJECT IS UNIQUE FOR INPUT ARRAY
export const FindIndexByName = (arr, name) => { 
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].name == name) {
            return i
        }
    }
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
        case ADD_PRODUCT: {

            console.log(action.product)
            let newLen = state.cartLen + 1

            return {
                ...state,
                ...state.profile,
                ...state.profile.cart.push(action.product),
                cartLen: newLen,
            }
        }
        case REMOVE_PRODUCT: {

            let index = FindIndexByName([...state.profile.cart], action.name)

            let newLen = state.cartLen - 1

            return {
                ...state,
                ...state.profile,
                ...state.profile.cart.splice(index, 1),
                cartLen: newLen,
            }
        }
        case ADD_PRODUCT_COUNT: {

            let index = FindIndexById(state.profile.cart, action.id)

            return {
                ...state,
                ...state.profile,
                ...state.profile.cart,
                ...state.profile.cart[index].count += action.count
            }
        }
        default:
            return state
    }
}

export const setLogin = () => ({ type: SET_LOGIN })
export const setLogout = () => ({ type: SET_LOGOUT })
export const addNewProduct = (product) => ({ type: ADD_PRODUCT, product })
export const addProductCount = (id, count) => ({ type: ADD_PRODUCT_COUNT, id, count })
export const removeProduct = (name) => ({ type: REMOVE_PRODUCT, name })


// export const setAuthThunk = () => {
//     return (dispatch) => {
//         dispatch(setLogin())
//     }
// }

export default profileReducer;

