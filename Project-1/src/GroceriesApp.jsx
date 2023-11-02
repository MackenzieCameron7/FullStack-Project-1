import { products } from "./products";
import "./InventoryCard";
import InventoryContainer from "./InventoryContainer";

export default function GroceriesApp(){
    return(
       <InventoryContainer productArray = {products}/>
    )
}