import carton from './../img/carton.png';
import boxes from './../img/boxes.png';
import poly from './../img/poly.png';
import tape from './../img/tape.png';
import stickers from './../img/stickers.png';
import paper from './../img/paper.png';
import product1 from './../img/product1.png';

let initialState = {
    products: [
        {id: 1, img: carton, name: 'Custom Carton Boxes', price: 10.44, desc: 'Create a clean brand presentation with this custom carton box.'},
        {id: 2, img: boxes, name: 'Custom Boxes', price: 12.31, desc: 'A stylish and strong corrugated cardboard box.'},
        {id: 3, img: poly, name: 'Custom Poly Mailers', price: 5.5, desc: 'A fully custom high quality self sealing poly mailer.'},
        {id: 4, img: tape, name: 'Custom Tape', price: 12.16, desc: 'High quality custom tape to seal your shipping boxes during delivery.'},
        {id: 5, img: stickers, name: 'Custom Stickers', price: 0.41, desc: 'Add personality to your packages with custom stickers.'},
        {id: 6, img: paper, name: 'Custom Tissue Paper', price: 6.54, desc: 'The perfect addition to branding your package.'},
        {id: 7, img: product1, name: 'Custom Tissue Paper (Lite)', price: 3.54, desc: 'High quality custom tape to seal your shipping boxes during delivery.'},
        {id: 8, img: product1, name: 'Custom Tissue Paper (Lite++)', price: 4.54, desc: 'The perfect addition to branding your package.'},
    ]
}

const productsReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state
    }
}

export default productsReducer;