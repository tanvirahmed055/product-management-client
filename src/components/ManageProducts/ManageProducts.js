import React, { useState, useEffect } from 'react';

const ManageProducts = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3001/products')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [])

    const handleDelete = async (id) => {

        const url = `http://localhost:3001/users/${id}`;
        fetch(url, {
            method: 'DELETE',
        })
    }
    return (
        <div>
            <h2>All Products</h2>
            {
                products.map(product => <li>Name:{product?.name} Price:{product?.price} Quantity: {product?.quantity}<button onClick={() => { handleDelete(product._id) }}>delete</button>
                    {product._id}</li>)
            }
        </div>
    );
};

export default ManageProducts;