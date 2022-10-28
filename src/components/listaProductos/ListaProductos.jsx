import React, { useEffect } from "react";
import Item from "../item/Item";
import { FiltroAcordeon } from '../../components/filtroAcordeon/filtroAcordeon';
import "./listaProductos.css";

const ListaProductos = ({itemsToShow, queryString, handleFilter}) => {

  const generarOpciones = () => {
    let opciones = new Set([])
    for (let i of itemsToShow) {
      opciones.add(i.categoria)
    }
    return Array.from(opciones)
  }
  let opciones = generarOpciones()




  return (
    <div className="main-product-list-div mx-auto">
      <div className="filtrosContainer">
        <FiltroAcordeon titulo="Categorias" handler={handleFilter} opciones={opciones}/>
      </div>
      <div className="itemsList">
        {
          itemsToShow.length > 0 
          ?
          itemsToShow.map((element) => {
            return <Item key={element.docId} producto={element} />
          })
          :
          <h5>No se encontraron productos, prueba buscar diferente</h5>
        }
      </div>
      
    </div>
  );
};

export default ListaProductos;
