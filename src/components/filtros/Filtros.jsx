import React from 'react'
import './filtro.css'

const Filtros = ({ filtros }) => {
    return (
        <div className='filtro-space'>
            {filtros.map((filtro, idx) => <button key={idx} className='btn-filtro'>{filtro}</button>)}
        </div>
    )
}

export default Filtros