export default function InventoryCard({image, name, brand, quantity, price, addToCart}){
    return(
        <div className="Inventory-Card">
            <img src={image}></img>
            <h2>{name}</h2>
            <h3>{brand}</h3>
            <p>{quantity}</p>
            <p>{price}</p>
            <button type="button" onClick={()=>addToCart({
                id: crypto.randomUUID(),
                productName: name,
                productPrice: price
            })}>Add to Cart</button>
        </div>
    )
}