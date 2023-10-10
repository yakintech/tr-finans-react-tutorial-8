import React, { useState } from 'react'
import { categoriesData } from '../data/categoriesData'

function StateObjectArraySample() {

    const [categories, setcategories] = useState(categoriesData);

    const deleteItem = (id: number) => {

        let filteredProducts = categories.filter(q => q.id != id)

        setcategories([...filteredProducts]);

    }

    return (<>
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