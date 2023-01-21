import {
    ADD_and_DELETE_FAVORITES,
    ADD_TO_BASKET,
    ADD_TO_FAVORITES, CHANGE_CURRENCY,
    DELETE_FROM_BASKET,
    GET_PRODUCT,
    INCREASE_QUANTITY,
} from "./ActionTypes";

const initialState = {
    product: [],
    favorites: [],
    basket: [],
    currency: {
        $ : 0.012,
        rub : 0.79,
        som :  1,
        tenge : 5.38,
        sum : 131.36,
    },
    defaultCurrency: 'som'
}

export const Reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_PRODUCT : {
            return {...state, product: action.payload}
        }

        case ADD_TO_BASKET : {
            const found = state.basket.find(el => el.id === action.payload.id)

            if (found) {
                return {
                    ...state, basket: state.basket.map(el => el.id === action.payload.id ?
                        {...el, quantity: el.quantity + 1} : el
                    )
                }
            }
            return {...state, basket: [...state.basket, {...action.payload, quantity: 1}]}
        }

        case INCREASE_QUANTITY : {
            return {
                ...state, basket: state.basket.map(el => {
                        if (el.id === action.payload) {
                            if (el.quantity > 1) {
                                return {...el, quantity: el.quantity - 1}
                            } else return el
                        } else return el
                    }
                )
            }
        }

        case DELETE_FROM_BASKET: {
            return {...state, basket: state.basket.filter(el => el.id !== action.payload)}
        }

        case ADD_and_DELETE_FAVORITES:{
            const found = state.favorites.find(el => el.id === action.payload.id)
            if (found) {
                return {...state, favorites: state.favorites.filter(el => el.id !== action.payload.id)}
            }else{
                return {...state, favorites: [...state.favorites, {...action.payload, isLiked:true }]}
            }

        }

        case ADD_TO_FAVORITES:{
            const found = state.favorites.find(el => el.id === action.payload.id)
            if (!found) {
                return {...state, favorites: [...state.favorites, {...action.payload, isLiked: true}]}
            } return state
        }

        case CHANGE_CURRENCY:{
            return {...state, }
        }

        default:
            return state
    }
}