import React from 'react'
import './ContactSearchForm.css'
import { useNavigate } from 'react-router'

export default function ContactSearchForm({ onAddContact }) {
  const navigate = useNavigate();
  const handleButtomClick = () => { //esta funcion es para que al hacer click en el boton de volver, te redirija a la pantalla de chats
    navigate('/');
  };
  return (
    <div className='contactsearchform_ContactSearchForm'>
      <div className='header_contactsearchform'>
        <h1 onClick={handleButtomClick} className='header_contactsearchform--title'>Whatsapp</h1>
        <div className='header_buttons'>
          <button
            onClick={onAddContact} className='header_contactsearchform--button_icons'>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person-plus" viewBox="0 0 16 16">
              <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H1s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C9.516 10.68 8.289 10 6 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z" />
              <path fill-rule="evenodd" d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5" />
            </svg>
          </button>
          <button className='header_contactsearchform--button_icons'>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chat-square" viewBox="0 0 16 16">
              <path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-2.5a2 2 0 0 0-1.6.8L8 14.333 6.1 11.8a2 2 0 0 0-1.6-.8H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2.5a1 1 0 0 1 .8.4l1.9 2.533a1 1 0 0 0 1.6 0l1.9-2.533a1 1 0 0 1 .8-.4H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z" />
            </svg>
          </button>
          <button className='header_contactsearchform--button_icons'>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-three-dots-vertical" viewBox="0 0 16 16">
              <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0" />
            </svg>
          </button>
        </div>
      </div>
      <div className='searchbar_contactsearchform'>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
          <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.085.122l3.02 3.02a1 1 0 0 0 1.415-1.414l-3.02-3.02q-.06-.044-.122-.085zM6.5 11a4.5 4.5 0 1 1 0-9 4.5 4.5 0 0 1 0 9" />
        </svg>
        <input type="text" placeholder='Buscar un chat o iniciar uno nuevo' className='searchbar' />
      </div>
      <div className='filter_buttons'>
        <button>Todos</button>
        <button>No leidos</button>
        <button>Grupos</button>
        <button>Favoritos</button>
      </div>
    </div>
  )
}