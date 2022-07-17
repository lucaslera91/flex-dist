import React from "react";
import './boton.css'

function Boton({texto, width, onClickFunction, classnames}) {

    return(
        <div className={`botonComponent ${classnames}`} onClick={onClickFunction} style={{width: `${width}`}}>
            {texto}
        </div>
    )
}

export { Boton }