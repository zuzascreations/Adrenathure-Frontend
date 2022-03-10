import MapContact from './MapContact'
import './Contact.css'
import ContactUs from './ContactUs'


function Contact() {
    return(
        <div className='contact'>
            <aside className="left-side">
                {<ContactUs />}
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