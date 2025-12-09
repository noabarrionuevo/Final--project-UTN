import React from 'react'
import './ContactSearchForm.css'
export default function ContactSearchForm() {
  return (
    <div className='contactsearchform_ContactSearchForm'>
      <div className='header_contactsearchform'>
        <h1>Whatsapp</h1>
        <div className='header_buttons'>
          <button className='header_contactsearchform--button_icons'>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-send-plus" viewBox="0 0 16 16">
              <path d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855a.75.75 0 0 0-.124 1.329l4.995 3.178 1.531 2.406a.5.5 0 0 0 .844-.536L6.637 10.07l7.494-7.494-1.895 4.738a.5.5 0 1 0 .928.372zm-2.54 1.183L5.93 9.363 1.591 6.602z"/>
              <path d="M16 12.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0m-3.5-2a.5.5 0 0 0-.5.5v1h-1a.5.5 0 0 0 0 1h1v1a.5.5 0 0 0 1 0v-1h1a.5.5 0 0 0 0-1h-1v-1a.5.5 0 0 0-.5-.5"/>
            </svg>
          </button>
          <button className='header_contactsearchform--button_icons'>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-three-dots-vertical" viewBox="0 0 16 16">
              <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"/>
            </svg>
          </button>          
        </div>
      </div>
        <div className='searchbar_contactsearchform'> 
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.085.122l3.02 3.02a1 1 0 0 0 1.415-1.414l-3.02-3.02q-.06-.044-.122-.085zM6.5 11a4.5 4.5 0 1 1 0-9 4.5 4.5 0 0 1 0 9"/>
                </svg>
                <input type="text" placeholder='Buscar un chat o iniciar uno nuevo' className='searchbar'/>
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