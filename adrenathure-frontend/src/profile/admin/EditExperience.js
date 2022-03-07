import { Suspense, useState } from 'react'
import { useNavigate, Navigate, useParams, Link } from 'react-router-dom'
import { useUser } from '../../hooks'
import Loading from '../../Loading'
import useFetch from '../../useFetch'
import './EditExperience.css'


function EditExperience() {
  const { id } = useParams()
  const experiences = useFetch('http://localhost:3000/experiences/' + id)
  console.log(experiences)
  const places = useFetch('http://localhost:3000/places')


  const [dateId, setDateId] = useState('')
  const [experienceDescription, setExperienceDescription] = useState(experiences[0].experienceDescription || '')
  const [experienceName, setExperienceName] = useState(experiences[0].experienceName || '')
  const [place_id, setPlace_id] = useState(experiences[0].place_id || '')
  const [experienceDate, setExperienceDate] = useState('')
  const [totalSeats, setTotalSeats] = useState('')
  const [price, setPrice] = useState(experiences[0].price || '')
  const [experienceHour, setExperienceHour] = useState('')

  const [postExperienceDate, setPostExperienceDate] = useState('')
  const [postExperienceHour, setPostExperienceHour] = useState('')
  const [postTotalSeats, setPostTotalSeats] = useState('')

  const [file, setFile] = useState(null)

  const [message, setMessage] = useState(null)
  const [messagePost, setMessagePost] = useState(null)

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
    const res = await fetch('http://localhost:3000/experiences/' + id, {
      method: 'PUT',
      body: fd,
      headers: {
        'Authorization': 'Bearer ' + user.token
      }
    })
    // const data = await res.json()
    if (res.ok) {
      setMessage('Updated successfully')
      window.location.reload(true)

    } else {
      if (res.status === 400) {
        setMessage('rellena los campos')
      }
      if (res.status === 404) {
        setMessage('Formato incorrecto, sigue las indicaciones en cada campo a cubrir')
      }
      if (res.status === 500) {
        setMessage('Database Error')
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
      setMessage('Updated successfully')
      window.location.reload(true)

    } else {
      if (res.status === 400) {
        setMessage('rellena los campos')
      }
      if (res.status === 404) {
        setMessage('Formato incorrecto, sigue las indicaciones en cada campo a cubrir')
      }
      if (res.status === 500) {
        setMessage('Database Error')
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
      body: JSON.stringify({ postExperienceDate, postExperienceHour, postTotalSeats }),
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + user.token
      }
    })
    // const data = await res.json()
    if (res.ok) {
      setMessagePost('Updated DATE successfully')
      window.location.reload(true)

    } else {

      if (res.status === 500) {
        setMessagePost('Database Error')
      }

    }
  }

  const handleClick = async () => {
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
      setMessage('Deleted date successfully')
      window.location.reload(true)
    } else {
      if (res.status === 404) {
        setMessage('No se ha podido borrar date//Error desconocido')

      }
    }
  }

  const handleChangeSelectDate = e => {
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
          <select className='select' onChange={e => setPlace_id(e.target.value)} name='escoge destino'>
            <option disabled selected value></option>
            {places &&
              places.map(place =>
                <option required name="place" value={place.id} >{place.placeName}</option>
              )
            }
          </select>
        </label>

        <label>
          <span>precio:</span>
          <input required name="price" value={price + '€'} onChange={e => setPrice(e.target.value)} />
        </label>
        <label>
          <span>foto:</span>
          <img className='experience-photo' src={`http://localhost:3000/${experiences[0].experiencePhoto}`} alt="avatar" />
        </label>
        <label>
          cambiar foto:
          <input className="input" type='file' onChange={e => setFile(e.target.files[0])} />
        </label>
        <button>guardar</button>
        <button><Link to={'/profile/admin'}>volver</Link></button>

        <p>{message}</p>
      </form>

      <h2>fechas : </h2>

      <form className='editForms' onSubmit={handleSubmitEditDates}>
        <label>
          <h3>editar fechas :</h3>
          <span>fechas existentes:</span>

          <select className='select' onChange={handleChangeSelectDate} name='escoge fecha'>
            <option disabled selected >elige fecha para editar</option>
            {experiences &&
              experiences.map(experience =>
                <option required key={experience.id} id={experience.idDate} name='date' value={experience.experienceDate.substring(0, 10)} >{experience.experienceDate.substring(0, 10)}</option>
              )
            }
          </select>
          <div id='delete-date-button' onClick={handleClick}>borrar</div>
        </label>
        {(!experiences[0].experienceDate || !experiences[0].experienceHour || !experiences[0].totalSeats) ?
          <p>No hay fechas disponibles</p> :
          <>
            <label>
              <p> cambiar hora de la experiencia:</p>
              <input clearable bordered type='time' name="hour" value={experienceHour} onChange={e => {
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

      <h2>añadir nuevas fechas : </h2>

      <form className='editForms' onSubmit={handleSubmitPost}>
        <label>
          <span> añadir fecha de la experiencia:</span>
          <input required type='date' name="date" onChange={e => {
            setPostExperienceDate(e.target.value)
          }} />
        </label>
        <label>
          <span> añadir hora de la experiencia:</span>
          <input required type='time' name="hour" onChange={e => {
            setPostExperienceHour(e.target.value)
          }} />
        </label>

        <label>
          <span> añadir plazas totales:</span>
          <input required name="seats" onChange={e => setPostTotalSeats(e.target.value)} />
        </label>
        <button>añadir</button>
        <p>{messagePost}</p>
      </form>
    </>
  )
}

const EditExperienceWrapper = () =>
  <Suspense fallback={<Loading className='page' />}>
    <EditExperience />
  </Suspense>

export default EditExperienceWrapper
