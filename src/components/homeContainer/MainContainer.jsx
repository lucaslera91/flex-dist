import React, { useState, useRef, useEffect } from "react";
import BgElement from "../BgElement.jsx/BgElement";
import VentanaSaludo from "../ventanas/VentanaSaludo";
import "./mainContainerStyle.css";

const MainContainer = () => {
  const [isVisible, setVisible] = useState(false);
  const [isVisible2, setVisible2] = useState(false);
  const textoExplicativo1 =
    "Hola Somos una distribuidora de accesorios para cortinas";
  const textoExplicativo2 = "Lo hacemos a travez de nuestro contacto Vertilux";
  const texto = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras at
    commodo nibh, ut maximus turpis. Ut porttitor tempus augue, ac rutrum
    lorems tincidunt
    magna eget purus gravida, et ultricies ex consequat.`;

  const ref = useRef();
  const handleAnimation = () => {
    setVisible(true);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleAnimation);
    return () => {
      window.removeEventListener("scroll", handleAnimation);
    };
  }, []);

  useEffect(() => {
    setVisible2(true);
  }, []);

  return (
    <BgElement>
      <div className="main-home-container">
        <div className={`fade-in-section ${isVisible2 ? "is-visible" : ""}`}>
          <div>
            <VentanaSaludo
              parametroDeAnuncio={"¿Que hacemos?"}
              textoExplicativo={texto}
            />
          </div>
        </div>
        <div className={`fade-in-section ${isVisible ? "is-visible" : ""}`}>
          <VentanaSaludo
            parametroDeAnuncio={"¿Que hacemos?"}
            textoExplicativo={texto}
          />
        </div>
      </div>
    </BgElement>
  );
};

export default MainContainer;
