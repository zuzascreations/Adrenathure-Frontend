import React, { useState } from 'react'
import emailjs from 'emailjs-com'

function SenderForm() {
    const fromContact = { firstName:'', lastName:'', userEmail:'', phone:'', emailDetails:''}
    const [contact, setContact] = useState(fromContact)
    const [showMessage, setShowMessage] = useState(true)
    const handleChange = e => {
        const {userEmail, value} = e.target
        setContact({...contact,[userEmail]:value})
    }
    const handleSubmit = e => {
        e.preventDefault()

        emailjs.send('default_service','<YOUR TEMPLATE ID>', contact, '<YOUR USER ID>')
        .then((response) => {
            console.log('SUCCESS!', response.status, response.text)
            setContact(contact)
            setShowMessage(true)
        }, (err) => {
                    console.log('FAILED...', err)
        })
    }
    return (
        <div>

            { showMessage ? <div className='alert'>Email enviado con éxito</div> : ''}

            <form onSubmit={handleSubmit}>
                <p className='contact-header'>
                    Contacta con nosotros escribiéndonos un correo a <a href="mailto:info@adrenathure.es?Subject=Interesado%20en%20información">info@adrenathure.es</a>, 
                    empleando el formulario adjunto o te puedes acercar a nuestras oficinas.
                </p>
                <div className= 'contact-form'>Nombre*</div>
                    <input required type='text' value={fromContact.firstName} name='firstName' onChange={handleChange} placeholder='Escribe aquí tu nombre'/>
                <div className= 'contact-form'>Apellidos*</div>
                    <input required type='text' value={fromContact.lastName} name='lastName' onChange={handleChange} placeholder='Escribe aquí tu apellido'/>
                <div className= 'contact-form'>Email*</div>
                    <input required type='text' value={fromContact.userEmail} name='userMail' onChange={handleChange} placeholder='Escribe aquí tu correo'/>
                <div className= 'contact-form'>Teléfono</div>
                    <input type='text' value={fromContact.phone} name='phone' onChange={handleChange} placeholder='Escribe aquí tu teléfono de contacto'/>
                <div className= 'contact-form'>Tu mensaje</div>
                    <textarea required value={fromContact.emailDetails} name='emailDetails' onChange={handleChange} placeholder='Escribe aquí tu mensaje'/>
                <div className='contact-button'/>
			        <button>Enviar</button>
            </form>
        </div>
    )
}

export default SenderForm;