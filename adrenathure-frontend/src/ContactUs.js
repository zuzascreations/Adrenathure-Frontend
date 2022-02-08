import React from 'react'
import emailjs from '@emailjs/browser'
import{ init } from '@emailjs/browser'
init("user_26UUVsLD3NfN5vGVKNa9G")

function ContactUs() {
    const form = {firstName:'', lastName:'', emailUser:'', phoneUser:'', contactDetails:''}


const SenderForm = (e) => {
    e.preventDefault()

    emailjs.sendForm('service_3i6elr4', 'template_huflrva', e.target, 'user_26UUVsLD3NfN5vGVKNa9G')
        .then((result) => {
            console.log(result.text)
        }, (error) => {
            console.log(error.text)
        })
    e.target.reset()
    alert('Gracias por contactar con nosotros. En breve nos pondremos en contacto contigo')
}

    return(
    <form className='contact-form' onSubmit={SenderForm}>
        <label>Nombre*</label>
        <input required type='text' name='firstName'/>
        <label>Apellidos*</label>
        <input required type='text' name='lastName'/>
        <label>Email*</label>
        <input required type='email' name='emailUser'/>
        <label>Teléfono</label>
        <input type='phone' name='phoneUser'/>
        <label>Mensaje*</label>
        <textarea required row='25' column='55' name='contactDetails'/>
        <button>Enviar</button>
    </form>
)            
}

export default ContactUs