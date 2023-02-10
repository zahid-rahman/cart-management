import { useContext, useEffect, useState } from "react"
import { CartContext } from "../context/useCart"

export default function Cart() {
    const { carts, setCarts } = useContext<any>(CartContext)
    const [productName, setProductName] = useState<string>("");

    useEffect(() => {
        if (productName) {
            const data = carts.filter((cart: any) => cart.name !== productName);
            console.log("item", data)
            setCarts([...data])
            setProductName("")
        }
    }, [carts, productName, setCarts])

    return (
        <>
            <button className="bg-blue-500 text-white px-4 py-0.5 hover:bg-blue-700 transition hover:duration-700" onClick={() => {
                setCarts([])
            }}>clear cart</button>
            <ul>
                {carts.map((cart: any, index: number) => {
                    return (
                        <li key={index} className="my-3"><span>{cart.name}: price {cart.price}</span>
                            <button className="bg-red-500 ml-3 text-white px-3 py-0.5 hover:bg-red-700 transition hover:duration-700"
                                onClick={() => {
                                    setProductName(cart.name);
                                    const data = carts.filter((cart: any) => cart.name !== productName);
                                    console.log("item", data)
                                    setCarts([...data])
                                }}
                            >
                                delete
                            </button>
                        </li>
                    )
                })}

            </ul>
        </>
    )
}