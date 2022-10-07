import React, {useState, useEffect} from "react"
import ItemCount from "../ItemCount/ItemCount"
import ItemList from "../ItemList/ItemList"



const productos = [
    {id: 1, image: 'https://www.farfetch.com/es/shopping/men/polo-ralph-lauren/shirts-2/items.aspx', title: 'Chomba Azul'},
    {id: 2, image: 'https://www.falabella.com.co/falabella-co/product/4267842/Camisa-casual-Hombre-Polo-Ralph-Lauren/4919177', title: 'Camisa Polo'},
    {id: 3, image: 'https://shopee.com.mx/Polo-de-algod%C3%B3n-con-bordado-para-hombre-camisas-informales-de-Color-s%C3%B3lido-ajustadas-de-marca-ropa-de-verano-i.423025724.10957338036', title: 'Camisa Informal'}

]



export const ItemListContainer = () => {

    const [data, setData] = useState ([]);
    
    useEffect(() => {
        const getData = new Promise( resolve => {
            setTimeout(() => {
                resolve(productos)
            }, 3000)
        })

        getData.then(res => setData(res))
    }, [])


    const onAdd = (cantidad) => {
        console.log('Compraste', {cantidad} ,'unidades');
    }

    return (
        <>
   <ItemCount initial={1} stock={5} onAdd={onAdd}/>
   <ItemList data={data}/>
        </>
    
    )
} 
                 

export default ItemListContainer