import React from 'react'
import { useLocation } from 'react-router-dom'
import { ProductConsumer } from '../../context/ProductoProvider';
import './itemDetailStyle.css'

const ItemDetail = () => {
    // const { items } = ProductConsumer();
    const { productos } = ProductConsumer();
    const location = useLocation()
    const { itemId } = location.state

    console.log("itemId => ", itemId)
    console.log("productos => ", productos)

    const item = productos.find(obj => obj.docId === itemId)
    console.log(item)
    return (
        <div>
            <div className='main-detail-div'>
                <div className='detail-img'>
                    <img src={item.FOTO} alt="foto del producto" />
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
            </div>
        </div>
    )
}

export default ItemDetail