import React, { useState, useEffect } from 'react'
import { Form, Button, ListGroup } from 'react-bootstrap'
import { ProductConsumer } from '../../context/ProductoProvider'

import './buscador.modules.css'



function Buscador({classes}) {

const {productos} = ProductConsumer()
const [results, setResults] = useState([])
const onChangeHandler = (e) => {
    e.preventDefault()
    console.log("e => ", e)
    let value = e.target.value
    let resultsTemp
    (value !== "") ? ( resultsTemp = productos.filter((obj, index) => {if (Object.values(obj).join(" ").includes(value)) {return obj}})) : (resultsTemp = [])
    console.log("resultsTemp => ", resultsTemp)
    setResults(resultsTemp)
}

    return (
        <Form className={`buscador d-flex ${classes}`}>
            <Form.Control
            type="search"
            placeholder="Buscar productos..."
            className="me-2"
            aria-label="Search"
            onChange={onChangeHandler}
            />
            <Button variant="outline-secondary"><i className='fa-solid fa-magnifying-glass'></i></Button>
            <ListGroup bsPrefix={`resultsListGroup ${results.length>0 ? 'd-block' : 'd-none'}`}>
                {results.length > 0 && results.map(item => {return <ListGroup.Item key={item.docId}>{item.NOMBRE}</ListGroup.Item>})}
            </ListGroup>
                    


        </Form>

    )
}

export { Buscador }