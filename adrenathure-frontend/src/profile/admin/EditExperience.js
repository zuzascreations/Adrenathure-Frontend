import { Suspense, useEffect, useState } from 'react'
import { useNavigate, Navigate, useParams, Link } from 'react-router-dom'
import { useUser } from '../../hooks'
import Loading from '../../Loading'
import useFetch from '../../useFetch'
import './EditExperience.css'


function EditExperience() {
  const { id } = useParams()
  const [experiences] = useFetch('http://localhost:3000/experiences/' + id)

  const [experienceDescription, setExperienceDescription] = useState(experiences.experienceDescription || '')
  const [experienceName, setExperienceName] = useState(experiences.experienceName || '')
  const [place_id, setPlace_id] = useState(experiences.place_id || '')
  const [experienceDate, setExperienceDate] = useState(experiences.experienceDate.substring(0, 10) || '')
  const [totalSeats, setTotalSeats] = useState(experiences.totalSeats || '')
  const [price, setPrice] = useState(experiences.price || '')
  const [experienceHour, setexperienceHour] = useState(experiences.experienceHour.substring(0, 5) || '')
  const [file, setFile] = useState(null)

  const [error, setError] = useState(null)
  const navigate = useNavigate()
  const user = useUser()

  const places = useFetch('http://localhost:3000/places')

  const fd = new FormData()
  if (file) {
    fd.append('avatar', file)
  }
  fd.append('experienceName', experienceName)
  fd.append('price', price)
  fd.append('experienceDescription', experienceDescription)
  fd.append('place_id', place_id)
  fd.append('experienceDate', experienceDate)
  fd.append('experienceHour', experienceHour)
  fd.append('totalSeats', totalSeats)

  const handleSubmit = async e => {
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
      setError('Updated successfully')
      window.location.reload(true)

    } else {
      if (res.status === 400) {
        setError('rellena los campos')
      }
      if (res.status === 404) {
        setError('Formato incorrecto, sigue las indicaciones en cada campo a cubrir')
      }
      if (res.status === 500) {
        setError('Database Error')
      }

    }
  }

  if (!user) {
    return <Navigate to="/login" />
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h2>editar experiencia</h2>
        <label>
          <span>nombre experiencia:</span>
          <input required name="name" value={experienceName} onChange={e => setExperienceName(e.target.value)} />
        </label>
        <label>
          <span>descripcion experiencia:</span>
          <textarea required name="description" value={experienceDescription} onChange={e => setExperienceDescription(e.target.value)} />
        </label>
        <label>
          <span>destino:</span>
          <select onChange={e => setPlace_id(e.target.value)} name='escoge destino'>
            <option disabled selected value>elige</option>
            {places &&
              places.map(place =>
                <option required name="place" value={place.id} >{place.placeName}</option>
              )
            }
          </select>
        </label>
        <label>
          <span>fechas:</span>
          <input required name="dates" value={experienceDate} onChange={e => setExperienceDate(e.target.value)} />
          <span className='formatInputs'>formato : 'yyyy-mm-dd '</span>
        </label>
        <label>
          <span>hora:</span>
          <input required name="hour" value={experienceHour} onChange={e => setexperienceHour(e.target.value)} />
          <span className='formatInputs'>formato : ' 00:00 '</span>

        </label>
        <label>
          <span>plazas totales:</span>
          <input required name="seats" value={totalSeats} onChange={e => setTotalSeats(e.target.value)} />
        </label>
        <label>
          <span>precio:</span>
          <input required name="price" value={price} onChange={e => setPrice(e.target.value)} />
        </label>
        <label>
          <span>foto:</span>
          <img className='experience-photo' src={`http://localhost:3000/${experiences.photo}`} alt="avatar" />
        </label>
        <label>
          cambiar foto:
          <input className="input" type='file' onChange={e => setFile(e.target.files[0])} />
        </label>
        <button>guardar</button>
        <button><Link to={'/profile/admin'}>volver</Link></button>

        <p>{error}</p>
      </form>
    </>
  )
}

const EditExperienceWrapper = () =>
  <Suspense fallback={<Loading className='page' />}>
    <EditExperience />
  </Suspense>

export default EditExperienceWrapper
