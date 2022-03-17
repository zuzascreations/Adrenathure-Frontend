import { Suspense } from 'react'
import Loading from '../Loading'
import useFetch from "../useFetch"
import './Avatar.css'

function Avatar() {
  const avatar = useFetch('http://localhost:3000/users/profile')
  console.log(avatar)
  return (
    <div className="avatar">
      {avatar.avatar ?
      <img id='photo-avatar' src={`http://localhost:3000/${avatar.avatar}`} alt="avatar" /> :
      <img id='photo-avatar' src={'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__480.png'} alt="avatar-default" />
      }
    </div>
  )
}

const AvatarWrapper = () =>
  <Suspense fallback={<Loading className="aside" />}>
    <Avatar />
  </Suspense>

export default AvatarWrapper