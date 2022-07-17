import React from 'react'
import './iconoContacto.css'

const IconoContacto = ({ datoPrincipal, datoSecundario, icono }) => {
    return (
        <div className='todoIconos d-flex align-items-center mb-5'>

            <div className='iconoIconos'>
                <i className={icono}></i>
            </div>
            <div className='textIconos ms-3'>
                <h6 className='mb-1'>{datoPrincipal}</h6>
                <p className='mb-0'>{datoSecundario}</p>
            </div>
        </div>
    )
}

export default IconoContacto