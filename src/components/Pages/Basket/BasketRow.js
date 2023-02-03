import React from 'react';
import {FcEmptyTrash} from "react-icons/fc";
import {AiOutlineMinus, AiOutlinePlus} from "react-icons/ai";
import {useDispatch, useSelector} from "react-redux";
import {addToBasket, deleteFromBasket, increaseQuantity} from "../../redux/ActionCreators/BasketActions";
import {Link} from "react-router-dom";

const BasketRow = ({el}) => {
    const {currencies, defaultCurrency} = useSelector(s => s.main)

    const dispatch = useDispatch()


    return (

        <tr className="bg-white dark:bg-gray-800">
            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {el.title}
            </th>
            <td className="px-6 py-4 ">
                <Link to={'/'}><img src={el.image} width={45} alt=""/></Link>
            </td>
            <td className="px-6 py-4 flex items-center">
                    <span onClick={() => dispatch(increaseQuantity(el.id))}
                          className={`mx-2 cursor-pointer text-xl ${el.quantity > 1 ? "text-blue-600" : 'opacity-50'}`}><AiOutlineMinus/></span>
                {el.quantity}
                <span onClick={() => dispatch(addToBasket(el))}
                      className='mx-2 cursor-pointer text-xl text-blue-600'><AiOutlinePlus/></span>
            </td>
            <td className="px-6 py-4">
                {el.price * el.quantity * currencies[defaultCurrency]}
            </td>
            <td onClick={() => dispatch(deleteFromBasket(el.id))}
                className="mx-6 my-4 text-xl">
                <FcEmptyTrash className=' cursor-pointer'/>
            </td>
        </tr>

    );
};

export default BasketRow;