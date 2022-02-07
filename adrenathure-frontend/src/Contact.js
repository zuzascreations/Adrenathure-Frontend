import MapContact from './MapContact'
import './Contact.css'
import SenderForm from './SenderForm'


function Contact() {
    return(
        <div className='contact'>
            <aside clasName="left-side">
                {<SenderForm />}
                {/* <form className='formulario'>
                    <label>Nombre*</label>
                    <input type="text"></input>
                    <label>Apellidos*</label>
                    <input type="text"></input>
                    <label>E-mail*</label>
                    <input type="e-mail"></input>
                    <label>Teléfono</label>
                    <input type="tel"></input>
                    <label>Tu Mensaje</label>
                    <textarea cols="25" rows="15" placeholder="Escribe aquí tu texto ..."></textarea>
                    <button>Enviar</button>
                </form> */}
                <ul className='address'>
                    <li className="addressHeader">Adrenathure</li>
                    <li>Avda. de García Barbón, 27</li>
                    <li>(Entrada por c/ Roupeiro, 27 Interior)</li>
                    <li>36201 Vigo</li>
                    <li>Pontevedra</li>
                    <li>España - Spain</li>
                </ul>
                {<MapContact />}
            </aside>
        </div>
    )
}
export default Contact