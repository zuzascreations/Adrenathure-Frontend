import { Suspense } from 'react'
import { useParams } from 'react-router-dom'
import Loading from './Loading'
import useFetch from './useFetch'

function AccountActivated() {
  let { validateCode }= useParams()

  const emailValidate = useFetch('http://localhost:3000/users/validate/' + validateCode)

  return (
    <div>
      hola Bienvenido a Adrenathure
    </div>
  )
}

const AccountActivatedWrapper = () =>
  <Suspense fallback={<Loading className='page' />}>
    <AccountActivated />
  </Suspense>


export default AccountActivatedWrapper