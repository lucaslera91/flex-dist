import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Form, Button, ListGroup } from 'react-bootstrap'
import { ProductConsumer } from '../../context/ProductoProvider'

import './buscador.modules.css'



function Buscador({classes}) {

    const {productos} = ProductConsumer()
    const [results, setResults] = useState([])
    const [show, setShow] = useState(false)

    const onChangeHandler = (e) => {
        e.preventDefault()
        console.log("e => ", e)
        let value = e.target.value.toLowerCase()
        let valueStringsArray = value.split(" ")
        console.log(`valueStringsArray => `, valueStringsArray)
        let resultsTemp

        (value !== "") ? 
        ( resultsTemp = productos.filter((obj, index) => {
            let objString = Object.values(obj).join(" ").toLowerCase()
            function stringExists() {
                let exists = true
                valueStringsArray.forEach(string => {
                    if (!(objString.includes(string)))
                    {exists = false}
                })
                return exists      
            }
            if (stringExists()) {return obj}})) 
        : (resultsTemp = [])
        
        console.log("resultsTemp => ", resultsTemp)
        setResults(resultsTemp)
    }

    const onBlurHandler = (e) => {
        e.preventDefault()
        if (e.relatedTarget === null) {setShow(false)}
    }

    const onFocusHandler = (e) => {
        e.preventDefault()
        setShow(true)
    }


    return (
        <Form className={`buscador d-flex ${classes}`}
        onFocus={onFocusHandler}
        onBlur={onBlurHandler}
        >
            <Form.Control
            type="search"
            placeholder="Buscar productos..."
            className="me-2"
            aria-label="Search"
            onChange={onChangeHandler}
            onFocus={onFocusHandler}
            onBlur={onBlurHandler}
            />
            <Button variant="outline-secondary"><i className='fa-solid fa-magnifying-glass'></i></Button>
            <ListGroup bsPrefix={`resultsListGroup ${(show) ? 'd-block' : 'd-none'}`}>

                {results.length > 0 && results.map(item => {
                return <ListGroup.Item key={item.docId}>
                    <Link to={'/detalle-producto'} state={{ itemId: item.docId }}>{item.NOMBRE}</Link>
                </ListGroup.Item>
                })
                }
           
                {/* {results.length > 0 && results.map(item => {return <ListGroup.Item key={item.docId} action href="/detalle-producto" state={{ from: item.docId }}>{item.NOMBRE}</ListGroup.Item>})} */}
            </ListGroup>
                    


        </Form>

    )
}

export { Buscador }