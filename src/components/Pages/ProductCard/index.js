import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import AddToBasketBtn from "../../ui/AddToBasketBtn";
import NavigateToBasketBtn from "../../ui/NavigateToBasket";
import AddToFavoritesBtn from "../../ui/AddToFavorites";
import {BsFillArrowRightCircleFill, BsFillHeartFill} from "react-icons/bs";
import {likedToBasket} from "../../redux/ActionCreators/FavoritesActions";
import {Link} from "react-router-dom";

const Card = ({product}) => {
    const [isLiked, setIsLiked] = useState(false)
    const dispatch = useDispatch()
    const {currencies, defaultCurrency} = useSelector(s => s.main)
    const {basket} = useSelector(s => s.basket)
    const foundProduct = basket.some(el => el.id === product.id)

    const likeFn = () => {
        dispatch(likedToBasket(product))
        if (!product.isLiked) {
            setIsLiked(true)
            setTimeout(() => setIsLiked(false), 1000)
        }
    }

    return (

        <div
            className="max-w-sm basis-1/4 m-4 bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
            <div className='relative'>
                <img onDoubleClick={likeFn}
                     className="rounded-t-lg w-[100%] h-[350px]" src={product.image} alt=""/>
                <BsFillHeartFill
                    className={`absolute top-[50%] left-[45%] transition-[.1s] ${isLiked ? 'scale-1' : 'scale-0'} rotate-[-20deg] text-red-500 text-4xl`}/>

            </div>


            <div className="p-5 text-center">
                <a href="#">
                    <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">{product.title}</h5>
                </a>
                <p className="mb-3 text-[17px] font-normal text-gray-300 dark:text-gray-400">{(product.price * currencies[defaultCurrency]) + " " + defaultCurrency}</p>

                <div className='flex items-center justify-evenly'>
                    <AddToFavoritesBtn product={product}/>

                    {
                        foundProduct ?
                            <NavigateToBasketBtn/>
                            :
                            <AddToBasketBtn product={product}/>
                    }
                </div>

                <Link to={`/${product.id}`} className='flex items-center text-justify '><span
                    className='text-gray-100'>view</span><span
                    className='text-gray-100 m-1'><BsFillArrowRightCircleFill/></span></Link>

            </div>
        </div>

    );
};

export default Card;