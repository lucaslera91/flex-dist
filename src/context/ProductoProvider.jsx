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
            id: '39SaRxWJ4BCtqLNZt8GY',
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
            id: "TS75rW2810INCjRMjNrp",
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
            id: "eaUyXb7L3B56G11cL1qa",
            sku: 'asdg824',
            imagen: 'img1',
            nombre: 'Acople Plastico',
            descripcion: 'Elemento para bordes y conexion de traba. No require soldar',
            categoria: 'Accesorio',
            medidas: '54cm',
            color: 'Rojo',
            img: img3

        }
    ]

const [listas, setListas] = useState([])
const [productos, setProductos] = useState([])

const getListas = async () => {
    const collRef = collection(db, 'listasProductos')
    let listasTempOrdenadas
    let listasTemp
    await getDocs(collRef)
    .then((querySnapshot) => {
        if (!querySnapshot.empty) {
            listasTemp = querySnapshot.docs.map(docSnapshot => {return {id: docSnapshot.id, docRef: docSnapshot.ref, ...docSnapshot.data()}})
            listasTempOrdenadas = listasTemp.sort((a, b) => {return ((new Date(b.creationTime).getTime()) - (new Date(a.creationTime).getTime()))})
            setListas(listasTempOrdenadas)

        } 
        else {
            listasTempOrdenadas = []
            setListas(listasTempOrdenadas)
        }
    })
    .catch(error => console.log(`Hubo un error en getListas => ${error}`))
    return listasTempOrdenadas
}

const getProductos = async () => {

    const listasOrdenadas = await getListas()
    console.log(`listasOrdenadas => `, listasOrdenadas)
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