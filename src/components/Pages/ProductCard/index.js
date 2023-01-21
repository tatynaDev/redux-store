import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import AddToBasketBtn from "../../ui/AddToBasketBtn";
import NavigateToBasketBtn from "../../ui/NavigateToBasket";
import AddToFavoritesBtn from "../../ui/AddToFavorites";
import {ADD_TO_FAVORITES} from "../../redux/Reducer/ActionTypes";
import {BsFillHeartFill} from "react-icons/bs";

const Card = ({product }) => {
    const [isLiked, setIsLiked] = useState(false)
    const dispatch = useDispatch()
    const {basket} = useSelector(s => s)
    const {defaultCurrency} = useSelector(s => s)
    const foundProduct = basket.some(el => el.id === product.id)
    const addToFavorites = (item) => {
        dispatch({type: ADD_TO_FAVORITES, payload: item})
        if (!product.isLiked){
            setIsLiked(true)
            setTimeout(() => setIsLiked(false) ,1000)
        }
    }

    return (

        <div
            className="max-w-sm basis-1/4 m-4 bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
            <div className='relative'>
                <img onDoubleClick={() => addToFavorites(product)}
                     className="rounded-t-lg" src={product.image} alt=""/>
                 <BsFillHeartFill className={`absolute top-[50%] left-[45%] transition-[.1s] ${isLiked ? 'scale-1' : 'scale-0'} rotate-[-20deg] text-red-500 text-4xl`}/>

            </div>


            <div className="p-5 text-center">
                <a href="#">
                    <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">{product.title}</h5>
                </a>
                <p className="mb-3 text-[15px] font-normal text-gray-700 dark:text-gray-400">{product.description}</p>
                <p className="mb-3 text-[17px] font-normal text-gray-300 dark:text-gray-400">{product.price + " " + defaultCurrency}</p>

               <div className='flex items-center justify-evenly'>
                   <AddToFavoritesBtn  product={product}/>

                   {
                       foundProduct ?
                           <NavigateToBasketBtn/>
                           :
                           <AddToBasketBtn product={product}/>
                   }
               </div>
            </div>
        </div>

    );
};

export default Card;