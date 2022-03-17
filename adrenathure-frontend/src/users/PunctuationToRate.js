import React, { useState } from 'react'
import { Rating } from 'react-simple-star-rating'
import { useSetModal, useUser } from '../hooks'
import { useParams } from "react-router-dom"

function PunctuationToRate() {
  // const [vote, setVote] = useState('')
  const setModal = useSetModal()
  const [rating, setRating] = useState(0)
  const [error, setError] = useState(null)
  const user = useUser()
  const { id } = useParams()

  const handleRating = async rate => {
    //e.preventDefault()
    setRating(rate)
    const res = await fetch('http://localhost:3000/reviews/' + id, {
      method: 'POST',
      body: JSON.stringify({ rate }),
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + user.token
      }
    })

    if (res.ok) {
      setModal('Gracias por tu voto')
      //window.location.reload(true)
    } else {
      if (res.status === 403) {
        setModal('Ya votaste')
      }
      if (res.status === 500) {
        setModal('Database Error')
      }
    }
  }

  return (
    <div className='App'>
      <Rating onClick={handleRating} ratingValue={rating}/>
      <p>{error}</p>
    </div>
  )
}

export default PunctuationToRate