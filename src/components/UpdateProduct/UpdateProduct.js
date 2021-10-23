import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { useForm } from "react-hook-form";


const UpdateProduct = () => {
    const { id } = useParams();
    const [product, setProduct] = useState({});


    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    useEffect(() => {
        fetch(`http://localhost:3001/products/${id}`)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [])


    const onSubmit = data => {
        console.log(data);


        const url = `http://localhost:3001/update/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }

    return (
        <div>
            <h2>Welcome to update product</h2>
            <p>{id}</p>

            <h2>Product ID: {product?._id}</h2>
            <h2>Product name: {product?.name}</h2>
            <h2>Product price: {product?.price}</h2>
            <h2>Product quantity: {product?.quantity}</h2>

            <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    {/* register your input into the hook by invoking the "register" function */}
                    <input type="text"  {...register("name")} />

                    <input type="number"  {...register("price")} />

                    <input type="number" {...register("quantity")} />




                    {/* errors will return when field validation fails  */}
                    {errors.exampleRequired && <span>This field is required</span>}

                    <input type="submit" />
                </form>
            </div>
        </div>
    );
};

export default UpdateProduct;