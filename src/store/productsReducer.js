import carton from './../img/carton.png';
import boxes from './../img/boxes.png';
import poly from './../img/poly.png';
import tape from './../img/tape.png';
import stickers from './../img/stickers.png';
import paper from './../img/paper.png';
import product1 from './../img/product1.png';

import { FindIndexByName } from './profileReducer';

const SET_IS_IN_CART = 'customBox/product/SET_IS_IN_CART'
const REMOVE_FROM_CART = 'customBox/product/REMOVE_FROM_CART'

let initialState = {
    products: [
        { id: 0, isInCart: false, img: carton, name: 'Custom Carton Boxes', price: 10.44, desc: 'Create a clean brand presentation with this custom carton box.' },
        { id: 1, isInCart: false, img: boxes, name: 'Custom Boxes', price: 12.31, desc: 'A stylish and strong corrugated cardboard box.' },
        { id: 2, isInCart: false, img: poly, name: 'Custom Poly Mailers', price: 5.5, desc: 'A fully custom high quality self sealing poly mailer.' },
        { id: 3, isInCart: false, img: tape, name: 'Custom Tape', price: 12.16, desc: 'High quality custom tape to seal your shipping boxes during delivery.' },
        { id: 4, isInCart: false, img: stickers, name: 'Custom Stickers', price: 0.41, desc: 'Add personality to your packages with custom stickers.' },
        { id: 5, isInCart: false, img: paper, name: 'Custom Tissue Paper', price: 6.54, desc: 'The perfect addition to branding your package.' },
        { id: 6, isInCart: false, img: product1, name: 'Custom Tissue Paper (Lite)', price: 3.54, desc: 'High quality custom tape to seal your shipping boxes during delivery.' },
        { id: 7, isInCart: false, img: product1, name: 'Custom Tissue Paper (Lite++)', price: 4.54, desc: 'The perfect addition to branding your package.' },
    ]
}

const productsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_IS_IN_CART: {
            return {
                ...state,
                ...state.products,
                ...state.products[action.id].isInCart = true
            }
        }
        case REMOVE_FROM_CART: {
            
            let index = FindIndexByName(state.products, action.name)

            return {
                ...state,
                ...state.products,
                ...state.products[index].isInCart = false
            }
        }
        default:
            return state
    }
}

export const setIsInCart = (id) => ({ type: SET_IS_IN_CART, id })
export const removeFromCart = (name) => ({type: REMOVE_FROM_CART, name})

export default productsReducer;