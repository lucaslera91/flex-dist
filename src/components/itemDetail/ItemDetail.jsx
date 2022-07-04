import React from 'react'
import { useLocation } from 'react-router-dom'
import { ProductConsumer } from '../../context/ProductoProvider';
import './itemDetailStyle.css'

const ItemDetail = () => {
    const { items } = ProductConsumer();
    const location = useLocation()
    const { from } = location.state

    const itemFind = items.filter(element => element.id === from)
    console.log(itemFind)
    return (
        <div>
            {itemFind.map(element => {
                return (
                    <div key={element.id} className='main-detail-div'>
                        <div className='detail-img'>
                            <img src={element.img} alt="" />
                        </div>
                        <div className='text-detail'>
                            <div className='datos-principales-SKU'>
                                <h3>{element.nombre}</h3>
                                <p>{element.descripcion}</p>
                            </div>
                            <div className='detalles-SKU'>
                                <p>Categoria: {element.categoria}</p>
                                <p>SKU: {element.sku}</p>
                                <p>Dimesiones: {element.medidas}</p>
                                <p>Color:{element.color}</p>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default ItemDetail