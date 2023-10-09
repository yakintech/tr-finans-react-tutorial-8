import React from 'react'

function ProductDetail(props: any) {


    return (<>
        <h1>{props.name}</h1>
        <h1>{props.price}</h1>
        <h1>{props.stock}</h1>

    </>
    )
}

export default ProductDetail





