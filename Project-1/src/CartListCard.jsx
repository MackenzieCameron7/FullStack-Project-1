export default function CartListCard({name, price}){
    return(
        <div className="CartList-Card">
            <h5>{name}</h5>
            <h5>{price}</h5>
            <button type="button">Remove</button>
        </div>
    )
}