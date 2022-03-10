import { useState } from 'react'
import { useUser } from '../hooks'
import { useParams } from "react-router-dom"

function Punctuation() {
  const [vote, setVote] = useState('')
  const [error, setError] = useState(null)
  const user = useUser()
  const { id } = useParams()
  const handleSubmit = async e => {
    e.preventDefault()
    const res = await fetch('http://localhost:3000/reviews/' + id, {
      method: 'POST',
      body: JSON.stringify({ vote }),
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + user.token
      }
    })

    if (res.ok) {
      setError('Voto guardado con éxito')

    } else {
      if (res.status === 403) {
        setError('Ya votaste')
      }
      if (res.status === 500) {
        setError('Database Error')
      }
    }
  }

  return (
    <form className="punctuation" onSubmit={handleSubmit}>
      Vota
      <input min='0' max='5' type="number" value={vote} onChange={e => setVote(e.target.value)}></input>
      <button>vota</button>
      <p>{error}</p>
    </form>
  )
}

export default Punctuation