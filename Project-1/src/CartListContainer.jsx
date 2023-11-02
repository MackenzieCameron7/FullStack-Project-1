import CartListCard from "./CartListCard";

export default function CartListContainer(cartArray){
    return(
        <div className="CartList-Container">
            {cartArray.map((item)=>
            <CartListCard
            name = {item.name}
            price = {item.price}
            key = {item.id}
            />
            )}
        </div>
    )
}