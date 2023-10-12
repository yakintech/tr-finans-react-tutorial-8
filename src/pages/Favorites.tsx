import React, { useContext } from 'react'
import { FavoritesContext, FavoritesContextType } from '../contextSample/FavoritesContext'

function Favorites() {

    const { favorites, setFavorites } = useContext(FavoritesContext) as FavoritesContextType

    const removeFav = (id: number) => {

        var filteredFavorites = favorites.filter(q => q.id != id);
        setFavorites(filteredFavorites);

    }


    return (<>
        <h1>Length: {favorites.length}</h1>
        <ul>
            {
                favorites && favorites.map((item: any) => {
                    return <>
                        <li>{item.name}</li>
                        <button onClick={() => removeFav(item.id)}>Remove</button>
                    </>
                })
            }
        </ul>
    </>)
}

export default Favorites