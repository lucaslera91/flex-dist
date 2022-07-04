import React from 'react'
import { Link } from 'react-router-dom'
import './itemStyle.css'
const Item = ({ producto }) => {
    const { id, nombre, img, descripcion, color, medidas, categoria } = producto

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
            <Link className='main-div-item' to={'/detalle-producto'} state={{ from: id }}>
                <div className='col-5'>
                    <img src={img} alt="" />
                </div>
                <div className='col-7'>
                    <h5>{nombre}</h5>
                    <p>{descripcion}</p>
                    <div>
                        <p>{color}</p>
                        <p>{categoria}</p>

                    </div>
                </div>
            </Link>

        </div>
    )
}

export default Item