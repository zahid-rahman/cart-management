import { createContext, useState } from "react";

export const CartContext: any = createContext([] as any);

export function CartContextProvider ({ children }: any) {
    const [carts, setCarts] = useState([]);
    return (
        <CartContext.Provider value={{ carts, setCarts }}>
            {children}
        </CartContext.Provider>
    )
}
