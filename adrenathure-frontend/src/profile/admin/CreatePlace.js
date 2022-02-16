import { Suspense, useState } from 'react'
import { useNavigate, Navigate } from 'react-router-dom'
import { useUser } from '../../hooks'
import Loading from '../../Loading'


function CreatePlace() {
  const [placeName, setPlaceName] = useState('')
  const [placeDescription, setPlaceDescription] = useState('')
  const [coordsLong, setCoordsLong] = useState('')
  const [coordsLat, setCoordsLat] = useState('')
  const [file, setFile] = useState(null)

  const [error, setError] = useState(null)
  const navigate = useNavigate()
  const user = useUser()

  const handleSubmit = async e => {
    e.preventDefault()
    const fd = new FormData()
    fd.append('avatar', file)
    fd.append('placeName', placeName)
    fd.append('placeDescription', placeDescription)
    fd.append('coordsLong', coordsLong)
    fd.append('coordsLat', coordsLat)

    const res = await fetch('http://localhost:3000/places', {
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
    setPlaceName('')
  }

  if (!user) {
    return <Navigate to="/login" />
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          <span>nombre destino:</span>
          <input name="name" value={placeName} onChange={e => setPlaceName(e.target.value)} />
        </label>
        <label>
          <span>descripción destino:</span>
          <input name="description" value={placeDescription} onChange={e => setPlaceDescription(e.target.value)} />
        </label>
        <label>
          <span>coords longitude:</span>
          <input name="dates" value={coordsLong} onChange={e => setCoordsLong(e.target.value)} />
        </label>
        <label>
          <span>coords latitude:</span>
          <input name="hour" value={coordsLat} onChange={e => setCoordsLat(e.target.value)} />
        </label>
        <label>
        escoge foto destino:
        <input className="input" type='file' onChange={e => setFile(e.target.files[0])} />
      </label>
        <button>guardar</button>
        <p>{error}</p>
      </form>
    </>
  )
}

const CreatePlaceWrapper = () =>
  <Suspense fallback={<Loading className='page' />}>
    <CreatePlace />
  </Suspense>

export default CreatePlaceWrapper
