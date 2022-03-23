import { Suspense } from 'react'
import { Link, useParams } from 'react-router-dom'
import Loading from './Loading'
import useFetch from './useFetch'

function AccountActivated() {
  let { validateCode }= useParams()

  const emailValidate = useFetch('http://localhost:3000/users/validate/' + validateCode)

  return (
    <div id='activatedPage'>
      <p>Bienvenido a Adrenathure , Tu Cuenta ha sido activada correctamente</p>
      <Link to='/login'>Login</Link>
    </div>
  )
}

const AccountActivatedWrapper = () =>
  <Suspense fallback={<Loading className='page' />}>
    <AccountActivated />
  </Suspense>


export default AccountActivatedWrapper