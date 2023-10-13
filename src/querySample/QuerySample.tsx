import axios from 'axios'
import React, { useState } from 'react'
import { useMutation, useQuery } from 'react-query'
import { queryClient } from '..';

function QuerySample() {

    const [companyName, setcompanyName] = useState('');

    //var query1 = axios.get('https://northwind.vercel.app/api/suppliers');
    //var query2 = axios.get('https://northwind.vercel.app/api/products');
    //var queries = Promise.all([query1, query2])

    const { data, isLoading, error } = useQuery('suppliers', () => {
        return axios.get('https://northwind.vercel.app/api/suppliers')
        //return hello()
        //return queries
    })

    const { data : response, isLoading : isLoading2, error : error2 } = useQuery('products', () => {
        return axios.get('https://northwind.vercel.app/api/products')
        //return hello()
        //return queries
    })



    const mutation = useMutation({
        mutationFn: (event: any) => {
            return axios.post('https://northwind.vercel.app/api/suppliers', event)
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['suppliers', 'products'] })
        }
    })

    const add = () => {
        var newSupplier = {
            companyName: companyName
        };

        mutation.mutate(newSupplier)
    }





    return (<>

        <div>
            <label htmlFor="">Company Name:</label>
            <input type='text' onChange={(e) => setcompanyName(e.target.value)} />
        </div>
        <div>
            <button onClick={add}>Add</button>
        </div>

        <ul>
            {
                data?.data.map((item: any) => <li>{item.companyName}</li>)
            }
        </ul>



    </>)
}

export default QuerySample


// async function hello() : Promise<string> {
//     //
//     //
//     //
//     return "Türkiye Finans"
// }


// hello()
//     .then(res => {
//         console.log("then response", res);

//     })
