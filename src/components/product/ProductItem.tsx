import { useContext } from "react"
import { CartContext } from "../../context/useCart"

export default function ProductItem ({ product }: any) {
    const { setCarts } = useContext<any>(CartContext)
    return (
        <div className="py-6 px-10 border rounded-md">
            <p>{product.name}</p>
            <p>{product.price} Tk</p>
            <button className="bg-gray-400 text-gray-100 rounded-md px-4 py-2"
                onClick={() => {
                    setCarts((prev: any) => [...prev, product])
                }}
            >add to cart</button>
        </div>
    )
}