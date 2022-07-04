import React, { createContext, useContext } from 'react'
import img1 from '../../src/recursos/imagenes/QuesoAzul-Emperador.png'
import img2 from '../../src/recursos/imagenes/QuesoCrema-ElJuan.png'
import img3 from '../../src/recursos/imagenes/Quesos-Pack1.png'
import img4 from '../../src/recursos/imagenes/QuesoProvoletaPack-Puyehue.png'
import img5 from '../../src/recursos/imagenes/QuesoPortSalut-El Juan.png'
import img6 from '../../src/recursos/imagenes/QuesoHolanda.png'

const ProductContext = createContext();

export const ProductConsumer = () => useContext(ProductContext);

const ProductoProvider = ({ children }) => {

    const items = [
        {
            id: 1,
            sku: 'asdg824',
            imagen: 'img1',
            nombre: 'Acople Plastico',
            descripcion: 'Elemento para bordes y conexion de traba. No require soldar',
            categoria: 'Accesorio',
            medidas: '54cm',
            color: 'Rojo',
            img: img1
        },
        {
            id: 2,
            sku: 'asdg824',
            imagen: 'img1',
            nombre: 'Acople Plastico',
            descripcion: 'Elemento para bordes y conexion de traba. No require soldar',
            categoria: 'Accesorio',
            medidas: '54cm',
            color: 'Rojo',
            img: img4

        },
        {
            id: 3,
            sku: 'asdg824',
            imagen: 'img1',
            nombre: 'Acople Plastico',
            descripcion: 'Elemento para bordes y conexion de traba. No require soldar',
            categoria: 'Accesorio',
            medidas: '54cm',
            color: 'Rojo',
            img: img3

        },
        {
            id: 4,
            sku: 'asdg824',
            imagen: 'img1',
            nombre: 'Acople Plastico',
            descripcion: 'Elemento para bordes y conexion de traba. No require soldar',
            categoria: 'Accesorio',
            medidas: '54cm',
            color: 'Rojo',
            img: img2

        },
    ]


    return (
        <ProductContext.Provider value={{ items }}>
            {children}
        </ProductContext.Provider>
    )
}

export default ProductoProvider