import React, { useEffect } from "react";
import { ProductConsumer } from "../../context/ProductoProvider";
import { telasActions } from "../../store/telas-slice";
import Item from "../item/Item";
import Filtros from "../filtros/Filtros";
import "./listaProductos.css";
import { useDispatch, useSelector } from "react-redux";

const ListaProductos = () => {
  const { items } = ProductConsumer();
  const dispatch = useDispatch();
  const arrayFiltros = ["accesorios", "telas", "roller", "repuestos"];
  const dataTest = useSelector((state) => state.telas.test);
  console.log(dataTest);
  const test = () => {
    dispatch(telasActions.productos());
  };
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
              {items.map((element) => (
                <Item key={element.id} producto={element} />
              ))}
            </div>
          </>
        )}
      </h3>
    </div>
  );
};

export default ListaProductos;
