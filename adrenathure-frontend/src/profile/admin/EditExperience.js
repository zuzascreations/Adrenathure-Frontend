import { Suspense, useState } from 'react'
import { useNavigate, Navigate, useParams } from 'react-router-dom'
import { useUser } from '../../hooks'
import Loading from '../../Loading'
import useFetch from '../../useFetch'


function EditExperience() {
  const { id } = useParams()
  const experiences = useFetch('http://localhost:3000/experiences/' + id )

  const [experienceDescription, setExperienceDescription] = useState(experiences[0].experienceDescription || '')
  const [experienceName, setExperienceName] = useState(experiences[0].experienceName || '')
  const [place_id, setPlace_id] = useState(experiences[0].place_id || '')
  const [experienceDate, setExperienceDate] = useState((experiences[0].experienceDate) || '')
  // const [photo, setPhoto] = useState('')
  const [totalSeats, setTotalSeats] = useState(experiences[0].totalSeats || '')
  const [price, setPrice] = useState(experiences[0].price || '')
  const [experienceHour, setexperienceHour] = useState(experiences[0].experienceHour || '')
  const [file, setFile] = useState(null)



  const [error, setError] = useState(null)
  const navigate = useNavigate()
  const user = useUser()

  const fd = new FormData()
  fd.append('avatar', file)
  fd.append('experienceName', experienceName)
  fd.append('price', price)
  fd.append('experienceDescription', experienceDescription)
  fd.append('place_id', place_id)
  fd.append('experienceDate', experienceDate)
  fd.append('experienceHour', experienceHour)
  fd.append('totalSeats', totalSeats)


  const handleSubmit = async e => {
    e.preventDefault()
    const res = await fetch('http://localhost:3000/experiences/' + id , {
      method: 'PUT',
      // body: JSON.stringify({ experienceName, experienceHour, place_id, experienceDate, totalSeats, price, experienceDescription }),
      body: fd,
      headers: {
        // 'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + user.token
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
      <form  onSubmit={handleSubmit}>
        <label>
          <span>nombre experiencia:</span>
          <input name="name" value={experienceName} onChange={e => setExperienceName(e.target.value)} />
        </label>
        <label>
          <span>descripcion experiencia:</span>
          <input name="description" value={experienceDescription} onChange={e => setExperienceDescription(e.target.value)} />
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
          <span>hora:</span>
          <input name="hour" value={experienceHour} onChange={e => setexperienceHour(e.target.value)} />
        </label>
        <label>
          <span>plazas totales:</span>
          <input name="seats" value={totalSeats} onChange={e => setTotalSeats(e.target.value)} />
        </label>
        <label>
          <span>precio:</span>
          <input name="price" value={price} onChange={e => setPrice(e.target.value)} />
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

const EditExperienceWrapper = () =>
  <Suspense fallback={<Loading className='page' />}>
    <EditExperience />
  </Suspense>

export default EditExperienceWrapper
