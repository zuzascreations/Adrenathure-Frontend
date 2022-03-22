import { Suspense } from 'react'
import Loading from '../Loading'
import useFetch from '../useFetch'
import { Link } from 'react-router-dom'
import Avatar from './Avatar'
import './PersonalData.css'
import ErrorBoundary from '../ErrorBoundary'

function PersonalData() {
  const personalData = useFetch('http://localhost:3000/users/profile')
  return personalData && (
    <div className="data">
      <div className="allPersonalData">
        <Avatar />
        <div className="personalData">
          <h4>{personalData.firstName} {personalData.lastName}</h4>
          <h4 className="email">{personalData.email}</h4>
        </div>
        <button><Link to="/profile/editar">EDITAR PERFIL</Link></button>
      </div>
    </div>
  )
}

const PersonalDataWrapper = () =>
  <Suspense fallback={<Loading className='page' />}>
    <ErrorBoundary fallback="PersonalData is failing">
      <PersonalData />
    </ErrorBoundary>
  </Suspense>


export default PersonalDataWrapper
