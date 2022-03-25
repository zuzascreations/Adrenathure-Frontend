import MapContact from './MapContact'
import './Contact.css'
import ContactUs from './ContactUs'


function Contact() {
    return(
        <div className='contact'>
          {<ContactUs />}
          <aside className="left-side">
              <ul className='address'>
                  <li className="addressHeader">Adrenathure</li>
                  <li>Avda. de García Barbón, 27</li>
                  <li>(Entrada por c/ Roupeiro, 27 Interior)</li>
                  <li>36201 Vigo</li>
                  <li>Pontevedra</li>
                  <li>España</li>
              </ul>
              <div className="map">
                {<MapContact />}
              </div>
          </aside>
        </div>
    )
}
export default Contact
