import { Suspense, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { useRegister, useSetUser } from "../hooks"
import Loading from "../Loading"
import './Login.css'

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(null)
  const navigate = useNavigate()
  const setUser = useSetUser()
  const registered = useRegister()

  const handleSubmit = async e => {
    e.preventDefault()
    const res = await fetch('http://localhost:3000/users/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: {
        'Content-Type': 'application/json'
      }
    })

    if (res.ok) {
      const data = await res.json()
      setUser(data)
      navigate('/')
    } else {
      if (res.status === 400 ){
        setError('rellena los campos')
      }
      if (res.status === 401 ){
        setError('Contraseña y/o email incorrecto')
      }
      if (res.status === 403 ){
        setError('El usuario no existe, por favor registrate')
      }
      if (res.status === 409 ){
        setError('Consulta tu email y activa tu cuenta')
      }
    }
  }

  return (

    <div className='divLogin'>
      {registered &&
        <div>Enhorabuena tu cuenta ha sido creada con éxito. En breve recibirás un mensaje de correo electrónico con enlace para activarla.</div>
      }
      <div>
        <h1>acceso</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <label>email:
          <input type='email' value={email} onChange={(e) => setEmail(e.target.value)}></input>
        </label>
        <label>password:
          <input type='password' value={password} onChange={(e) => setPassword(e.target.value)}></input>
        </label>
        <button>acceso</button>
        {error && <div className="error">{error}</div>}
      </form>
      <nav>
        <Link to="/register" className='linkRegister'>aun no te has registrado?</Link>
      </nav>
    </div>
  )
}

const LoginWrapper = () =>
  <Suspense fallback={<Loading className='page' />}>
    <Login />
  </Suspense>


export default LoginWrapper