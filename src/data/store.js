import {combineReducers, createStore} from "redux";
import reducerBeerPage from './beerReducer';
import setProductReducer from "./setProductReducer";
import reducerSnacksPage from "./snacksRedicer";

let reducers = combineReducers({
    beerPage: reducerBeerPage,
    snacksPage: reducerSnacksPage,
    presentPage: setProductReducer
});

let store = createStore(reducers)
console.log(store.getState())
export default store;