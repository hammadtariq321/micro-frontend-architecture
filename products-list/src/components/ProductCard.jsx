import React from 'react'
import { useNavigate } from "react-router-dom";
const ProductCard = ({ data }) => {
    const navigate = useNavigate();
    return (
        <div className='border shadow p-5 m-5' onClick={() => navigate(data?.title)}>
            <h1 className='font-bold'>{data?.title}</h1>
            <p>${data?.price}</p>
        </div>
    )
}

export default ProductCard