import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/useCart";

export default function Layout ({ children }: any) {
    const { carts } = useContext<any>(CartContext)
    return (
        <>
            <div className="w-1/2 ml-auto">
                total product  
                <span className="ml-2 text-sm">{carts?.length}</span>
                <Link to="/cart" className="ml-5">view cart</Link>
                <Link to="/" className="ml-5">homepage</Link>
            </div>
            {children}
        </>
    )
}