import React, {useState, useEffect} from 'react';
import ListaProductos from '../../components/listaProductos/ListaProductos';
import { FiltroAcordeon } from '../../components/filtroAcordeon/filtroAcordeon';
import { ProductConsumer } from "../../context/ProductoProvider";
import { useLocation } from "react-router-dom";
import './listaProductoView.modules.css';
import {useNavigate} from "react-router-dom";
import { Pill } from '../../components/pill/pill';

const ListaProductosView = () => {
    // Context
    const { productos } = ProductConsumer()    
    // states
    const [itemsToShow, setItemsToShow] = useState([])
    const [selectedFilters, setSelectedFilters] = useState([])
    // react-router-dom
    const location = useLocation()
    const navigate = useNavigate()

    //- LOCATION - retoma los resultados del buscador para sólo mostrar esos
    let queryString
    let queryResults
    if (location.state) {
        queryResults = location.state.queryResults; 
        queryString = location.state.queryString
    }    

    // console.log("Length => ", itemsToShow.length)
    // console.log("Productos => ", productos)
    // console.log("location => ", location)
    // console.log("location.state => ", location.state)
    // console.log("queryResults => ", queryResults)

    //- FILTROS
    const generarOpciones = () => {
        let opciones = new Set([])
        if(queryResults) {
            for (let i of queryResults) {
                opciones.add(i.categoria)
            }            
        }
        else {
            for (let i of productos) {
                opciones.add(i.categoria)
            }   
        }

        return Array.from(opciones)
    }

    let opciones = generarOpciones()

    const handleSelectFilter = (e) => {
        let elegido = e.target.dataset.value
        console.log('elegido ', elegido)
        const _selectedFilters = [...selectedFilters]
        _selectedFilters.push(elegido)
        setSelectedFilters(_selectedFilters)
        console.log("_selectedFilters en handleSelectFilters ", _selectedFilters)
    }

    const handleDeleteFilter = (e) => {
        console.log('event ', e)
        let elegido = e.target.dataset.value
        console.log('elegido ', elegido)
        const _selectedFilters = [...selectedFilters]
        const index = _selectedFilters.indexOf(elegido)
        _selectedFilters.splice(index, 1)
        setSelectedFilters(_selectedFilters)
        console.log("_selectedFilters en handledeleteFilters ", _selectedFilters)
    }

    const handleClearBusqueda = () => {
       navigate('/productos')
    }


    //- USE EFFECT
     useEffect(() => {
        console.log('se disaro useEffect')
        console.log('queryResults en useEffect => ', queryResults)
        console.log('selectedFilter en useEffect => ', selectedFilters)
        let _itemsToShow = []

        if(queryResults) {
            console.log("entró en 1er if")
            selectedFilters.length > 0
                ?   selectedFilters.forEach(filter => {
                        _itemsToShow = [..._itemsToShow, ...queryResults.filter(item => item.categoria === filter)]
                    })
                :   _itemsToShow = [...queryResults]
        }
        else if(selectedFilters.length > 0){
            console.log("entró en 2do if")
            selectedFilters.forEach(filter => {
                _itemsToShow = [..._itemsToShow, ...productos.filter(item => item.categoria === filter)]
            })
        }
        else {
            console.log("entró en 3er if")
            _itemsToShow = [...productos]
        }
        
        setItemsToShow(_itemsToShow)
        console.log("_itemsToShow en useEffect ", _itemsToShow)

    }, [queryResults, productos, selectedFilters])


    console.log("Items to show => ", itemsToShow)

    return (
        <div>
            <div className='row'>
                <div className='col-12 col-md-3 pt-3 containerFiltroAcordeon'>
                    <FiltroAcordeon titulo="Categorias" handler={handleSelectFilter} opciones={opciones} selectedFilters={selectedFilters}/>
                    
                    { (queryResults && queryString) && <Pill text={queryString} closeHandler={handleClearBusqueda}/> }    
                    { (selectedFilters) && selectedFilters.map((elem, index) => <Pill key={index} value={elem} text={elem} closeHandler={handleDeleteFilter}/>)  }
                </div>
                <div className='col-12 col-md-9'>
                    <ListaProductos itemsToShow={itemsToShow} queryString={queryString}/>
                </div>
            </div>
            

        </div>
    )
}

export default ListaProductosView