import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { useSetRegister } from "./hooks"



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
        body: JSON.stringify({ email, password:pass, firstName, lastName }),
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

    return(

            <div className='divRegister'>
                <div>
                    <h1>Crea tu cuenta Adrenathure</h1>
                    <p>Crea tu cuenta Adrenathure gratis y disfruta de nuestras exclusivas experiencias</p>
                </div>
                <form onSubmit={handleSubmit}>
                    <label>Nombre</label>
                    <input name="nombre" type='text' value={firstName}  onChange={(e) => setFirstName(e.target.value)}></input>
                    <label>Apellidos</label>
                    <input name="apellidos" type='text' value={lastName}  onChange={(e) => setLastName(e.target.value)}></input>
                    <label>Email</label>
                    <input type='email' value={email} onChange={(e) => setEmail(e.target.value)}></input>
                    <label>Password</label>
                    <input type='password' value={pass} onChange={(e) => setPass(e.target.value)}></input>
                    <button>Enviar</button>
                    {error && <div className="error">{error}</div>}
                </form>
                <nav>
                    <Link to="/login" className='linkLogin'>Ya te has registrado? ACCESO</Link>
                </nav>
                <p>Al pulsar sobre “Crear cuenta” confirmas haber leído y estar de acuerdo con el<Link to='privacidad' className="/privacidad">Aviso de privacidad</Link> </p>
            </div>
        )
}

export default Register