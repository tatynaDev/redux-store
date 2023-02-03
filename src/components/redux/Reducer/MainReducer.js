import {
    ADD_and_DELETE_FAVORITES,
    ADD_TO_BASKET,
    ADD_TO_FAVORITES, CHOOSE_THE_CURRENCY,
    DELETE_FROM_BASKET, GET_ONE_PRODUCT,
    GET_PRODUCT,
    INCREASE_QUANTITY,
} from "./ActionTypes";

const initialState = {
    product: [],
    oneProduct: {},
    currencies: {
        $ : 1,
        rub : 68,
        som :  86,
        tenge : 462,
        sum : 11290,
    },
    defaultCurrency: localStorage.getItem('currency') || 'som'
}

export const MainReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_PRODUCT : {
            return {...state, product: action.payload}
        }
        case GET_ONE_PRODUCT:{
            return {...state, oneProduct:  action.payload}
        }
        case CHOOSE_THE_CURRENCY:{
            return {...state, defaultCurrency: action.payload}
        }

        default:
            return state
    }
}