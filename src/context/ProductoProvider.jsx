import React, { createContext, useContext, useState, useEffect } from 'react'
import { getDocs, collection, doc } from 'firebase/firestore'
import { db } from '../firebase/firebase'
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

const [listas, setListas] = useState([])
const [productos, setProductos] = useState([])

const getListas = async () => {
    const collRef = collection(db, 'listasProductos')
    let listasTemp
    await getDocs(collRef)
    .then((querySnapshot) => {
        if (!querySnapshot.empty) {
            listasTemp = querySnapshot.docs.map(docSnapshot => {return {id: docSnapshot.id, docRef: docSnapshot.ref, ...docSnapshot.data()}}).sort((a, b) => a.creationDate - b.creationDate)
            setListas(listasTemp)
            console.log(`listasTemp => `, listasTemp)
        } 
        else {
            listasTemp = []
            setListas(listasTemp)
        }
    })
    .catch(error => console.log(`Hubo un error en getListas => ${error}`))
    return listasTemp
}

const getProductos = async () => {

    const listasOrdenadas = await getListas()
    const subCollRef = collection(listasOrdenadas[0].docRef, 'productos')

    getDocs(subCollRef)
    .then(querySnapshot => {
        if (!querySnapshot.empty) {
            const productosTemp = querySnapshot.docs.map(docSnapshot => {return {docId: docSnapshot.id, ...docSnapshot.data()}})
            setProductos(productosTemp)
            console.log(`productosTemp => `, productosTemp)
        }
        else {
            setProductos([])
        }
    })
    .catch(error => console.log(`Hubo un error en getProductos => ${error}`))
}

useEffect(
    () => {
        getProductos()
    }, []
)


    return (
        <ProductContext.Provider value={{ items, listas, productos }}>
            {children}
        </ProductContext.Provider>
    )
}

export default ProductoProvider