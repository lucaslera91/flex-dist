import React from 'react'
import './filtroAcordeon.css'

const FiltroAcordeon = ({ titulo, handler, opciones, selectedFilters }) => {
    console.log("selectedFilters en filtroAccordeon => ", selectedFilters)
    return (
        <div>
            <div className="accordion">
                <div className="accordion-item">
                    <h2
                        className="accordion-header"
                        id="headingOne">
                        <button
                            className="accordion-button collapsed"
                            type="button"
                            data-toggle="collapse"
                            data-target={`#${titulo}`}
                            aria-expanded="true"
                            aria-controls="collapseOne"
                        >
                            {titulo}
                        </button>
                    </h2>
                    <div
                        id={`${titulo}`}
                        className="accordion-collapse collapse"
                        aria-labelledby="headingOne"
                        data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">
                            {opciones.map((element, idx) => {
                                return <p data-value={element} className={
                                    `accordion-item-options ${selectedFilters.includes(element) ? `disabledOption` : ' '}`}  
                                    onClick={(e) => handler(e)} key={idx}>{element}</p>
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export {FiltroAcordeon}