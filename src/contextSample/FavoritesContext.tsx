import { createContext, useState } from "react";


export const FavoritesContext = createContext<FavoritesContextType | null>(null);


export const FavoritesProvider = ({ children } : any) => {

    //GLOBAL STATE DEĞERLERİMİ TANIMLIYORUM!
    const [favorites, setFavorites] = useState<any[]>([]);

    return <FavoritesContext.Provider value={{favorites, setFavorites}}>{children}</FavoritesContext.Provider>

}


export type FavoritesContextType = {
    favorites: any[];
    setFavorites: (value: any[]) => void
}