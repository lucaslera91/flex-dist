import React from 'react'
import IconoContacto from '../contactoIcono/IconoContacto'
import './contactoSideStyle.css'
const ContactoSide = () => {
    return (
        <div className='main-contacto-side'>
            <h3 className='mt-3 my-4'>C<span>ontactano</span>s</h3>
            <div className='auxDivContactos'>
                <h4>Argentina</h4>
                <h5>Mendoza</h5>
                <p>Alsina 450. Parque Industrial Bicentenario. Gral Gutiérrez. Maipú (5511)</p>
                <p>Teléfono: 11 4168-6182</p>
                <p>Email: info@flex-color.com</p>
                <h5>Ciudad Autónoma de Buenos Aires</h5>
                <p>Andrés Arguibel 2884. Las Cañitas (1417).</p>
                <p>Teléfono: 11 4775-7115 // 11 4773-8991</p>
                <h4>Chile</h4>
                <h5>Santiago</h5>
                <p>Candelaria Goyenechea 3820, Local 91, Vitacura.</p>
                <p>Teléfono: +56 9 9277-6471</p>
                <p>Email: ventaschile@flex-color.com</p>
            </div>
        </div>
    )
}

export default ContactoSide