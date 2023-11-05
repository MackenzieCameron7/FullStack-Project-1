import CartListCard from "./CartListCard";

export default function CartListContainer({cartArray}){
    return(
        <div className="CartList-Container">
            {cartArray.map((item)=>
            <CartListCard
            key = {item.id}
            name = {item.name}
            price = {item.price}
            />
            )}
        </div>
    )
}