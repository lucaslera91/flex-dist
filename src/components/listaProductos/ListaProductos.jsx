import React, { useEffect } from "react";
import { ProductConsumer } from "../../context/ProductoProvider";
import { telasActions } from "../../store/telas-slice";
import Item from "../item/Item";
import Filtros from "../filtros/Filtros";
import { useLocation } from "react-router-dom";
import "./listaProductos.css";
import { useDispatch, useSelector } from "react-redux";

const ListaProductos = () => {

  // const { items } = ProductConsumer();
  const dispatch = useDispatch();
  const arrayFiltros = ["accesorios", "telas", "roller", "repuestos"];
  const dataTest = useSelector((state) => state.telas.test);
  console.log(dataTest);
  const test = () => {
    dispatch(telasActions.productos());
  };

  const location = useLocation()
  let queryResults
  location.state && (queryResults = location.state.queryResults)
  console.log("locatiosn.state => ", location.state)
  console.log("query en ListaProductos => ", queryResults)

  const { productos } = ProductConsumer()


  let productsToShow
  (queryResults) ? (productsToShow = queryResults) : (productsToShow = productos)
  console.log(productsToShow)
  return (
    <div className="main-product-list-div mx-auto">
      <h3 onClick={test}>Redux test - click to remove list</h3>
      <h3>
        {dataTest && (
          <>
            <h3>Lista de productos</h3>
            <div className="dist-filtros">
              <Filtros fn={test} filtros={arrayFiltros} />
            </div>
            <div>
              {productsToShow.length > 0 ?
              productsToShow.map((element) => {
                return <Item key={element.docId} producto={element} />
              })
            : <h2>No se encontraron productos, prueba buscar diferente</h2>}
            </div>
          </>
        )}
      </h3>
    </div>
  );
};

export default ListaProductos;
