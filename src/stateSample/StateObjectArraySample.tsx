import React, { useState } from 'react'
import { categoriesData } from '../data/categoriesData'
import { productsData } from '../data/productsData';

function StateObjectArraySample() {

    const [categories, setcategories] = useState(categoriesData);

    const deleteItem = (id: number) => {

        let filteredCategories = categories.filter(q => q.id != id)

        setcategories(filteredCategories);

    }

    return (<>
        <button onClick={() => setcategories(categoriesData)}>Refresh</button>
        
        <h1>Length: {categories.length}</h1>
        <ul>
            {
                categories && categories.map((item) => {
                    return <li style={{ cursor: 'pointer' }} onClick={() => deleteItem(item.id)}>{item.name}</li>
                })
            }
        </ul>

    </>)
}

export default StateObjectArraySample


// var filteredProducts = productsData.filter(q => q.unitPrice > 10 && q.unitPrice < 50)
// var filteredProducts2 = productsData.filter(q => q.name.startsWith('A'))
// var filteredProducts3 = productsData.filter(q => q.name.includes('a'))
