import React, {useState, useEffect} from 'react';
import ListaProductos from '../../components/listaProductos/ListaProductos';
import { ProductConsumer } from "../../context/ProductoProvider";
import { useLocation } from "react-router-dom";

const ListaProductosView = () => {
    useEffect(() => {
        queryResults ? (setItemsToShow(queryResults)) : (setItemsToShow(productos))
    })

    const { productos } = ProductConsumer()
    const [itemsToShow, setItemsToShow] = useState([])
    //console.log("Length => ", itemsToShow.length)
    //console.log("Productos => ", productos)
    const location = useLocation()
    let queryString
    // let itemsToShow
    let queryResults
    if (location.state) {
        queryResults = location.state.queryResults; 
        queryString = location.state.queryString
    }
    //console.log("location.state => ", location.state)
    //console.log("queryResults => ", queryResults)

    const handleFilter = (e) => {
        //console.log(e.target.value)
        //console.log(e.currentTarget.innerHTML)
        let elegido
        const itemsToShowTemp = itemsToShow
        itemsToShowTemp.filter(item => item.categoria === elegido)
    }



    

   
    

    //console.log("Items to show => ", itemsToShow)
    return (
        <div>
            <ListaProductos itemsToShow={itemsToShow} queryString={queryString} handleFilter={handleFilter}/>

        </div>
    )
}

export default ListaProductosView