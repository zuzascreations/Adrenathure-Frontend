import { Suspense, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { useSetRegister } from "../hooks"
import Loading from "../Loading"
import '../Form.css'

function Register() {
  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [error, setError] = useState(null)
  const navigate = useNavigate()
  const setRegistered = useSetRegister()

  const handleSubmit = async e => {
    e.preventDefault()
    const res = await fetch('http://localhost:3000/users', {
      method: 'POST',
      body: JSON.stringify({ email, password: pass, firstName, lastName }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const data = await res.json()
    if (res.ok) {
      setError('Subido con éxito.')
      setRegistered(true)
      navigate('/login/')

    } else {
      setError(data?.error || 'Error desconocido')
    }
  }

  return (
    <div className='divRegister'>
      <form className="form" onSubmit={handleSubmit}>
        <fieldset className="form-section ">
          <legend>Crea tu cuenta adrenathure gratis y disfruta de nuestras exclusivas experiencias</legend>
          <label>
            <span>nombre</span>
            <br/>
            <input name="nombre" type='text' placeholder="Introduce tu nombre..." value={firstName} onChange={(e) => setFirstName(e.target.value)}></input>
          </label>
          <label>
            <span>apellidos</span>
            <br/>
            <input name="apellidos" type='text' placeholder="Introduce tus apellidos..." value={lastName} onChange={(e) => setLastName(e.target.value)}></input>
          </label>
          <label>
            <span>email</span>
            <br/>
            <input type='email' placeholder="Introduce tu e-mail..." value={email} onChange={(e) => setEmail(e.target.value)}></input>
          </label>
          <label>
            <span>password</span>
            <br/>
            <input type='password' placeholder="Introduce tu password..." value={pass} onChange={(e) => setPass(e.target.value)}></input>
          </label>
          <button>crear cuenta</button>
          {error && <div className="error">{error}</div>}
        </fieldset>
      </form>
      <nav>
        <p>Ya te has registrado? <Link to="/login" className='linkLogin'> Acceder</Link></p>
      </nav>
      <p>Al pulsar sobre “crear cuenta” confirmas haber leído y estar de acuerdo con la <Link to='privacidad' className="/privacidad">política de privacidad</Link>.</p>
    </div>
  )
}

const RegisterWrapper = () =>
  <Suspense fallback={<Loading className='page' />}>
    <Register />
  </Suspense>


export default RegisterWrapper