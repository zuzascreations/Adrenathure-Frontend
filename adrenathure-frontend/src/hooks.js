import { useDispatch, useSelector } from "react-redux"

export const useEmail = () => useSelector(s => s.email) //em => email

export const useSetEmail = () => {
  const dispatch = useDispatch()
  return (em) => dispatch({ type: 'login', em})
}

export const useRegister = () => useSelector(s => s.registered)

export const useSetRegister = () => {
  const dispatch = useDispatch()
  return (registered) => dispatch({ type: 'register', registered})
}



export const useModal = () => useSelector(s => s.modal)

export const useSetModal = () => {
  const dispatch = useDispatch()
  return (modal) => dispatch({ type: 'modal', modal })
}
