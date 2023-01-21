import React from 'react';
import Card from "../ProductCard";
import {useSelector} from "react-redux";

const Favorites = () => {
    const {favorites} = useSelector(state => state)
    return (
        <div className='container'>
            <div className='flex flex-wrap mx-5 py-6'>
                {
                    favorites.map(el => (
                        <Card product={el}/>))
                }
            </div>
        </div>
    );
};

export default Favorites;