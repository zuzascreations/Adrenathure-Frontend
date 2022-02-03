import { Suspense, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { useRegister, useSetUser } from "./hooks"
import Loading from "./Loading"

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
    const data = await res.json()
    if (res.ok) {
      setUser(data)
      navigate('/')
    } else {
      setError(data.error)
    }
  }

  return (

    <div className='divLogin'>
      {registered &&
        <div>enhorabuena tu cuenta ha sido creada con éxito</div>
      }
      <div>
        <h1>acceso</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <input type='email' value={email} onChange={(e) => setEmail(e.target.value)}></input>
        <input type='password' value={password} onChange={(e) => setPassword(e.target.value)}></input>
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