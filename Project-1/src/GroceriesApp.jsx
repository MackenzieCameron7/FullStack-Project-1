import { useState } from "react";
import { products } from "./products";
import "./InventoryCard";
import InventoryContainer from "./InventoryContainer";
import CartListContainer from "./CartListContainer";

export default function GroceriesApp(){

    const [cartList, setCartList] = useState([]);

    function addToCart({id, productName, productPrice}){
        return setCartList((prevCart) => [...prevCart, {id, productName, productPrice}])
    }

    return(
        <div className="GroceriesApp-Container">
            <h1>Groceries App</h1>
            <InventoryContainer productsArray = {products} addToCart={addToCart}/>
            <CartListContainer cartArray = {cartList}/>
       </div>
    )
}

//<CartListContainer cartArray = {cartList} />