import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../components/footer/Footer'
import NavBar from '../components/navBar/NavBar'

const Layout = () => {
    return (
        <main>
            <NavBar />
            <Outlet />
            <Footer />
        </main>
    )
}

export default Layout