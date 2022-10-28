import React from 'react'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import ItemDetail from './components/itemDetail/ItemDetail'
import ListaProductosView from './views/listadoProductos/ListaProductosView'
import ProductoProvider from './context/ProductoProvider'
import Layout from './layout/Layout'
import ComoComprarView from './views/ComoComprarView'
import ContactoView from './views/contacto/ContactoView'
import HomeView from './views/home/HomeView'
import PreciosView from './views/PreciosView'
import CargaDeDatos from './components/cargaDatos/CargaDeDatos'

const router = () => {
    return (
        <BrowserRouter>
            <ProductoProvider>
                <Routes>
                    <Route element={<Layout />}>
                        <Route exact path="/" element={<HomeView />} />
                        <Route path="/productos" element={<ListaProductosView />} />
                        <Route path="/detalle-producto" element={<ItemDetail />} />
                        <Route path="/como-comprar" element={<ComoComprarView />} />
                        <Route path="/precios" element={<PreciosView />} />
                        <Route path="/contacto" element={<ContactoView />} />
                        <Route path="/cargaDeDatos" element={<CargaDeDatos />} />
                    </Route>
                </Routes>
            </ProductoProvider>
        </BrowserRouter>
    )
}

export default router