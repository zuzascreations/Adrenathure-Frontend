import './PoliticaDePrivacidad.css'
import { Link } from "react-router-dom"


function PoliticaDePrivacidad() {

    return(
      <div id='privacidad'>
        <h1 id='header1'>Política de privacidad</h1>
        <div className='bodyCookies'>
          <h3 id='header3'>1.- Identificación y datos de contacto del responsable</h3>
          <div className='mainCookies'>Denominación Social - Titular: ADRENATHURE</div>
          <div className='mainCookies'>NIF: B-XX.XXX.XXX</div>
          <div className='mainCookies'>Domicilio: Avda. de García Barbón, 27, CP 36201, Vigo</div>
          <div className='mainCookies'>Email: adrenathure.info@gmail.com</div>
          <div className='mainCookies'>El objeto de esta Política de Privacidad es facilitar información sobre los derechos de los usuarios, recogidos en el Reglamento General de Protección de Datos (“RGPD”).</div>
          <h3 id='header3'>2.- Información sobre los tratamientos realizados</h3>
          <h4 id='header4'>2.1.- Uso de la web “adrenathure.com”</h4>
          <div className='mainCookies'>Adrenathure será el responsable del tratamiento de los datos del usuario o usuaria, con la base legal de su consentimiento.</div>
          <div className='mainCookies'>La recogida de datos que se realice en “adrenathure.com” se hará con la finalidad de enviar información a los usuarios o usuarias de los servicios ofrecidos por Adrenathure.</div>
          <div className='mainCookies'>Adrenathure conservará los datos mientras dure su relación con el usuario o usuaria o su obligación legal de conservación.</div>
          <div className='mainCookies'>Los datos no serán cedidos a terceros a no ser que sea necesario para la finalidad perseguida, o cuando exista obligación legal.</div>
          <h3 id='header3'>3.- Derechos del usuario</h3>
          <div className='mainCookies4'>En base a la legislación española vigente, el usuario y titular de los datos, tiene derecho a:</div>
          <ul>
            <li className='mainCookies3'>Acceder a sus datos personales para conocer si están siendo objeto de tratamiento, y para informarse acerca de las operaciones de tratamiento que se lleven a cabo con ellos.</li>
            <li className='mainCookies3'>Rectificar cualquier dato personal inexacto.</li>
            <li className='mainCookies3'>Si fuera posible, suprimir sus datos personales.</li>
            <li className='mainCookies3'>Portar sus datos personales, cuando la base legal que habilite para su tratamiento sea la relación contractual o el consentimiento.</li>
            <li className='mainCookies3'>Oponerse al tratamiento de sus datos personales, en todo o en parte, cuando la base legal que habilite para su tratamiento sea el interés legítimo. Se exceptúa cuando hay un interés legítimo, o cuando sean necesarios para la formulación, el ejercicio o la defensa de reclamaciones.</li>
            <li className='mainCookies3'>Solicitar la limitación de tratamiento de sus datos personales cuando la exactitud, la legalidad o la necesidad del tratamiento de sus datos resulte dudosa, cabiendo la posibilidad de que se conserven para el ejercicio o la defensa de reclamaciones.</li>
            <li className='mainCookies3'>Revocar su consentimiento en cualquier momento.</li>
          </ul>
          <div className='mainCookies4'>En caso de que el alumno quiera ejercer cualquiera de estos derechos, se puede poner en contacto con Adrenathure en:</div>
          <ul>
          <li className='mainCookies3'>Correo electrónico: dpo.adrenathure@gmail.com</li>
          <li className='mainCookies3'>Domicilio: Avda. de García Barbón, 27, CP 36201, Vigo</li>
          </ul>
          <div className='mainCookies4'>Asimismo, la persona queda informada de que tiene derecho a presentar una consulta o reclamación ante la Agencia Española de Protección de Datos <Link to="https://www.aepd.es/es" target='_blank' rel="noreferrer" id='aepd'>(www.aepd.es)</Link>.</div>
          <h3 id='header3'>4.- Cookies</h3>
          <div className='mainCookies'>Únicamente utilizaremos “Cookies” cuando el usuario nos haya dado su consentimiento previo y expreso para ello. Para más información, el usuario puede acceder a la <Link to="/politicaDeCookies" target='_blank' rel="noreferrer" id='cookies'>Política de Cookies</Link>.</div>
          <h3 id='header3'>5.- Medidas de seguridad</h3>
          <div className='mainCookies'>Adrenathure adopta todas las medidas técnicas y organizativas necesarias para proteger la seguridad e integridad de la información personal, tanto frente a accesos no autorizados como frente a su alteración, pérdida o destrucción accidentales.</div>
          <div className='mainCookies'>A pesar de esto, Adrenathure no puede garantizar la seguridad absoluta de la información recopilada, por lo que el usuario debe colaborar y utilizar en todo momento el sentido común sobre la información compartida. Por su parte, Adrenathure hará todo lo posible.</div>
          <h3 id='header3'>6.- Exención de responsabilidad</h3>
          <div className='mainCookies'>Responderemos únicamente por lo que ocurra en relación con esta página web o su plataforma enlazada, y por tanto con sus Términos y Condiciones, y sus Políticas de Privacidad y Cookies. </div>
          <div className='mainCookies'>En caso de que el usuario sea redirigido a páginas webs o plataformas de terceros, serán de aplicación los textos legales de las mismas y HACK A BOSS no será responsable. </div>
          <h3 id='header3'>7.- Transferencias internacionales</h3>
          <div className='mainCookies'>Es posible que Adrenathure trabaje con algún proveedor fuera de la Unión Europea, por lo que ha procurado cumplir con los requisitos que establece la normativa de protección de datos para las transferencias internacionales.</div>
          <h3 id='header3'>8.- Posibles destinatarios</h3>
          <div className='mainCookies'>Adrenathure trabaja con algunos servicios que pueden tratar algunos de los datos de los usuarios de “adrenathure.com”. </div>
          <div className='mainCookies4'>Las páginas webs o plataformas de terceros a las que pueden tener acceso los usuarios a través de “adrenathure.com”, junto con los respectivos enlaces a sus Políticas de Privacidad, son:</div>
          <ul>
            <li className='mainCookies3'>Google Formularios: <Link to="https://policies.google.com/privacy?hl=es&gl=es" target='_blank' rel="noreferrer" id='cookies'>https://policies.google.com/privacy?hl=es&gl=es</Link></li>
            <li className='mainCookies3'>Google Sheets: <Link to="https://policies.google.com/privacy?hl=es&gl=es" target='_blank' rel="noreferrer" id='cookies'>https://policies.google.com/privacy?hl=es&gl=es</Link></li>
          </ul>
          <div className='mainCookies'>Estos proveedores de servicios pueden recopilar y tener acceso a la información que les sea necesaria para desempeñar sus funciones, pero no tienen permiso para compartir o utilizar la información para ningún otro propósito.</div>
          <div className='mainCookies'>Adrenathure tiene suscritos con todos los proveedores los términos de servicio y de tratamiento de datos que garantizan la confidencialidad de los mismos. Además, Adrenathure compartirá la información cuando exista obligación legal, o cuando crea que es apropiado para hacer cumplir los términos y condiciones de “adrenathure.com”, o por cuestiones de seguridad.</div>
        </div>
      </div>
    )
}

export default PoliticaDePrivacidad
