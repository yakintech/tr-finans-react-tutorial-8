import axios from 'axios';
import React from 'react'
import { useForm, SubmitHandler } from "react-hook-form";


type Inputs = {
    name: string;
    unitPrice: number;
    unitsInStock: number;
    categoryId: number;
}

function AddProductPage() {

    //register input ile modeli eşleştirmek için kullanılır
    //handle submit formun submit esnasında karşılayan fonksiyon
    const { register, handleSubmit } = useForm<Inputs>()

    const addProduct: SubmitHandler<Inputs> = (data) => {

        axios.post('https://northwind.vercel.app/api/products', data)
            .then(res => {
                console.log('Response', res);
            })

    }

    return (<>

        <form onSubmit={handleSubmit(addProduct)}>
            <div>
                <label htmlFor="">Name</label>
                <input type="text" {...register('name')} />
            </div>
            <div>
                <label htmlFor="">Unit Price</label>
                <input type="text" {...register('unitPrice')} />
            </div>
            <div>
                <label htmlFor="">Stock</label>
                <input type="text" {...register('unitsInStock')} />
            </div>
            <select {...register("categoryId")}>
                <option value={1}>category-1</option>
                <option value={2}>category-2</option>
                <option value={3}>category-3</option>
            </select>
            <div>
                <button type='submit'>Add</button>
            </div>
        </form>

    </>)
}

export default AddProductPage