import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import Card from "../ProductCard";
import {getProduct} from "../../redux/ActionCreators/MainActions";

const Products = () => {
    const dispatch = useDispatch()
    const {product} = useSelector(s => s.main)


    useEffect(() => {
        dispatch(getProduct())
    }, [])

    return (
        <div className='container'>
            <div className='flex flex-wrap justify-between py-6'>
                {
                    product.map(el => (
                        <Card product={el}/>))
                }
            </div>
        </div>
    );
};

export default Products;