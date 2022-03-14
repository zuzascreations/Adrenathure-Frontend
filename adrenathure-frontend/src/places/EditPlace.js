import { Suspense, useState } from 'react'
import { useNavigate, Navigate, useParams } from 'react-router-dom'
import { useSetModal, useUser } from '../hooks'
import Loading from '../Loading'
import useFetch from '../useFetch'


function EditPlace() {
  const { id } = useParams()
  const setModal = useSetModal()
  const places = useFetch('http://localhost:3000/places/' + id)

  const [placeName, setPlaceName] = useState(places.placeName || '')
  const [placeDescription, setPlaceDescription] = useState(places.placeDescription || '')
  const [coordsLong, setCoordsLong] = useState(places.coordsLong || '')
  const [coordsLat, setCoordsLat] = useState((places.coordsLat) || '')
  const [file, setFile] = useState(null)

  const [error, setError] = useState(null)
  const navigate = useNavigate()
  const user = useUser()

  const fd = new FormData()
  if (file) {
    fd.append('avatar', file)
  }

  fd.append('placeName', placeName)
  fd.append('placeDescription', placeDescription)
  fd.append('coordsLong', coordsLong)
  fd.append('coordsLat', coordsLat)

  const handleSubmit = async e => {
    e.preventDefault()
    const res = await fetch('http://localhost:3000/places/admin/' + id, {
      method: 'PUT',
      body: fd,
      headers: {
        'Authorization': 'Bearer ' + user.token
      }
    })
    // const data = await res.json()
    if (res.ok) {
      setModal(<><p>destino editado con exito</p> <button onClick={() => window.location.reload(true)}>volver</button></>)
    } else {
      setModal(<><p>No se ha podido editar destino/ error desconocido</p> <button onClick={() => window.location.reload(true)}>volver</button></>)
    }
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
          <span>descripcion destino:</span>
          <input name="description" value={placeDescription} onChange={e => setPlaceDescription(e.target.value)} />
        </label>
        <label>
          <span>coordenadas longitude:</span>
          <input name="coords" value={coordsLong} onChange={e => setCoordsLong(e.target.value)} />
        </label>
        <label>
          <span>coordenadas latitude:</span>
          <input name="coords" value={coordsLat} onChange={e => setCoordsLat(e.target.value)} />
        </label>
        <label>
          <span>foto:</span>
          <img className='experience-photo' src={`http://localhost:3000/${places.photo}`} alt="avatar" />
        </label>
        <label>
          cambiar foto destino:
          <input className="input" type='file' onChange={e => setFile(e.target.files[0])} />
        </label>
        <button>guardar</button>
      </form>
      <p>{error}</p>
    </>
  )
}

const EditPlaceWrapper = () =>
  <Suspense fallback={<Loading className='page' />}>
    <EditPlace />
  </Suspense>

export default EditPlaceWrapper
