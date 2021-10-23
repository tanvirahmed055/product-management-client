import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';

const UpdateProduct = () => {
    const { id } = useParams();
    const [product, setProduct] = useState({});

    useEffect(() => {
        fetch(`http://localhost:3001/products/${id}`)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [])
    return (
        <div>
            <h2>Welcome to update product</h2>
            <p>{id}</p>

            <h2>Product ID: {product?._id}</h2>
            <h2>Product name: {product?.name}</h2>
            <h2>Product price: {product?.price}</h2>
            <h2>Product quantity: {product?.quantity}</h2>

        </div>
    );
};

export default UpdateProduct;