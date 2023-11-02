import { useState } from "react";
import { products } from "./products";
import "./InventoryCard";
import InventoryContainer from "./InventoryContainer";
import CartListContainer from "./CartListContainer";

export default function GroceriesApp(){

    const [cartList, setCartList] = useState([]);

    const addToCart
    
    return(
        <div className="GroceriesApp-Container">
            <h1>Groceries App</h1>
            <InventoryContainer productsArray = {products}/>
            {(cartList.length() === 0) ? <h2>Your cart is empty</h2> : <CartListContainer cartArray = {cartList} />}
       </div>
    )
}