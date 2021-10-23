import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";




const AddProducts = () => {
    const [user, setUser] = useState({});
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        // console.log(data)
        const newUser = {
            name: data?.name,
            price: data?.price,
            quantity: data?.quantity
        };
        setUser(newUser);
        console.log(user);

        const url = "http://localhost:3001/add";
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then(response => response.json())
            .then(data => {
                console.log('Success:', data);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }


    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                {/* register your input into the hook by invoking the "register" function */}
                <input type="text" {...register("name")} />

                <input type="number" {...register("price")} />

                <input type="number" {...register("quantity")} />




                {/* errors will return when field validation fails  */}
                {errors.exampleRequired && <span>This field is required</span>}

                <input type="submit" />
            </form>
        </div>
    );
};

export default AddProducts;