import React from 'react'
import './logo.css'
import logoNavBar from "../../recursos/imagenes/logoFlexColor2.png"

const Logo = () => {
    return (
        <div className='main-logo'>
            <img src={logoNavBar} className="outer-logo"/>
        </div>
    )
}

export default Logo