import { Suspense, useState } from 'react'
import Loading from '../Loading'
import useFetch from "../useFetch"
import { Link } from "react-router-dom"
import { useSetModal, useUser } from '../hooks'
import '../List.css'

function AllExperiences() {
  const setModal = useSetModal()
  const user = useUser()
  const experiences = useFetch('http://localhost:3000/experiences')

  const handleClick = async (e) => {
    const expId = e.target.value
    const res = await fetch('http://localhost:3000/experiences/admin', {
      method: 'DELETE',
      body: JSON.stringify({ expId }),
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + user.token
      }
    })
    if (res.ok) {
      setModal('Deleted successfully')
      window.location.reload(true)
    } else {
      if (res.status === 404) {
        setModal(<><p>'No se ha podido borrar//Error desconocido'</p><button onClick={() => setModal(null)}>volver</button></>)

      }
    }
  }

  return experiences && (
    <div className="list">
      <h2 className="list-title">LAS EXPERIENCIAS</h2>
      <div className='grid-list-experiences'>
        <span>
          <strong>NOMBRE EXPERIENCIA</strong>
        </span>
        <span>
          <strong>DESTINO</strong>
        </span>
        <span>
          <strong>PRICE</strong>
        </span>
        <span>
          <strong>DESCRIPCIÓN</strong>
        </span>
        <span>
          <strong>FOTO</strong>
        </span>
        <span>
          <strong>VALUACIÓN</strong>
        </span>
      </div>
      {experiences.map(experience =>
        <>
          <div key={experience.id} className='grid-list-experiences'>
            <span className='columna'>{experience.experienceName}</span>
            <span className='columna'>{experience.placeName}</span>
            <span className='columna'>{experience.price}€</span>
            <span className='columna'>{experience.experienceDescription}</span>
            <span><img className='photo-edit' src={`http://localhost:3000/${experience.experiencePhoto}`} alt="avatar" /></span>
            <span className='columna'>{'★★★★★☆☆☆☆☆'.substring(5 - experience.avgVote, 10 - experience.avgVote)}</span>
          </div>
          <div className="section-buttons">
            <button className="button-link"><Link className="link" to={"/profile/admin/editExperience/" + experience.id}>EDITAR</Link></button>
            <button className="bin" value={experience.id} onClick={handleClick}>BORRAR</button>
          </div>
        </>
      )}
      <div className="button-anadir">
        <button><Link className="link" to={"/profile/admin/newExperience"}>AÑADIR NUEVA EXPERIENCIA</Link></button>
      </div>
    </div>
  )
}

const AllExperiencesWrapper = () =>
  <Suspense fallback={<Loading className='page' />}>
    <AllExperiences />
  </Suspense>

export default AllExperiencesWrapper
