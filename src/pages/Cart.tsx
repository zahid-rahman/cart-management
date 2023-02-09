import { useContext } from "react"
import { CartContext } from "../context/useCart"

export default function Cart() {
    const { carts } = useContext<any>(CartContext)

    return (
        <>
            <ul>
                {carts.map((cart: any, index: number) => {
                    console.log(cart)
                    return (
                        <li key={index}>{cart.name}: price {cart.price}</li>
                    )
                })}

            </ul>
        </>
    )
}