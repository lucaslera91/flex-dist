import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../components/footer/Footer'
import NavBar from '../components/navBar/NavBar'
import { WhatsAppButton } from '../components/whatsAppButton/whatsAppButton'
import "./layout.modules.css"

const Layout = () => {
    return (
        <main>
            <NavBar />
            <Outlet />
            <WhatsAppButton classnames={"botonWhatsApp"} size={"50px"}/>
            <Footer />
        </main>
    )
}

export default Layout