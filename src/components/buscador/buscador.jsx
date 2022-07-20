import React from 'react'
import { Form, Button} from 'react-bootstrap'

import './buscador.modules.css'



function Buscador({classes}) {


    return (
        <Form className={`d-flex ${classes}`}>
                <Form.Control
                type="search"
                placeholder="Buscar productos..."
                className="me-2"
                aria-label="Search"
                />
                <Button variant="outline-secondary"><i className='fa-solid fa-magnifying-glass'></i></Button>
            </Form>

    )
}

export { Buscador }