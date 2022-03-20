import { Suspense, useState } from 'react'
import { useNavigate, Navigate } from 'react-router-dom'
import { useSetModal, useUser } from '../hooks'
import Loading from '../Loading'
import useFetch from '../useFetch'
import UploadAvatar from './UploadAvatar'
import Avatar from './Avatar'
import '../Form.css'

function PersonalDataEdit() {
  const setModal = useSetModal()
  const personalData = useFetch('http://localhost:3000/users/profile')
  const [firstName, setFirstName] = useState(personalData.firstName || '')
  const [lastName, setLastName] = useState(personalData.lastName || '')
  const [email, setEmail] = useState(personalData.email || '')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState(null)
  const navigate = useNavigate()
  const user = useUser()

  const handleSubmit = async e => {
    e.preventDefault()
    const res = await fetch('http://localhost:3000/users', {
      method: 'PUT',
      body: JSON.stringify({ firstName, lastName, email, password }),
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + user.token
      }
    })
    // const data = await res.json()

    if (res.ok) {
      setMessage('Updated successfully')
      setModal(
        <>
          <span>perfil actualizado correctamente</span>
          <button onClick={() => {
            setModal(null)
            navigate('/Profile')
            window.location.reload(true)
          }}>volver</button>
        </>
      )

    } else {
      setMessage('Error desconocido')
    }
  }

  if (!user) {
    return <Navigate to="/login" />
  }

  return (
    <div className="form">
      <fieldset className="form-section">
        <legend>Editar foto</legend>
        <div className="avatar-edit">
            <Avatar />
            <UploadAvatar />
        </div>
      </fieldset>
      <form onSubmit={handleSubmit}>
        <fieldset className="form-section">
          <legend>Editar datos personales</legend>
          <label>
            <span>nombre*</span>
            <br/>
            <input name="firstName" value={firstName} onChange={e => setFirstName(e.target.value)} />
          </label>
          <label>
            <span>apellidos*</span>
            <br/>
            <input name="lastName" value={lastName} onChange={e => setLastName(e.target.value)} />
          </label>
          <label>
            <span>e-mail*</span>
            <br/>
            <input name="email" value={email} onChange={e => setEmail(e.target.value)} />
          </label>
          <label>
            <span>contraseña*</span>
            <br/>
            <input required type="password" placeholder="Confirma tu contraseña..." name="password" value={password} onChange={e => setPassword(e.target.value)} />
          </label>
          <p>* campos obligatorios</p>
          <br/>
          <button>guardar</button>
          <p>{message}</p>
        </fieldset>
      </form>
    </div>
  )
}

const PersonalDataEditWrapper = () =>
  <Suspense fallback={<Loading className='page' />}>
    <PersonalDataEdit />
  </Suspense>


export default PersonalDataEditWrapper