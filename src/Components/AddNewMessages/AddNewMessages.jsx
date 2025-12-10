import React , {useContext} from 'react'
import { ContactDetailContext } from '../../Context/ContactDetailContext'
export default function AddNewMessages() {
    const {addNewMessage} = useContext(ContactDetailContext)

    function handleSubmitNewMessage (event){
        event.preventDefault()
        const messages = event.target.messages.value
        addNewMessage(messages)
  return (
    <form onSubmit={handleSubmitNewMessage}>
            <label htmlFor="mensaje">Mensaje:</label> {/* Esto lo pueden ocultar */}
            <textarea id='mensaje'></textarea>
            <button>Enviar</button>
        </form>
  )
}
}

