import { Suspense } from 'react'
import Loading from '../Loading'
import useFetch from "../useFetch"

function Avatar() {
  const avatar = useFetch('http://localhost:3000/users/profile')
  return avatar && (
    <div className="avatar">
      <img src={avatar.avatar} alt="avatar" />
    </div>
  )
}

const AvatarWrapper = () =>
  <Suspense fallback={<Loading className="aside" />}>
    <Avatar />
  </Suspense>

export default AvatarWrapper