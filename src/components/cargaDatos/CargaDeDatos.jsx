import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import { getDoc, collection, doc, addDoc } from 'firebase/firestore';
import { listAll, ref, getDownloadURL } from 'firebase/storage';
import * as xlsx from 'https://unpkg.com/xlsx/xlsx.mjs';
import { db, storage, auth } from '../../firebase/firebase'
const CargaDeDatos = () => {

    const [dataTest, setDataTest] = useState([])

    const readUploadFileProductos = (e) => {
        e.preventDefault();
        if (e.target.files) {
            console.log("e => ", e)
            console.log("e.target => ", e.target)   
            console.log("e.target.files => ", (e.target.files))    
            // console.log("e.target.files => ", (e.target.files === true))
            const reader = new FileReader();
            console.log("reader => ", reader)
            reader.onload = (e) => {
                const data = e.target.result;
                const workbook = xlsx.read(data, { type: "array" });
                console.log("woorkbook => ", workbook)
                const sheetNames = workbook.SheetNames
                let dataTemp = []
                for (const sheetName of sheetNames) {
                const worksheet = workbook.Sheets[sheetName];
                let jsonData = xlsx.utils.sheet_to_json(worksheet);
                jsonData = jsonData.map(obj => ({...obj, categoria: sheetName}))
                console.log("sheetName => ", sheetName)
                console.log("jsonData => ", jsonData)
                dataTemp = dataTemp.concat(jsonData)
                console.log("dataTemp",sheetName, " => ", dataTemp)
                }
                console.log("dataTemp post for of => ", dataTemp)
                setDataTest(dataTemp)
                
            };
            reader.readAsArrayBuffer(e.target.files[0]);
        }
    }

    const handleSubmitProductos = async (e) => {
        e.preventDefault()
        const collRef = collection(db, 'listasProductos')
        const docRef = await addDoc(collRef, {creationTime: Date()})
        const subCollRef = collection(docRef, 'productos')
        for (let item of dataTest) {
            console.log("item => ", item)
            addDoc(subCollRef, item).then(itemDocRef => console.log(`documento cargado con id => ${itemDocRef.id} en path ${docRef.path}`))
        }
        console.log("Fin carga de productos => ", dataTest)


    }
    const [imgUrl, setImgUrl] = useState("../../recursos/imagenes/QuesoAzul-Emperador.png")

    // storage 





    // This can be downloaded directly:
    // const xhr = new XMLHttpRequest();
    // xhr.responseType = 'blob';
    // xhr.onload = (event) => {
    // const blob = xhr.response;
    // };
    // xhr.open('GET', url);
    // xhr.send();

    // fetch(url)
    // .then(function(response) {
    //     console.log("response => ",response)
    //     if(response.ok) {
    //       response.blob()
    //       .then(function(miBlob) {
    //         var objectURL = URL.createObjectURL(miBlob);
    //         setImgUrl(objectURL);
    //       })
    //       .catch(error => console.log("Hubo un error con response.blob => ", error))
    //     } else {
    //       console.log('Respuesta de red OK pero respuesta HTTP no OK');
    //     }
    //   })
    // .catch(function(error) {
    // console.log('Hubo un problema con la petición Fetch:' + error.message);
    // });

    // async function downloadImage(imageSrc) {
    //     const image = await fetch(imageSrc)
    //     const imageBlog = await image.blob()
    //     const imageURL = URL.createObjectURL(imageBlog)
      
    //     const link = document.createElement('a')
    //     link.href = imageURL
    //     link.download = 'image file name here'
    //     document.body.appendChild(link)
    //     link.click()
    //     document.body.removeChild(link)
    //   }

    return (
        <div>
            <Form className='my-5'>
                <Form.Group controlId="formFileCargaDeDatos" className="mb-3">
                    <Form.Label>Cargar archivo excell con los productos</Form.Label>
                    <Form.Control type="file" onChange={readUploadFileProductos}/>
                </Form.Group>
                <Button variant="outline-secondary" type="submit" onClick={handleSubmitProductos}>
                Submit
                </Button>
            </Form>
            <Form className='mb-5'>
                <Form.Group controlId="formFileCargaDeImagenes" className="mb-3">
                    <Form.Label>Cargar imagenes</Form.Label>
                    <Form.Control type="file" onChange={() => {}}/>
                </Form.Group>
                <Button variant="outline-secondary" type="submit" onClick={()=>{}}>
                Cargar imágenes
                </Button>
                <Button variant="outline-secondary" type="submit" onClick={()=>{}}>
                Descargar imágenes
                </Button>
            </Form>

        </div>

      
    )
}


export default CargaDeDatos