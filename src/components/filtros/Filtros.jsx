import React from 'react'
import './filtro.css'

const Filtros = ({ filtros, fn }) => {
    return (
        <div className='filtro-space'>
            {filtros.map((filtro, idx) => <button onClick={fn} key={idx} className='btn-filtro'>{filtro}</button>)}
        </div>
    )
}

export default Filtros