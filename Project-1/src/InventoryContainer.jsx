import InventoryCard from "./InventoryCard";

export default function InventoryContainer({productsArray, addToCart}){
return(

    <div className="Inventory-Container">
    {productsArray.map((item)=>
    <InventoryCard 
    image = {item.image}
    name = {item.productName}
    brand = {item.brand}
    quantity = {item.quantity}
    price = {item.price}
    key = {item.id}
    addToCart = {addToCart}
    />
    )}
    </div>    
)
}