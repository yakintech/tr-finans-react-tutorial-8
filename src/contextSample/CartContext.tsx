import { createContext, useState } from "react";


export const CartContext = createContext<CartContextType | null>(null);

export const CartProvider = ({ children }: any) => {

    const [cart, setCart] = useState<Cart[]>([]);

    return <CartContext.Provider value={{cart, setCart}}>{children}</CartContext.Provider>

}   




export type CartContextType = {
    cart: Cart[];
    setCart: (value: Cart[]) => void
}


export interface Cart {
    id: number;
    name: string;
    quantity: number;
    unitPrice: number;
}



