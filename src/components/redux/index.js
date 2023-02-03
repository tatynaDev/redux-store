import {createStore, combineReducers, applyMiddleware} from "redux";
import {MainReducer} from "./Reducer/MainReducer";
import {composeWithDevTools} from "redux-devtools-extension";
import {BasketReducer} from "./Reducer/BasketReducer";
import {FavoritesReducer} from "./Reducer/FavoritesReducer";
import thunk from "redux-thunk";


export const store = createStore(combineReducers({
    main: MainReducer,
    basket: BasketReducer,
    favorites: FavoritesReducer,
}), composeWithDevTools(applyMiddleware(thunk )))