import React from "react";
import { Link } from "react-router-dom";
import './botonLink.css'

function BotonLink({texto, width, to, classnames}) {

    return(
        <div className={`botonLinkComponent ${classnames}`} style={{width: `${width}`}}>
            <Link className="linkBoton" to={to}><span>{texto}</span></Link>
        </div>
    )
}

export { BotonLink }