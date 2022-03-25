import { Suspense } from 'react'
import Loading from '../Loading'
import useFetch from "../useFetch"
import './Avatar.css'

function Avatar() {
  const avatar = useFetch('http://localhost:3000/users/profile')
  return (
    <div className="avatar">
      {avatar.avatar ?
      <img id='photo-avatar' src={`http://localhost:3000/${avatar.avatar}`} alt="avatar" /> :
      <img id='photo-avatar' src={'https://drive.google.com/uc?export=view&id=1E9KAFLEvniz4Lyk07EmrgpbWSwYxdh9f'} alt="avatar-default" />
      }
    </div>
  )
}

const AvatarWrapper = () =>
  <Suspense fallback={<Loading className="aside" />}>
    <Avatar />
  </Suspense>

export default AvatarWrapper