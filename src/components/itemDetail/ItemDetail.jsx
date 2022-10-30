import React from 'react'
import { useLocation } from 'react-router-dom'
import { ProductConsumer } from '../../context/ProductoProvider';
import './itemDetailStyle.css'

const ItemDetail = () => {
    // const { items } = ProductConsumer();
    const { productos } = ProductConsumer();
    const location = useLocation()
    let itemId
    location.state &&  (itemId = location.state.itemId) 

    console.log("itemId => ", itemId)
    console.log("productos => ", productos)

    let item 
    itemId && (item = productos.find(obj => obj.docId === itemId))
    console.log(item)
    return (
        <div>
            { itemId ?
            <div className='main-detail-div'>
                <div className='detail-img'>
                    <img src={item.FOTO} alt="No se encontro imagen" />
                </div>
                <div className='text-detail'>
                    <div className='datos-principales-SKU'>
                        <h3>{item.NOMBRE}</h3>
                        <p>{item.DESCPRIPCIÓN}</p>
                    </div>
                    <div className='detalles-SKU'>
                        <p>Categoria: "..."</p>
                        <p>SKU: {item.CODIGO}</p>
                        <p>Dimesiones: "..."</p>
                        <p>Color:{item.COLOR}</p>
                    </div>
                </div>
            </div> :
            <div> 
                <h2>Página no encontrada</h2>
                <h3>Selleciona un producto para ver sus detalles</h3>
            </div> }
        </div>


        
    )
}

export default ItemDetail