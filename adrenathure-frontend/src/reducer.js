import { combineReducers } from "redux"

const userReducer = (state = null, action) => {
  switch (action.type) {
    case 'login':
      return (action.user)
    default:
      return state
  }
}

const registerReducer = (state = false, action) => {
  switch (action.type) {
    case 'register':
      return action.registered
    default:
      return state
  }
}

const modalReducer = (state = null, action) => {
  switch (action.type) {
    case 'modal':
      return action.modal
    default:
      return state
  }
}

const rootReducer = combineReducers({
  user: userReducer,
  modal: modalReducer,
  registered: registerReducer,
})

export default rootReducer
