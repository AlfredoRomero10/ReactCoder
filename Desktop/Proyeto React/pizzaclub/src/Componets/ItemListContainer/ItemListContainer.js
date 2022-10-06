import React from "react"
import ItemCount from "../ItemCount/ItemCount"
import ItemList from "../../ItemList/ItemList"

export const ItemListContainer = () => {
    
    const onAdd = (cantidad) => {
        console.log('Compraste', {cantidad} ,'unidades');
    }

    return (
        <>
   <ItemCount initial={1} stock={5} onAdd={onAdd}/>
   <ItemList />
        </>
    
    )
} 
                 

export default ItemListContainer