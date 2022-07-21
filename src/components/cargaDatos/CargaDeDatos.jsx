import React, { useState, useEffect } from 'react'
import { Form, Button } from 'react-bootstrap'
import { getDoc, collection, doc, addDoc } from 'firebase/firestore';
import * as xlsx from 'https://unpkg.com/xlsx/xlsx.mjs';
import { db, storage, auth } from '../../firebase/firebase'
const CargaDeDatos = () => {

    const [dataTest, setDataTest] = useState([])

    const readUploadFile = (e) => {
        e.preventDefault();
        if (e.target.files) {
            console.log("e => ", e)
            console.log("e.target => ", e.target)       
            console.log("e.target.files => ", (e.target.files === true))
            const reader = new FileReader();
            console.log("reader => ", reader)
            reader.onload = (e) => {
                const data = e.target.result;
                const workbook = xlsx.read(data, { type: "array" });
                const sheetName = workbook.SheetNames[0];
                const worksheet = workbook.Sheets[sheetName];
                const json = xlsx.utils.sheet_to_json(worksheet);
                console.log(json);
                setDataTest(json)
            };
            reader.readAsArrayBuffer(e.target.files[0]);
        }
    }

    useEffect(() => {
        console.log(dataTest)
    }, [dataTest]);

    const handleSubmit = async (e) => {
        e.preventDefault()
        const collRef = collection(db, 'listasProductos')
        const docRef = await addDoc(collRef, {creationTime: Date()})
        const subCollRef = collection(docRef, 'productos')
        for (let item of dataTest) {
            console.log("item => ", item)
            addDoc(subCollRef, item).then(data => console.log(`documento cargado con id => ${docRef.id} en path ${docRef.path}`))
        }

    }

    return (
        <Form>
            <Form.Group controlId="formFileCargaDeDatos" className="mb-3">
                <Form.Label>Cargar archivo excell con los productos</Form.Label>
                <Form.Control type="file" onChange={readUploadFile}/>
            </Form.Group>
            <Button variant="outline-secondary" type="submit" onClick={handleSubmit}>
            Submit
            </Button>
      </Form>
    )
}


export default CargaDeDatos