import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {BsFillHeartFill} from "react-icons/bs";
import {FcEmptyTrash} from "react-icons/fc";
import {addToFavorites} from "../../redux/ActionCreators/FavoritesActions";

const AddToFavoritesBtn = ({product}) => {
    const dispatch = useDispatch()
    const {favorites} = useSelector(s => s.favorites)

    const found = favorites.some(el => el.id === product.id)
    return (
        <button onClick={() => dispatch(addToFavorites(product) )}
                className={`${found ? 'text-red-600' : 'text-white'} bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2`}>
            {
                product.isLiked ? <FcEmptyTrash/> : <BsFillHeartFill/>
            }
        </button>
    );
};

export default AddToFavoritesBtn;