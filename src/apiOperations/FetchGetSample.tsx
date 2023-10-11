import React, { useEffect, useState } from 'react'

function FetchGetSample() {

    const [products, setproducts] = useState<Product[]>([])
    const [loading, setloading] = useState<boolean>(true)

    useEffect(() => {

        fetch("https://northwind.vercel.app/api/products")
            .then(res => res.json())
            .then(data => {
                setproducts(data)
                setloading(false);
            })

    }, [])

    return (<>
        {
            loading ? <h1>Loading...</h1> : <ul>
                {
                    products.map((item: Product, key: any) => <li key={key}>{item.name}</li>)
                }
            </ul>
        }

    </>
    )
}

export default FetchGetSample

interface Product{
    name:string;
    id:number;
    unitPrice:number;
}