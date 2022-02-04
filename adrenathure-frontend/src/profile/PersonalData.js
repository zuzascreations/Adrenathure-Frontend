import { Suspense } from 'react'
import Loading from '../Loading'
import useFetch from '../useFetch'
import { Link } from 'react-router-dom'
import Avatar from './Avatar'

function PersonalData() {
  const personalData = useFetch('http://localhost:3000/users/profile')
  return personalData && (
    <div className="personalData">
      <Avatar />
      <div>
        <h4>nombre: {personalData.firstName}</h4>
        <h4>apellidos: {personalData.lastName}</h4>
        <h4>e-mail: {personalData.email}</h4>
      </div>
      <button><Link to="/profile/editar">editar</Link></button>
    </div>
  )
}

const PersonalDataWrapper = () =>
  <Suspense fallback={<Loading className='page' />}>
    <PersonalData />
  </Suspense>


export default PersonalDataWrapper