import './About.css'

function About() {
    return(
        <div id='portada-body'>
            <div className='idPortada'>
                <div className='texto-portada'>
                    <h2 className='secondHeader'>Adrenathure</h2>
                    <p className="description-landing">Somos un portal de reservas de experiencias en la naturaleza, diferentes y de aventuras.
                            Ayudamos a las personas, guiándolas en la organización de sus actividades
                            al aire libre y al mejor precio.</p>
                </div>
                <img className='imgPortada' src='https://cdn.pixabay.com/photo/2018/01/06/23/25/snow-3066167_960_720.jpg' alt='foto-about'/>
            </div>
            <div className='idPortada'>
                <img className='imgPortada' src='https://cdn.pixabay.com/photo/2021/10/19/19/53/rafting-6724474_960_720.jpg' alt='foto-about'/>
                <div className='texto-portada'>
                    <h2 className='secondHeader'>Nuestro Equipo</h2>
                    <p className="description-landing">Adrenathure es una empresa joven formada por un equipo de personas con gran experiencia profesional
                            y comprometidos. Entre ellos hay técnicos, especialistas en atención al cliente, finanzas y ventas, 
                            cuya misión princiapl es perfeccionar en todo momento la experiencia del cliente a la hora de 
                            reservar una actividad al aire libre y al dusfrutar de la misma.</p>
                </div>
            </div>
        </div>      
    )
}
export default About




