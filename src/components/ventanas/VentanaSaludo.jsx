import React from 'react'
import './ventanaStyle.css'
const VentanaSaludo = ({ parametroDeAnuncio, textoExplicativo }) => {
    return (
        <div className='main-ventana'>
            <div className='ventana-msj'>
                <div className='new-box'>
                    <h3>{parametroDeAnuncio}</h3>
                    <p>{textoExplicativo}</p>
                </div>
            </div>
        </div>
    )
}

export default VentanaSaludo