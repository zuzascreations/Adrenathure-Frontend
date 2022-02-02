import { useEffect, useState } from 'react'
import { useEmail} from './hooks'

function useFetch(url) {
  const [data, setData] = useState(null)
  const user = useEmail()
  
  useEffect(() => {
    const opts = {}
    if (user?.token) {
      opts.headers = { 'Authorization': 'Bearer ' + user.token }
    }
    fetch(url, opts)
      .then(res => res.json())
      .then(newData => setData(newData))
  }, [url, user])

  return data
}

export default useFetch
