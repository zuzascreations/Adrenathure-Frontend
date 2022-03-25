import { Suspense, useState } from 'react'
import { useNavigate, Navigate, useParams, Link } from 'react-router-dom'
import { useSetModal, useUser } from '../hooks'
import Loading from '../Loading'
import useFetch from '../useFetch'
import '../Form.css'


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
      setModal(<><p>Destino editado con exito</p> <button onClick={() => window.location.reload(true)}>Volver</button></>)
    } else {
      setModal(<><p>No se ha podido editar destino. Por favor, intenta de nuevo.</p> <button onClick={() => window.location.reload(true)}>Volver</button></>)
    }
  }

  if (!user) {
    return <Navigate to="/login" />
  }

  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <fieldset className="form-section">
          <legend>EDITAR DESTINO</legend>
          <label>
            <img className='photo-edit' src={`http://localhost:3000/${places.photo}`} alt="avatar" />
          </label>
          <label>
            <span>Cambiar foto destino</span>
            <input className="input" type='file' onChange={e => setFile(e.target.files[0])} />
          </label>
          <label>
            <span>Nombre destino</span>
            <br/>
            <input name="name" value={placeName} onChange={e => setPlaceName(e.target.value)} />
          </label>
          <label>
            <span>Descripción destino</span>
            <br/>
            <textarea name="description" value={placeDescription} onChange={e => setPlaceDescription(e.target.value)} />
          </label>
          <label>
            <span>Coordenadas longitude</span>
            <br/>
            <input name="coords" value={coordsLong} onChange={e => setCoordsLong(e.target.value)} />
          </label>
          <label>
            <span>Coordenadas latitude</span>
            <br/>
            <input name="coords" value={coordsLat} onChange={e => setCoordsLat(e.target.value)} />
          </label>
          <button>GUARDAR</button>
        </fieldset>
      </form>
      <div className="volver">
          <button><Link className="link" to={'/profile/admin/allPlaces'}>VOLVER</Link></button>
      </div>
      <p>{error}</p>
    </>
  )
}

const EditPlaceWrapper = () =>
  <Suspense fallback={<Loading className='page' />}>
    <EditPlace />
  </Suspense>

export default EditPlaceWrapper
