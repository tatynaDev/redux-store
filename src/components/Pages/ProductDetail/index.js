import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getOneProduct} from "../../redux/ActionCreators/MainActions";
import {useParams} from "react-router-dom";

const ProductDetail = () => {
    const dispatch = useDispatch()
    const {currencies, defaultCurrency} = useSelector(s => s.main)
    const detail = useSelector(s => s.main.oneProduct)
    const price = detail.price
    console.log(detail)
    const {id} = useParams()
    useEffect(() => {
        dispatch(getOneProduct(id))
    }, [])

    return (
        <div className='container'>
            <div className='flex items-start justify-between mx-[70px] my-[50px]'>
                <img className='w-[100%] h-[500px]' src={detail.image} alt=""/>
                <div className='ml-[50px] mt-[20px]'>
                    <h1 className='mb-[30px] w-[300px] '><b>{detail.title}</b></h1>
                    <h2 className='mb-[30px] text-gray-600'>
                        <b>{(price * currencies[defaultCurrency]) + " " + defaultCurrency}</b></h2>
                    <p>{detail.description}</p>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;