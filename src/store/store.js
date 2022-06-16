import { applyMiddleware, combineReducers, createStore} from "redux";
import productsReducer from './productsReducer';
import profileReducer from './profileReducer';
import thunkMiddleware from 'redux-thunk';


let reducers = combineReducers({
    productsPage: productsReducer,
    profile: profileReducer,
})

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;