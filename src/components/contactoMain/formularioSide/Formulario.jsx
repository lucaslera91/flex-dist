import React, {useRef, useState} from 'react'
import './formulario.css'
import emailjs from '@emailjs/browser'
import Modal from 'react-bootstrap/Modal'
import {Boton} from '../../boton/boton'
import spinnerImage from '../../../recursos/imagenes/spinnerImage.png'

const Formulario = () => {

    //Modal
    const [show, setShow] = useState(false);
    const handleClose = () => {setShow(false); form.current.reset();};
    const handleShow = () => setShow(true);
    const [success, setSuccess] = useState('sinRespuesta');
    const [loading, setLoading] = useState(false)
    //Form EmailJs
    const form = useRef();
    const handleOnSubmit = (e) => {
      e.preventDefault();
      setLoading(true);
      
      emailjs.sendForm('service_q0gog15-CAMBIARLO', 'template_fezcsw1-CAMBIARLO', form.current, 'yvabPF0YjgLP6IzCE-CAMBIARLO')
        .then((result) => {
            setSuccess(true);
            console.log(result.text);
            setLoading(false);
            handleShow();
        }, (error) => {
            setSuccess(false);
            setLoading(false);
            handleShow();
            console.log(error.text);
        });
    };

    return (
        <div className='main-formulario mt-5 p-3'>
            <div className='form-text-container d-flex flex-column'>
                <h3 className='align-self-center align-self-md-start'><span>Dejanos</span> tu consulta</h3>
                <p className='align-self-start'>Completa este formulario y te responderemos a la brevedad</p>
            </div>
            <form ref={form} onSubmit={handleOnSubmit} className='form-contacto py-3' action="">
                <input className="form-control mt-3" name='nombreForm' id='nombreForm' required type="text" placeholder='Nombre' />
                <div className='d-flex flex-column flex-md-row'>
                    <input className="form-control mt-3" name='emailForm' id='emailForm' required type="email" placeholder='E-mail' />
                    <input className="form-control mt-3 ms-md-3" name='telForm' id='telForm' type="tel" placeholder='Telefono' />
                </div>
                <textarea name='msjForm' id='msjForm' required type="text" className="form-control mt-3" placeholder="Escriba su mensaje aqui..." rows="4" cols="25"></textarea>
                <button type='submit' className='btn mt-3'>Enviar</button>
            </form>
        
                <Modal show={show} onHide={handleClose} aria-labelledby="contained-modal-title-vcenter" centered>
                    <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title-vcenter">
                            {   (success === true) ?
                                'Gracias por contactarnos!' :
                                'Ups!'
                            }    
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        {   (success === true) ?
                            'Tu mensaje se envió con exito' :
                            'Hubo un problema con el servidor, por favor intentalo nuevamente más tarde.. Gracias!'
                        }    
                    </Modal.Body>
                    <Modal.Footer>
                        <Boton texto={'Cerrar'} onClickFunction={handleClose}/>
                    </Modal.Footer>
                </Modal>
                <Modal show={loading} onHide={handleClose} backdrop="static" keyboard={false} contentClassName='modalQuesito' aria-labelledby="contained-modal-title-vcenter" centered>
                    <Modal.Body>
                        <div className="formSpinnerContainer container-fluid d-flex justify-content-center my-5" style={{height:250}}>
                            <div className="spinner-grow" role="status">
                                <img src={spinnerImage} alt="spinnerImage" />
                            </div>
                        </div> 
                    </Modal.Body>
                </Modal>


        </div>
    )
}

export default Formulario