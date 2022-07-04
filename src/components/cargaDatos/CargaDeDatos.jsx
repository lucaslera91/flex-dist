import React from 'react'
import React, { useState, useEffect } from 'react'
import * as xlsx from 'https://unpkg.com/xlsx/xlsx.mjs';

const CargaDeDatos = () => {

    const [dataTest, setDataTest] = useState([])

    const readUploadFile = (e) => {
        e.preventDefault();
        if (e.target.files) {
            const reader = new FileReader();
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

    return (
        <div>
            <form>
                <label htmlFor="upload">Upload File</label>
                <input
                    type="file"
                    name="upload"
                    id="upload"
                    onChange={readUploadFile}
                />
            </form>
        </div>
    )
}


export default CargaDeDatos