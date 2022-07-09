import React from "react";
import "./contactoMain.modules.css";

const ContactoMain = () => {
  return (
    <div className="main-contacto">

      <div className="contacto-container">
        <i class="fa-brands fa-whatsapp"/>
        <div className="contacto-div">
          <p>Telefono</p>
          <p>########</p>
        </div>
      </div>

      <div>
        <div className="contacto-container">
          <i class="fa-brands fa-whatsapp"></i>
          <div className="contacto-div">
            <p>Whats app</p>
            <p>Escribinos por whats app</p>
          </div>
        </div>
      </div>
      <div className="contacto-container">
        <i class="fa-solid fa-envelope-open-text"></i>
        <div className="contacto-div">
          <p>Correo</p>
          <p>Correo@correo.com</p>
        </div>
      </div>
      <div className="contacto-container">
        <i class="fa-solid fa-location-dot"></i>
        <div className="contacto-div">
          <p>Direccion</p>
          <p>Avenida siempre viva 256</p>
        </div>
      </div>
    </div>
  );
};

export default ContactoMain;
