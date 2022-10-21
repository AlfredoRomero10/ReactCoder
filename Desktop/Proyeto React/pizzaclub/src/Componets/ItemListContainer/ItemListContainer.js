import React, {useState, useEffect} from "react"
import ItemCount from "../ItemCount/ItemCount"
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"



export const productos = [
    {id: 1, image: 'https://http2.mlstatic.com/D_NQ_NP_744872-MLA42059980143_062020-W.jpg', category: 'chomba', title: 'Chomba Azul'},
    {id: 2, image: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/saturdays-nyc-camisa-rayas-1558700616.jpg?crop=1xw:1xh;center,top&resize=480:*', category: 'camisa', title: 'Camisa Rayas'},
    {id: 3, image: 'https://static.dafiti.com.ar/p/wellington-1810-83651-1-product.jpg', category: 'campera', title: 'Campera Negra'},
    {id: 4, image: 'http://d2r9epyceweg5n.cloudfront.net/stores/652/531/products/d_661324-mla31600714550_072019-o-01c40840e1a496f49d16034671613590-640-0.jpg', category: 'chomba', title: 'Chomba Verde'},
    {id: 5, image: 'https://static.dafiti.com.ar/p/pierre-cardin-8425-70811-1-product.jpg', category: 'camisa', title: 'Camisa Cuadros'},
    {id: 6, image: 'https://static.dafiti.com.ar/p/wellington-6127-114061-1-product.jpg', category: 'campera', title: 'Campera Azul'}

]



export const ItemListContainer = () => {

    const [data, setData] = useState ([]);
    
    const {categoriaId} = useParams();

    useEffect(() => {
        const getData = new Promise( resolve => {
            setTimeout(() => {
                resolve(productos)
            }, 1000)
        })

        if (categoriaId) {
            getData.then(res => setData(res.filter(producto => producto.category === categoriaId)));
        } else {
            getData.then(res => setData(res))
        }

        
    }, [categoriaId])


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