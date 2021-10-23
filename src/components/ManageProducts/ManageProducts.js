import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";



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
                products.map(product => <li key={product._id}>Product ID: {product._id} Name:{product?.name} Price:{product?.price} Quantity: {product?.quantity}<button onClick={() => { handleDelete(product._id) }}>delete</button>
                    <Link to={`/products/update/${product._id}`} ><button>Update</button></Link></li>)
            }
        </div>
    );
};

export default ManageProducts;