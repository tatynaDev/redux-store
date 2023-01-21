import React from 'react';
import BasketRow from "./BasketRow";
import {useSelector} from "react-redux";

const BasketTable = () => {
    const {basket} = useSelector(s => s)
    const totalPrice = basket.reduce((acc, el) => {
        acc += el.price * el.quantity
        return acc
    }, 0)

    return (
        <>
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th scope="col" className="px-6 py-3 rounded-l-lg">
                        Product name
                    </th>

                    <th scope="col" className="px-6 py-3">
                        Image
                    </th>

                    <th scope="col" className="px-6 py-3">
                        Quantity
                    </th>

                    <th scope="col" className="px-6 py-3">
                        Price
                    </th>
                    <th scope="" className="px-6 py-3 rounded-r-lg">

                    </th>
                </tr>
                </thead>
                <tbody>
                {
                    basket.map(el => <BasketRow el={el}/>)
                }
                </tbody>
                <tfoot>
                <tr className="bg-white dark:bg-gray-600">
                    <th scope="row" className="px-6 py-3 text-base">Total:</th>
                    <td className="px-6 py-3">

                    </td>
                    <td className="px-6 py-3"></td>
                    <td className="px-6 py-3">{totalPrice}</td>
                    <td className="px-6 py-3"></td>
                </tr>
                </tfoot>
            </table>

        </>
    );
};

export default BasketTable;