
import { useDispatch, useSelector } from 'react-redux'
import './Modal.css'


function Modal() {
  const modal = useSelector(m => m.modal)
  const dispatch = useDispatch()
  const handleClick = () => dispatch({type:'modal', modal: null})
  const handleClick2 = e => e.stopPropagation()
  return modal && (
    <div className='modal-bg'>
      <div className="modal-fg"  onClick={handleClick2}>
        {modal}
      </div>
    </div>
  )
}

export default Modal
