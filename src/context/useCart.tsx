import { createContext, useEffect, useState } from "react";

export const CartContext: any = createContext([] as any);

export function CartContextProvider ({ children }: any) {
    const persistCartData = localStorage.getItem('persist-cart-data')
    const [carts, setCarts] = useState(persistCartData ? JSON.parse(persistCartData): null);

    useEffect(() => {
        localStorage.setItem('persist-cart-data', JSON.stringify(carts));
    }, [carts])

    return (
        <CartContext.Provider value={{ carts, setCarts }}>
            {children}
        </CartContext.Provider>
    )
}
