import React from 'react';
import BasketTable from "./BasketTable";
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";

const Basket = () => {

    const {basket} = useSelector(s => s.basket)
    return (

        <div className='container'>
            <div className="relative my-14 overflow-x-auto">
                {
                    basket.length ? <BasketTable/> :
                        <Link to={'/'}>
                            <div
                                className='py-[30px] flex dark:bg-gray-800 text-gray-100 rounded items-center justify-center w-[30%]'
                            >ADD PRODUCT +
                            </div>
                        </Link>
                }

            </div>
        </div>

    );
};

export default Basket;