import {
    CHOOSE_THE_CURRENCY, GET_ONE_PRODUCT, GET_PRODUCT,
} from "../Reducer/ActionTypes";
import axios from "axios";

export const  getProduct = (data) => {

    return async (dispatch) => {
        try {
            const res = await axios(`https://fakestoreapi.com/products/`)
            const {data} = await res
            dispatch({type: GET_PRODUCT, payload: data})
        } catch (e) {
            console.log(e)
        }
    }
}
export const  getOneProduct = (id ) => {

    return async (dispatch) => {
        try {
            const res = await axios(`https://fakestoreapi.com/products/${id}`)
            const {data} = await res
            dispatch({type: GET_ONE_PRODUCT, payload: data})
        } catch (e) {
            console.log(e)
        }
    }
}


/** currency **/
export const chooseCurrency = (e) => {
    let currency = e.target.value
    localStorage.setItem('currency', currency)
    return {type: CHOOSE_THE_CURRENCY, payload: e.target.value}
}


