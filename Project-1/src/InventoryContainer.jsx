import InventoryCards from "./InventoryCard";

export default function InventoryContainer({products}){
return(

    <div className="Inventory-Container">
    {products.map((product, item)=>
    <InventoryCards 
    image = {item.image}
    name = {item.productName}
    brand = {item.brand}
    price = {item.quantity}
    />
    )}
    </div>    
)
}