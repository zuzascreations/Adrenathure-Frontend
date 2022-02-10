import { Suspense, useState } from 'react'
import { useNavigate, Navigate } from 'react-router-dom'
import { useUser } from '../hooks'
import Loading from '../Loading'


function CreateExperience() {
  const [experienceName, setExperienceName] = useState('')
  const [experienceHour, setExperienceHour] = useState('')
  const [ experienceDescription, setExperienceDescription] = useState('')
  const [price, setPrice] = useState('')
  const [place_id, setPlace_id] = useState('')
  const [experienceDate, setExperienceDate] = useState('')
  const [totalSeats, setTotalSeats] = useState('')
  const [file, setFile] = useState(null)

  const [error, setError] = useState(null)
  const navigate = useNavigate()
  const user = useUser()

  const handleSubmit = async e => {
    e.preventDefault()
    const fd = new FormData()
    fd.append('avatar', file)
    fd.append('experienceName', experienceName)
    fd.append('price', price)
    fd.append('experienceDescription', experienceDescription)
    fd.append('place_id', place_id)
    fd.append('experienceDate', experienceDate)
    fd.append('experienceHour', experienceHour)
    fd.append('totalSeats', totalSeats)

    const res = await fetch('http://localhost:3000/experiences', {
      method: 'POST',
      // body: JSON.stringify({ experienceName, price, experienceDescription, place_id, experienceDate, experienceHour, totalSeats }),
      body: fd,
      headers: {
        Authorization: 'Bearer ' + user.token
      }
    })
    const data = await res.json()

    if (res.ok) {
      setError('Updated successfully')
      navigate('/')
    } else {
      setError(data?.error || 'Error desconocido')
    }
  }

  if (!user) {
    return <Navigate to="/login" />
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          <span>nombre experiencia:</span>
          <input name="name" value={experienceName} onChange={e => setExperienceName(e.target.value)} />
        </label>
        <label>
          <span>descripción experiencia:</span>
          <input name="description" value={experienceDescription} onChange={e => setExperienceDescription(e.target.value)} />
        </label>
        <label>
          <span>precio:</span>
          <input name="price" value={price} onChange={e => setPrice(e.target.value)} />
        </label>
        <label>
          <span>destino:</span>
          <input name="place" value={place_id} onChange={e => setPlace_id(e.target.value)} />
        </label>
        <label>
          <span>fechas:</span>
          <input name="dates" value={experienceDate} onChange={e => setExperienceDate(e.target.value)} />
        </label>
        <label>
          <span>Hora:</span>
          <input name="hour" value={experienceHour} onChange={e => setExperienceHour(e.target.value)} />
        </label>
        <label>
          <span>plazas totales:</span>
          <input name="seats" value={totalSeats} onChange={e => setTotalSeats(e.target.value)} />
        </label>
        <label>
        escoge foto experiencia:
        <input className="input" type='file' onChange={e => setFile(e.target.files[0])} />
      </label>
        <button>guardar</button>
        <p>{error}</p>
      </form>
    </>
  )
}

const CreateExperienceWrapper = () =>
  <Suspense fallback={<Loading className='page' />}>
    <CreateExperience />
  </Suspense>

export default CreateExperienceWrapper
