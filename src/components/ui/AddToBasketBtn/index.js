import React from 'react';
import {useDispatch} from "react-redux";
import {ADD_TO_BASKET} from "../../redux/Reducer/ActionTypes";

const AddToBasketBtn = ({product}) => {
    const dispatch = useDispatch()
    const addToBasket = (product) => {
        dispatch({type: ADD_TO_BASKET, payload: product})
    }
    return (
        <button onClick={() => addToBasket(product)}
                className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
            Add to basket
        </button>
    );
};

export default AddToBasketBtn;