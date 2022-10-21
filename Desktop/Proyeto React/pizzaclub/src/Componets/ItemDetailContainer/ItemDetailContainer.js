/*import React, {useEffect, useState} from "react";
import productos from './ItemDetailContainer'
import ItemDetail from "../ItemDetail/ItemDetail";
import {useParams} from 'react-router-dom'
 


export const ItemDetailContainer = () => {
    const [data, setData] = useState({});

    const {detalleId} = useParams();

    useEffect (() => {
        const getData = new Promise (resolve => { 
            setTimeout(() => {
            resolve(productos);
            }, 3000);
        });
        
        
        getData.then(res => setData(res.find(producto => producto.id === parseInt(detalleId))));

    }, [])
    
       
    return (
        <ItemDetail data = {data} />
    )
}


export default ItemDetailContainer*/