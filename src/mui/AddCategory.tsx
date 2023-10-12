import { TextField, Button } from '@mui/material';
import axios from 'axios';
import React, { useState } from 'react'

function AddCategory() {

    const [name, setName] = useState<string>("");
    const [description, setDescription] = useState<string>("");

    const add = () => {
        var newCategory = {
            name,
            description
        }

        axios.post('https://northwind.vercel.app/api/categories', newCategory)
            .then(res => {
                alert('Success')
            })
    }

    return (<>
        <div>
            <label>Name: </label>
            <TextField value={name} variant='outlined' onChange={(e) => setName(e.target.value)} />
        </div>
        <div>
            <label>Description: </label>
            <TextField value={description} variant='outlined' onChange={(e) => setDescription(e.target.value)} />
        </div>
        <div>
            <Button variant='outlined' onClick={add}>Add</Button>
        </div>
    </>
    )
}

export default AddCategory