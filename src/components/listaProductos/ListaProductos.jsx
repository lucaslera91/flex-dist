import React, { useEffect } from 'react'
import { ProductConsumer } from '../../context/ProductoProvider'
import Item from '../item/Item';
import Filtros from '../filtros/Filtros';
import './listaProductos.css'

const ListaProductos = () => {
    const { items } = ProductConsumer();
    const arrayFiltros = ['accesorios', 'telas', 'roller', 'repuestos']

    return (
        <div className='main-product-list-div mx-auto'>
            <h3>Lista de productos</h3>
            <div className='dist-filtros'>
                <Filtros filtros={arrayFiltros} />
            </div>
            <div>
                {items.map(element => <Item key={element.id} producto={element} />)}
            </div>
        </div>
    )
}

export default ListaProductos