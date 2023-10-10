import React from 'react'
import { ProductModel } from './ProductModel'

function ProductDetail(props: ProductModel) {


    return (<>
        <h1>{props.name}</h1>
        <h1>{props.price}</h1>
        <h1>{props.stock}</h1>
        <ul>
            {
                props.points?.map((item) => <li>{item}</li>)
            }
        </ul>

    </>
    )
}

export default ProductDetail

//props, state, effect



