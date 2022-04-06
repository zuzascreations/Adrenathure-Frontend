import emailjs from '@emailjs/browser'
import { init } from '@emailjs/browser'
import { useSetModal } from '../hooks'
import '../Form.css'
init("user_26UUVsLD3NfN5vGVKNa9G")

function  ContactUs() {
  const setModal = useSetModal()

  const SenderForm = (e) => {
    e.preventDefault()
    emailjs.sendForm('service_3i6elr4', 'template_huflrva', e.target, 'user_26UUVsLD3NfN5vGVKNa9G')
      .then((result) => {
        console.log(result.text)
        setModal(<span>Gracias por contactar con nosotros. En breve nos pondremos en contacto contigo</span>)
      }, (error) => {
        console.log(error.text)
        setModal(<span>Error al enviar el formulario</span>)
      })
    e.target.reset()
  }

  return (
    <form className='form' onSubmit={SenderForm}>
      <fieldset className="form-section">
        <legend>CONTACTA CON NOSOTROS</legend>
        <label>Nombre*</label>
        <input required type='text' name='firstName' placeholder="Introduce tu nombre..." />
        <label>Apellidos*</label>
        <input required type='text' name='lastName'  placeholder="Introduce tus apellidos..."/>
        <label>E-mail*</label>
        <input required type='email' name='emailUser' placeholder="Introduce tu email..."/>
        <label>Teléfono</label>
        <input type='phone' name='phoneUser' placeholder="Introduce tu teléfono..."/>
        <label>Mensaje*</label>
        <textarea required row='25' column='55' name='contactDetails' placeholder="Cuenta nos..." />
        <p>* campos obligatorios</p>
        <button>ENVIAR</button>
      </fieldset>
    </form>
  )
}

export default ContactUs
