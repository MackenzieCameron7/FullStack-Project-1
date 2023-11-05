import CartListCard from "./CartListCard";

export default function CartListContainer({cartArray, removeFromCart, clearCart, totalPrice}){
    return(
        <div className="CartList-Container">
            {cartArray.map((item)=>
            <CartListCard
            key = {item.id}
            name = {item.name}
            price = {item.price}
            removeFromCart={removeFromCart}
            />
            )}
            <button className="Remove-Button" onClick={()=> clearCart()}>Clear Cart</button>
            <button id="Buy-Button">Buy-Total{totalPrice}</button>
        </div>
    )
}