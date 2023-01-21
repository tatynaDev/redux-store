import React, {useState} from 'react';
import {NavLink, Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {CHANGE_CURRENCY} from "../redux/Reducer/ActionTypes";

const Header = () => {
    const {basket} = useSelector(s => s)
    const {favorites} = useSelector(s => s)
    const dispatch = useDispatch()
    // const changeCurrency = () => {
    //     dispatch({type: CHANGE_CURRENCY, payload: })
    // }
    return (
        <>
                        <header>
                            <nav className="bg-white border-gray-200 px-4 lg:px-6 py-5 dark:bg-gray-800">
                                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                                    <Link to="/" className="flex items-center">
                                        <span
                                            className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">MOTION STORE</span>
                                    </Link>
                                    <div className="flex items-center lg:order-2">
                                        <select id="countries"
                                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                            <option value="$">USA</option>
                                            <option value="rub">RUB</option>
                                            <option value="som" selected>KGS</option>
                                            <option value="tenge">KZT</option>
                                            <option value="sum">UZS</option>
                                        </select>
                                    </div>
                                    <div
                                        className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
                                        id="mobile-menu-2">
                                        <div className="header-menu flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">

                                            <NavLink to="/"
                                                     className="block py-2 pr-4 pl-3 text-gray-700 text-xl border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                                                   aria-current="page">Home</NavLink>


                                            <div className='relative'>
                                                <div className='text-[white] rounded-[50%] bg-amber-600 absolute px-1 text-[10px] right-[-14px] top-0 z-0'>{basket.length > 0 ? basket.length : ''}</div>
                                                <NavLink to="/basket"
                                                         className="block py-2 pr-4 pl-3 text-gray-700 text-xl border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                                                >Basket</NavLink>
                                            </div>

                                            <div className='relative'>
                                                <div className='text-[white] rounded-[50%] bg-amber-600 absolute px-1 text-[10px] right-[-12px] top-0 z-0'>{favorites.length > 0 ? favorites.length : ''}</div>
                                                <NavLink to="/favorites"
                                                         className="block py-2 pr-4 pl-3 text-gray-700 text-xl border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">
                                                    Favorites</NavLink>
                                            </div>


                                        </div>
                                    </div>
                                </div>
                            </nav>
                        </header>
        </>
    );
};

export default Header;