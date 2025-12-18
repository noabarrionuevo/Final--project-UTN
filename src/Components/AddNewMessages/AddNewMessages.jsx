import React, { useContext } from 'react'
import { ContactDetailContext } from '../../Context/ContactDetailContext'
import './AddNewMessages.css'
export default function AddNewMessages() {
  const { addNewMessage } = useContext(ContactDetailContext)

  function handleSubmitNewMessage(event) {
    event.preventDefault()
    const messages = event.target.messages.value
    addNewMessage(messages)
    event.target.reset() // elimina en el formulario el mensaje escrito
  }

  return (
    <form className='AddNewMessages-form' onSubmit={handleSubmitNewMessage}>
      <button className='AddNewMessages-btn'>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-lg" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2" />
        </svg>
      </button>
      <input name='messages' id='mensaje' className='AddNewMessages-input' placeholder='Escribe un mensaje' />
      <button className='AddNewMessages-btn'>Enviar</button>

    </form>
  )
}

