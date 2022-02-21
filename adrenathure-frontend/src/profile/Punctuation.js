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
    // const data = await res.json()

    if (res.ok) {
      setError('Voto guardado con éxito')

    } else {
      if (res.status === 403) {
        setError('Este voto ya existe')
      }
      if (res.status === 500) {
        setError('Database Error')
      }
    }
  }

  return (
    <form class="punctuation" onSubmit={handleSubmit}>
      Vota
      <input type="number" value={vote} onChange={e => setVote(e.target.value)}></input>
      {/* <select required name="punctuation">
        <option disabled selected value>puntuación:</option>
        <option name="one" value={vote} onChange={e => setVote(e.target.value)}>1</option>
        <option name="two" value={vote} onChange={e => setVote(e.target.value)}>2</option>
        <option name="three" value={vote} onChange={e => setVote(e.target.value)}>3</option>
        <option name="four" value={vote} onChange={e => setVote(e.target.value)}>4</option>
        <option name="five" value={vote} onChange={e => setVote(e.target.value)}>5</option>
      </select> */}
      <button>vota</button>
      <p>{error}</p>
    </form>
  )
}

export default Punctuation