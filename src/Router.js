import React from 'react'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import ContactoMain from './components/contacto/ContactoMain'
import ItemDetail from './components/itemDetail/ItemDetail'
import ListaProductos from './components/listaProductos/ListaProductos'
import ProductoProvider from './context/ProductoProvider'
import Layout from './layout/Layout'
import ComoComprarView from './views/ComoComprarView'
import ContactoView from './views/ContactoView'
import HomeView from './views/home/HomeView'

const router = () => {
    return (
        <BrowserRouter>
            <ProductoProvider>
                <Routes>
                    <Route element={<Layout />}>
                        <Route exact path="/" element={<HomeView />} />
                        <Route path="/productos" element={<ListaProductos />} />
                        <Route path="/detalle-producto" element={<ItemDetail />} />
                        <Route path="/como-comprar" element={<ComoComprarView />} />
                        <Route path="/contacto" element={<ContactoView />} />
                    </Route>
                </Routes>
            </ProductoProvider>
        </BrowserRouter>
    )
}

export default router