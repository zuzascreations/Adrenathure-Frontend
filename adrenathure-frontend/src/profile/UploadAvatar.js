import { useState } from 'react'
import { useUser } from '../hooks'

function UploadAvatar() {
  const [file, setFile] = useState(null)
  const user = useUser()

  const handleSubmit = e => {
    e.preventDefault()
    const fd = new FormData()
    fd.append('avatar', file)
    fd.append('Authorization', 'Bearer ' + user.token)

    fetch('http://localhost:3000/users/uploads', {
      method: 'POST',
      body: fd,
      headers: fd
    })
  }
  return (
    <form onSubmit={handleSubmit}>
      <label>
        upload avatar
        <input className="input" type='file' onChange={e => setFile(e.target.files[0])} />
        <button className="subir">subir foto</button>
      </label>
    </form>
  )
}

export default UploadAvatar