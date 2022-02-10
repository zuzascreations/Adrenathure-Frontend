import { useDispatch, useSelector } from 'react-redux'
import './Modal.css'


function Modal() {
  const modal = useSelector(m => m.modal)
  const dispatch = useDispatch()
  const handleClick = () => dispatch({type:'modal', modal: null})
  const handlePropagation = e => e.stopPropagation()
  return modal && (
    <div className="modal-bg" onClick={handleClick}>
      <div className="modal-fg" >
        {modal}
      </div>
    </div>
  )
}

export default Modal
