import MapContact from '.contact/MapContact'
import '.contact/Contact.css'
import ContactUs from '.contact/ContactUS'


function Contact() {
    return(
        <div className='contact'>
            <aside clasName="left-side">
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