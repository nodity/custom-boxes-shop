import { applyMiddleware, combineReducers, createStore} from "redux";
import productsReducer from './productsReducer';
import profileReducer from './profileReducer';
import thunkMiddleware from 'redux-thunk';
import appReducer from "./appReducer";


let reducers = combineReducers({
    productsPage: productsReducer,
    profile: profileReducer,
    app: appReducer,
})

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;