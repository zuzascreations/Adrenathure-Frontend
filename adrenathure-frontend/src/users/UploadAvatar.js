import { Suspense, useState } from 'react'
import { useUser } from '../hooks'
import Loading from '../Loading'


function UploadAvatar() {
  const [file, setFile] = useState(null)
  const [message, setMessage] = useState(null)

  const user = useUser()

  const handleSubmit = e => {
    e.preventDefault()
    const fd = new FormData()
    fd.append('avatar', file)
    fd.append('Authorization', 'Bearer ' + user.token)

    const res = fetch('http://localhost:3000/users/uploads', {
      method: 'POST',
      body: fd,
      headers: fd
    })
    if (res) {
      setMessage('file uploaded succesfully')
      window.location.reload(true)
    }
  }
  return (
    <>
      <p>{message}</p>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Escojer foto perfil</span>
          <input required className="input" type='file' onChange={e => setFile(e.target.files[0])} />
          <button className="subir">subir foto</button>
        </label>
      </form>
    </>
  )
}

const UploadAvatarWrapper = () =>
  <Suspense fallback={<Loading className='page' />}>
    <UploadAvatar />
  </Suspense>


export default UploadAvatarWrapper