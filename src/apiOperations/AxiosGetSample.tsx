import axios from 'axios';
import React, { useEffect, useState } from 'react'

function AxiosGetSample() {

    const [categories, setcategories] = useState([]);

    useEffect(() => {

        axios.get('https://northwind.vercel.app/api/categories')
            .then(res => {
                setcategories(res.data)
            })
            .catch(err => {
                console.log('Er', err);
            })
    }, [])


    return (<>
        <ul>
            {
                categories && categories.map((item : any) => <li>{item.name}</li>)
            }
        </ul>
    </>
    )
}

export default AxiosGetSample