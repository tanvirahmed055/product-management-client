import React from 'react';
import { useParams } from 'react-router';

const UpdateProduct = () => {
    const { id } = useParams();
    return (
        <div>
            <h2>Welcome to update product</h2>
            <p>{id}</p>
        </div>
    );
};

export default UpdateProduct;