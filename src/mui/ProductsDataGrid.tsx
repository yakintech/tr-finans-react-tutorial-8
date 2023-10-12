import { Button } from '@mui/material'
import { DataGrid, GridColDef, trTR } from '@mui/x-data-grid'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

function ProductsDataGrid() {

    const [products, setproducts] = useState([]);
    const [loading, setloading] = useState(true)

    useEffect(() => {

        loadProducts();

    }, [])

    const loadProducts = () => {
        axios.get('https://northwind.vercel.app/api/products')
        .then(res => {
            setproducts(res.data)
            setloading(false)
        })
    }


    const deleteProduct = (item : any) => {

        setloading(true)
        var id = item.row?.id;

        axios.delete(`https://northwind.vercel.app/api/products/${id}`)
        .then(res => {
            loadProducts();
        })

        

    }

    const columns: GridColDef[] = [
        {
            field: 'id',
            headerName: 'Product ID',
            width: 200
        },
        {
            field: 'name',
            headerName: 'Name',
            width: 400
        },
        {
            field: 'unitPrice',
            headerName: 'Price',
            width: 200
        },
        {
            field: 'Delete',
            headerName: 'Delete',
            width: 200,
            renderCell: (item) => <Button onClick={() => deleteProduct(item)} variant='contained' color='error'>Delete</Button>
        }
    ]

    //rows = DataSource
    return (<>
    <h1>Hello</h1>
        <div style={{ height: 500, width: '100%' }}>
            <DataGrid localeText={trTR.components.MuiDataGrid.defaultProps.localeText} 
                rows={products}
                columns={columns}
                loading={loading}
            />
        </div>
    </>)
}

export default ProductsDataGrid