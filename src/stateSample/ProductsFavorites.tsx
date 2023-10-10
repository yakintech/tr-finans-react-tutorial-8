import React, { useRef, useState } from 'react'
import { productsData } from '../data/productsData'

function ProductsFavorites() {

    const [products, setproducts] = useState(productsData);
    const [favorites, setfavorites] = useState<any[]>([]);


    var ref = useRef(null)

    const add = (name: string, price: number, stock: number) => {


        //ürünümün favorilerde olup olmadığını kontrol ediyorum. Eğer ürün favorilerde varsa ekleme yapmayacağım. Yoksa ekleyeceğim.

        var product = favorites.find(q => q.id == item.id)

        // if(product == undefined){
        if (!product) {
            setfavorites([...favorites, item])
        }
    }


    const removeFav = (item: any) => {

        var filteredFavorites = favorites.filter(q => q.id != item.id);

        setfavorites(filteredFavorites)

    }

    return (<>

        <div style={{ display: 'flex', justifyContent: 'space-between' }}>

            <ul>
                {
                    products && products.map(item => {
                        return <>
                            <li>{item.name}   <button onClick={() => add(item)}>Add</button> </li>
                            <span ref={ref}>{item.unitsInStock}</span>


                        </>
                    })
                }
            </ul>

            <hr />

            <div>
                <h1>Favorites: {favorites.length}</h1>
                <ul>
                    {
                        favorites && favorites.map((item: any) => {
                            return <>
                                <li>{item.name}</li>
                                <button onClick={() => removeFav(item)}>Remove</button>
                            </>
                        })
                    }
                </ul>
            </div>



        </div>

    </>
    )
}

export default ProductsFavorites


//FILTER, FIND