import React from 'react'
import ContactoSide from './contactanosSide/ContactoSide'
import "./contactoMain.modules.css";
import Formulario from './formularioSide/Formulario'

const ContactoMain = () => {
    return (
        <div className='main-contacto'>

            <div className='formContainer col-12 col-md-7'>
                <Formulario />
                <div className='redesContainer d-none d-md-flex flex-column flex-md-row align-items-center my-5'>
                    <p className='me-3'>Seguinos en nuestras redes sociales!</p>
                    <div className='redesIconos mt-4 mt-md-0'>
                        <p><a target='_blank' rel="noreferrer"  href='https://www.facebook.com/Distribuidora-los-3-hermanos-Bell-ville-Cordoba-111662890745850'><i className="fa-brands fa-facebook fa-2x"></i></a></p>
                        <p><a target='_blank' rel="noreferrer" href='https://www.instagram.com/quesos_los3hermanos/'><i className="fa-brands fa-instagram fa-2x ms-3"></i></a></p>
                    </div>
                </div>
            </div>
            <div className='datosContactoContainer col-12 col-md-4'>
                    <ContactoSide />
            </div>

        </div>




        // <div className='main-contacto'>
        //     <div className='divAux col-12 col-md-4'>
        //         <img src={fondoContacto} className="img col-12 col-md-4" alt="fondo" />
        //         <div className='contentAux'>
        //             <ContactoSide />
        //         </div>
        //     </div>
        //     <div className='formulario-side-div col-12 col-md-7'>
        //         <Formulario />
        //         <div className='redes d-flex flex-column flex-md-row align-items-center my-5'>
        //             <p className='me-3'>Seguinos en nuestras redes sociales!</p>
        //             <div className='redesIconos mt-4 mt-md-0'>
        //                 <p><a target='_blank' rel="noreferrer"  href='https://www.facebook.com/Distribuidora-los-3-hermanos-Bell-ville-Cordoba-111662890745850'><i className="fa-brands fa-facebook fa-2x"></i></a></p>
        //                 <p><a target='_blank' rel="noreferrer" href='https://www.instagram.com/quesos_los3hermanos/'><i className="fa-brands fa-instagram fa-2x ms-3"></i></a></p>
        //             </div>
        //         </div>
        //     </div>

        // </div>
    )
}

export default ContactoMain