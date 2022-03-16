import { Suspense } from 'react'
import Loading from '../Loading'
import useFetch from "../useFetch"
import './Avatar.css'

function Avatar() {
  const avatar = useFetch('http://localhost:3000/users/profile')
  return avatar && (
    <div className="avatar">
      <img id='photo-avatar' src={`http://localhost:3000/${avatar.avatar}`} alt="avatar" />
    </div>
  )
}

const AvatarWrapper = () =>
  <Suspense fallback={<Loading className="aside" />}>
    <Avatar />
  </Suspense>

export default AvatarWrapper