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
            <InventoryContainer productsArray = {products} addToCart={addToCart}/>
            {(cartList.Length === 0) ? <h2>Your cart is empty</h2> : <CartListContainer cartArray = {cartList}/>}
       </div>
    )
}
//{(cartList.Length() === 0) ? <h2>Your cart is empty</h2> : <CartListContainer cartArray = {cartList}/>}
//<CartListContainer cartArray = {cartList} />