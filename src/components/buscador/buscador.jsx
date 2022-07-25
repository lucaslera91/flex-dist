import React, { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import { Form, Button, ListGroup } from 'react-bootstrap'
import { ProductConsumer } from '../../context/ProductoProvider'

import './buscador.modules.css'



function Buscador({classes}) {

    const listGroupRef = useRef()
    const {productos} = ProductConsumer()
    const [results, setResults] = useState([])
    const [show, setShow] = useState(false)
    const [hasValue, setHasValue] = useState(false)
    const [valueStringsArray, setValueStringsArray] = useState([])

    const onChangeHandler = (e) => {
        e.preventDefault()
        console.log("e => ", e)
        let value = e.target.value.toLowerCase()
        const valueStringsArrayTemp = value.split(" ")
        setValueStringsArray(valueStringsArrayTemp)
        console.log(`valueStringsArrayTemp => `, valueStringsArrayTemp)
        let resultsTemp

        if ((value !== "") && (valueStringsArrayTemp.find(str => {if (str !== " ") {return str}}))) 
        {   setHasValue(true)
            resultsTemp = productos.filter((obj, index) => {
            let objString = Object.values(obj).join(" ").toLowerCase()
            function stringExists() {
                let exists = true
                valueStringsArrayTemp.forEach(string => {
                    if (!(objString.includes(string)))
                    {exists = false}
                })
                return exists      
            }
            if (stringExists()) {return obj}})
        } 
        else 
        {
            setHasValue(false)
            resultsTemp = []
        }
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
        onSubmit={(e) => e.preventDefault()} // cambiarla por algo mejor
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

            <Button variant="outline-secondary" className={`${!hasValue && 'disabledLink'}`}><Link to={'/productos'} state={{ queryResults: results }} onClick={() => setShow(false)}><i className='fa-solid fa-magnifying-glass'></i></Link></Button>

            <ListGroup ref={listGroupRef} bsPrefix={`resultsListGroup ${(show) ? 'd-block' : 'd-none'}`}>
                {results.length > 0 && results.map(item => {
                return <ListGroup.Item key={item.docId}>
                    <Link to={'/detalle-producto'} state={{ itemId: item.docId }} onClick={() => setShow(false)}> {item.NOMBRE} </Link>
                </ListGroup.Item>
                })}          
            </ListGroup>
        </Form>

    )
}

export { Buscador }