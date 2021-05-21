import {combineReducers, createStore} from "react-redux";
import reducerProductPage from './productReducer';

let reducers = combineReducers({
    productPage: reducerProductPage,
});

let store = createStore(reducers)

export default store;