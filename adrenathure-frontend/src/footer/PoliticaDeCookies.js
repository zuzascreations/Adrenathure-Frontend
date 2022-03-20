import './PoliticaDeCookies.css'
import { Link } from "react-router-dom"

function PoliticaDeCookies() {

    return(
      <div>
        <h1 id='header1'>Política de Cookies</h1>
        <div className='bodyCookies'>
          <div className='mainCookies'>En cumplimiento de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y del Comercio Electrónico (en adelante, “LSSI”), que se refiere a la utilización de cookies, Adrenathure informa a los usuarios que la web utiliza cookies para poder medir y analizar el tráfico, con el fin de facilitar la experiencia y ofrecer un mejor servicio. El usuario puede configurar su navegador para ser avisado en pantalla de la recepción de cookies, o bien para impedir su instalación, en cuyo caso, cabe la posibilidad de que deje de tener acceso a ciertas funciones en Internet.</div>
          <h3 id='header3'>1.- DEFINICIÓN Y FUNCIÓN DE LAS COOKIES</h3>
          <div className='mainCookies'>Una cookie es un pequeño archivo creado por un sitio en Internet con la función de almacenar información en el equipo del usuario. Cuando se accede a un sitio web que utiliza cookies, se solicita al navegador que guarde una o más cookies en el disco duro. </div>
          <div className='mainCookies'>Cuando el usuario vuelve a ese sitio web, el navegador envía de nuevo las cookies que le pertenecen, para así prestar un servicio e información personalizada en función de las necesidades del mismo.</div>
          <div className='mainCookies'>Las cookies también pueden llegar a guardar información que identifique personalmente a los usuarios, no siendo el caso de esta web, que sólo tendrá acceso a la información personal que el usuario decida proporcionar.</div>
          <div className='mainCookies'>Es posible cambiar la configuración de cookies del navegador que el usuario utiliza, para que le permita aprobar o rechazar automáticamente peticiones de almacenamiento de cookies cuando se cierra el navegador, además de otras opciones adicionales.</div>
          <h3 id='header3'>2.- TIPOS DE COOKIES QUE UTILIZA ESTA PÁGINA WEB</h3>
          <div className='mainCookies'>Esta web puede utilizar cookies propias técnicas para las cuales no es necesaria la obtención del consentimiento del usuario, por encontrarse excluidas del ámbito de aplicación del artículo 22. 2 de la LSSI.</div>
          <div className='mainCookies'>Además, utiliza cookies que requieren el consentimiento de los usuarios, las cuales serán enunciadas en este apartado:</div>
          <ul>
            <li className='mainCookies3'><span>Técnicas</span>: facilitan información sobre el uso que el usuario realiza de la web. No permiten identificar al usuario, porque la información que recogen es anónima y se utiliza únicamente para acciones de mejora que permitan que la web funcione de manera más ágil y adaptada a las preferencias de los usuarios.</li>
            <li className='mainCookies3'><span>De registro</span>: se crean tras el registro o cuando un usuario inicia sesión en la web.</li>
            <li className='mainCookies3'><span>De personalización</span>: permiten personalizar las funciones o contenidos de la web en función de los datos obtenidos del navegador.</li>
            <li className='mainCookies3'><span>Analíticas</span>: tienen fines estadísticos, de forma que la información se utiliza para medir la actividad, mediante Google Analytics, que es una herramienta gratuita de análisis web proporcionada por Google, permitiendo a los propietarios de los sitios web conocer cómo interactúan los usuarios con su sitio web.</li>
            <li className='mainCookies3'><span>Preferencias</span>: permiten saber si el usuario ha visitado antes la web. La pérdida de información almacenada en una cookie de preferencias puede hacer que la experiencia de la web sea menos funcional, pero no debe afectar a su funcionamiento.</li>
            <li className='mainCookies3'><span>Estado de la sesión</span>: guardan la información necesaria durante la sesión y los cambios relacionados con ella, y también determinan si el usuario está registrado.</li>
            <li className='mainCookies3'><span>Procesos</span>: permiten el funcionamiento de la web y ofrecen servicios esperados por el usuario que accede a la misma.</li>
          </ul>
          <h3 id='header3'>3.- CONSENTIMIENTO</h3>
          <div className='mainCookies'>Al navegar en “adrenathure.com” el usuario está consintiendo el uso de las cookies técnicamente necesarias enunciadas anteriormente, con sus plazos y las condiciones recogidas en la presente. En caso de que el usuario no permita la instalación de cookies en su navegador, es posible que no pueda acceder a alguna de las funcionalidades de la web. Para el uso de cookies técnicamente no necesarias se solicitará el consentimiento del usuario, que tendrá la opción de aceptarlas o rechazarlas.</div>
          <div className='mainCookies'></div>
          <div className='mainCookies'></div>
          <h3 id='header3'>4.- ELIMINACIÓN DE COOKIES</h3>
          <div className='mainCookies'>El usuario puede configurar su navegador para permitir, bloquear, eliminar o desactivar las cookies instaladas en su equipo, mediante la configuración de las opciones del navegador instalado.</div>
          <div className='mainCookies'>Para configurar el navegador, desactivar o administrar la instalación de cookies, y que de esta forma se borren automáticamente cuando se cierre el navegador, equipo o dispositivo, el usuario puede obtener más información en función del navegador que utilice en las webs propias habilitadas para ello de cada navegador.</div>
          <div className='mainCookies'>De forma general, la mayor parte de los navegadores permiten el acceso rápido a la eliminación de los datos de navegación, pulsando la secuencia de teclas Ctrl+Mayus+Supr para borrar las cookies.</div>
          <h3 id='header3'>5.- ACTUALIZACIÓN DE LA POLÍTICA DE COOKIES</h3>
          <div className='mainCookies'>Adrenathure se reserva el derecho a actualizar la presente Política de Cookies en función de las exigencias legales o técnicas del momento. Por ello, aconseja a los usuarios mantenerse informados toda vez que accedan a esta página web o a su plataforma enlazada.</div>
          <h3 id='header3'>6.- POLÍTICA DE PRIVACIDAD</h3>
          <div className='mainCookies'>Para obtener más información sobre el tratamiento de los datos personales, el usuario puede acceder a la <Link to="/politicaDePrivacidad" target='_blank' rel="noreferrer" id='cookies'>Política de Privacidad</Link>.</div>
          <h3 id='header3'>7.- CONTACTO</h3>
          <div className='mainCookies'>En caso de duda o sugerencia sobre la presente Política de Cookies, el usuario puede ponerse en contacto con Adrenathure a través de la siguiente dirección de correo electrónico:</div>
          <div className='mainCookies2'>adrenathure.info@gmail.com</div>
        </div>
      </div>
    )
}

export default PoliticaDeCookies