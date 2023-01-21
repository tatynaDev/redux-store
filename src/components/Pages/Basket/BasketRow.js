import React from 'react';
import {FcEmptyTrash} from "react-icons/fc";
import {AiOutlineMinus, AiOutlinePlus} from "react-icons/ai";
import {useDispatch} from "react-redux";
import {ADD_TO_BASKET, DELETE_FROM_BASKET, INCREASE_QUANTITY} from "../../redux/Reducer/ActionTypes";

const BasketRow = ({el}) => {
    const deleteFromBasket = (id) => {
        dispatch({type: DELETE_FROM_BASKET, payload: id})
    }
    const dispatch = useDispatch()

    const increaseQuantity = (id) => {
        dispatch({type: INCREASE_QUANTITY, payload: id})
    }

    const decreaseQuantity = (product) => {
        dispatch({type: ADD_TO_BASKET, payload: product})
    }

    return (

            <tr className="bg-white dark:bg-gray-800">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {el.title }
                </th>
                <td className="px-6 py-4 ">
                    <img src={el.image} width={45} alt=""/>
                </td>
                <td className="px-6 py-4 flex items-center">
                    <span onClick={() => increaseQuantity(el.id)}
                        className={`mx-2 cursor-pointer text-xl ${el.quantity > 1 ? "text-blue-600" : 'opacity-50'}`}><AiOutlineMinus/></span>
                    {el.quantity}
                    <span onClick={() => decreaseQuantity(el)}
                        className='mx-2 cursor-pointer text-xl text-blue-600'><AiOutlinePlus/></span>
                </td>
                <td className="px-6 py-4">
                    ${el.price * el.quantity}
                </td>
                <td onClick={() => deleteFromBasket(el.id)}
                    className="mx-6 my-4 text-xl">
                    <FcEmptyTrash className=' cursor-pointer'/>
                </td>
            </tr>

    );
};

export default BasketRow;