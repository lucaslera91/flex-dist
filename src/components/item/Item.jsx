import React from 'react'
import { Link } from 'react-router-dom'
import './itemStyle.css'
const Item = ({ producto }) => {
    // const { id, nombre, img, descripcion, color, medidas, categoria } = producto

    // id: 1,
    // sku: 'asdg824',
    // imagen: 'img1',
    // nombre: 'Acople Plastico',
    // descripcion: 'Elemento para bordes y conexion de traba. No require soldar',
    // categoria: 'Accesorio',
    // medidas: '54cm',
    // color: 'Rojo',
    // img: img4

    return (
        <div >
            <Link className='main-div-item' to={'/detalle-producto'} state={{itemId: producto.docId}}>
                <div className='col-5'>
                    <img src={producto.imgUrl} alt="foto del producto" />
                </div>
                <div className='col-7'>
                    <h5>Nombre: {producto.NOMBRE}</h5>
                    <p>Descripción: {producto.DESCRIPCIÓN}</p>
                    <div>
                        <p>Color: {producto.COLOR}</p>
                        <p>Categoría: {producto.categoria}</p>

                    </div>
                </div>
            </Link>

        </div>
    )
}

export default Item