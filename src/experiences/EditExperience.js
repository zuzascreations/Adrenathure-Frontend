import { Suspense, useState } from 'react'
import { useNavigate, Navigate, useParams, Link } from 'react-router-dom'
import { useSetModal, useUser } from '../hooks'
import Loading from '../Loading'
import useFetch from '../useFetch'
import './EditExperience.css'


function EditExperience() {
  const { id } = useParams()
  const setModal = useSetModal()
  const experiences = useFetch('http://localhost:3000/experiences/' + id)
  const places = useFetch('http://localhost:3000/places')



  const [dateId, setDateId] = useState('')
  const [experienceDescription, setExperienceDescription] = useState(experiences[0].experienceDescription || '')
  const [experienceName, setExperienceName] = useState(experiences[0].experienceName || '')
  const [place_id, setPlace_id] = useState(experiences[0].place_id || '')
  const [experienceDate, setExperienceDate] = useState('')
  const [totalSeats, setTotalSeats] = useState('')
  const [price, setPrice] = useState(experiences[0].price || '')
  const [experienceHour, setExperienceHour] = useState('')

  const [file, setFile] = useState(null)

  const [message, setMessage] = useState(null)
  const [messagePost, setMessagePost] = useState(null)
  const [messageDelete, setMessageDelete] = useState(null)


  const navigate = useNavigate()
  const user = useUser()


  const fd = new FormData()
  const fdDate = new FormData()
  if (file) {
    fd.append('avatar', file)
  }
  fdDate.append('dateId', Number(dateId))
  fd.append('experienceName', experienceName)
  fd.append('price', price)
  fd.append('experienceDescription', experienceDescription)
  fd.append('place_id', place_id)
  fdDate.append('experienceDate', experienceDate)
  fdDate.append('experienceHour', experienceHour)
  fdDate.append('totalSeats', totalSeats)

  const handleSubmitEdit = async e => {
    e.preventDefault()
    const res = await fetch('http://localhost:3000/experiences/admin/' + id, {
      method: 'PUT',
      body: fd,
      headers: {
        'Authorization': 'Bearer ' + user.token
      }
    })
    // const data = await res.json()
    if (res.ok) {
      setModal('Updated successfully')
      window.location.reload(true)

    } else {
      if (res.status === 400) {
        setModal('rellena los campos')
      }
      if (res.status === 404) {
        setModal('Formato incorrecto, sigue las indicaciones en cada campo a cubrir')
      }
      if (res.status === 500) {
        setModal('Database Error')
      }

    }
  }

  const handleSubmitEditDates = async e => {
    e.preventDefault()
    const res = await fetch('http://localhost:3000/dates/' + id, {
      method: 'PUT',
      body: fdDate,
      headers: {
        'Authorization': 'Bearer ' + user.token
      }
    })
    // const data = await res.json()
    if (res.ok) {
      setModal('Updated successfully')
      window.location.reload(true)

    } else {
      if (res.status === 400) {
        setModal('rellena los campos')
      }
      if (res.status === 404) {
        setModal('Formato incorrecto, sigue las indicaciones en cada campo a cubrir')
      }
      if (res.status === 500) {
        setModal('Database Error')
      }

    }
  }

  if (!user) {
    return <Navigate to="/login" />
  }

  const handleSubmitPost = async e => {
    e.preventDefault()
    const res = await fetch('http://localhost:3000/dates/' + id, {
      method: 'POST',
      body: JSON.stringify({ experienceDate, experienceHour, totalSeats }),
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + user.token
      }
    })
    // const data = await res.json()
    if (res.ok) {
      setModal('Updated DATE successfully')
      window.location.reload(true)
    } else {

      if (res.status === 500) {
        setModal('Database Error')
      }

    }
  }

  const handleDelete = async () => {
    if (dateId) {
      const res = await fetch('http://localhost:3000/dates', {
      method: 'DELETE',
      body: JSON.stringify({ dateId }),
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + user.token
      }
    })
    if (res.ok) {
      // const data = await res.json()
      setModal('Deleted date successfully')
      window.location.reload(true)
    } else {
      if (res.status === 404) {
        setModal('No se ha podido borrar date//Error desconocido')

      }
    }
    } else {
      setModal('escoge fecha primero')
    }
  }

  const handleChangeSelectDate = e => {
    setMessageDelete('')
    setTotalSeats(experiences[e.target.selectedIndex - 1].totalSeats)
    setExperienceHour(experiences[e.target.selectedIndex - 1].experienceHour)
    setExperienceDate(e.target.value)
    setDateId(e.target.options[e.target.options.selectedIndex].id)
  }

  return (
    <>
      <h2>editar experiencia : </h2>
      <form className='editForms' onSubmit={handleSubmitEdit}>

        <label>
          <span>nombre experiencia:</span>
          <input size='sm' required name="name" value={experienceName} onChange={e => setExperienceName(e.target.value)} />
        </label>
        <label>
          <span>descripcion experiencia:</span>
          <textarea required name="description" value={experienceDescription} onChange={e => setExperienceDescription(e.target.value)} />
        </label>
        <label>
          <p>destino: {experiences[0].placeName}</p>
          <span>  cambiar destino:</span>
          <select defaultValue={''} className='select' onChange={e => setPlace_id(e.target.value)} name='escoge destino'>
            <option disabled></option>
            {places &&
              places.map(place =>
                <option key={place.id} required name="place" value={place.id} >{place.placeName}</option>
              )
            }
          </select>
        </label>

        <label>
          <span>precio:</span>
          <input required name="price" value={price} onChange={e => setPrice(e.target.value)} />
          <span>€</span>
        </label>
        <label>
          <p>foto:</p>
          <img className='experience-photo' src={`http://localhost:3000/${experiences[0].experiencePhoto}`} alt="avatar" />
        </label>
        <label>
          cambiar foto:
          <input className="input" type='file' onChange={e => setFile(e.target.files[0])} />
        </label>
        <button>guardar</button>
       

        <p>{message}</p>
      </form>

      <h2>fechas : </h2>
      {experiences[0].experienceDate ?
        <form className='editForms' onSubmit={handleSubmitEditDates}>
          <label>
              <h3>editar fechas :</h3>
              <span>fechas existentes:</span>

               <select defaultValue={'elige fecha para editar'} className='select' onChange={handleChangeSelectDate} name='escoge fecha'>
                    <option disabled >elige fecha para editar</option>
                  {experiences &&
                    experiences.map(experience =>
                    <option required key={experience.idDate} id={experience.idDate} name='date' value={experience.experienceDate} >{experience.experienceDate}</option>
                    )
                  }
              </select>
              <div id='delete-date-button' onClick={handleDelete}>borrar fecha</div>
              <span>{messageDelete}</span>
          </label>
          {(!experiences[0].experienceDate || !experiences[0].experienceHour || !experiences[0].totalSeats) ?
          <p>No hay fechas disponibles</p> :
        <>
          <label>
            <p> cambiar hora de la experiencia:</p>
            <input type='time' name="hour" value={experienceHour} onChange={e => {
              setExperienceHour(e.target.value)
            }} />
          </label>
          <label>
            <p> cambiar fecha de la experiencia:</p>
            <input type='date' name="date" value={experienceDate} onChange={e => {
              setExperienceDate(e.target.value)
            }} />
          </label>
          <label>
            <span>plazas totales:</span>
            <input name="seats" value={totalSeats} onChange={e => setTotalSeats(e.target.value)} />
          </label>
        </>
      }
      <button>guardar</button>
      <p>{message}</p>
    </form>
    : <p>no hay fechas</p>}

      <h2>añadir nuevas fechas : </h2>

      <form className='editForms' onSubmit={handleSubmitPost}>
        <label>
          <span> añadir fecha de la experiencia:</span>
          <input required type='date' name="date" onChange={e => {
            setExperienceDate(e.target.value)
          }} />
        </label>
        <label>
          <span> añadir hora de la experiencia:</span>
          <input required type='time' name="hour" onChange={e => {
            setExperienceHour(e.target.value)
          }} />
        </label>

        <label>
          <span> añadir plazas totales:</span>
          <input type='number' min='1' max='20' required name="seats" onChange={e => setTotalSeats(e.target.value)} />
        </label>
        <button>añadir</button>
        <p>{messagePost}</p>
      </form>
      <button><Link to={'/profile/admin'}>volver</Link></button>
    </>
  )
}

const EditExperienceWrapper = () =>
  <Suspense fallback={<Loading className='page' />}>
    <EditExperience />
  </Suspense>

export default EditExperienceWrapper
