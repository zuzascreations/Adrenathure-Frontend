import { combineReducers } from "redux"

const emailReducer = (state = null, action) => {
  switch (action.type) {
    case 'login':
      return action.em
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
  email: emailReducer,
  modal: modalReducer,
  register: registerReducer
})

export default rootReducer
