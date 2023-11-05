import { useState } from "react";
import { products } from "./products";
import "./InventoryCard";
import InventoryContainer from "./InventoryContainer";
import CartListContainer from "./CartListContainer";

export default function GroceriesApp(){

    // Varibales that will change, so they need to be declared a hooks
    const [cartList, setCartList] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);

    // Add Item to cart function... Takes in an object with attributes of CardListCard and spread it into our new cart array. 
    function addToCart({id, name, price}){
        return setCartList((prevCart) => [...prevCart, {id, name, price}]);
    }

    // Remove Item From Cart function... filter cartList[] by id and remove it from our new array.
    function removeFromCart({id}){
        return setCartList((prevCart) => prevCart.filter((cartArray) => cartArray.id !== id));
    }

    // Clear Cart function... Setting cartList[] to empty.
    function clearCart(){
        return setCartList(()=> []);
    }

    // Buy Cart function... Calculates the total price of all items in our cart.
    function calculateTotalPrice(cartList){
       let total;
       cartList.forEach(element => {
        total += element.price;
       })
       return setTotalPrice(total);
    }

    return(
        // Checks if cart length is 0. if True: display a message to say your cart is empty. if False: Display cart items and clear/buy buttons
        <div className="GroceriesApp-Container">
            <InventoryContainer productsArray = {products} addToCart={addToCart}/>
            {(cartList.length === 0) ? <h1>Your cart is empty</h1> : <CartListContainer cartArray = {cartList} removeFromCart={removeFromCart} clearCart={clearCart} totalPrice={totalPrice}/>}
       </div>
    )
}