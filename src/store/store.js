import { applyMiddleware, combineReducers, createStore} from "redux";
import productsReducer from './productsReducer';
import thunkMiddleware from 'redux-thunk';


let reducers = combineReducers({
    productsPage: productsReducer,
})

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;