import React from 'react'
import './SectionFirstView.css'
export default function SectionFirstView({ onAddContact }) {
  return (
    <div className='section_SectionFirstView'>
      <div className='section_SectionFirstView--content'>
        <h2 className='section_SectionFirstView--content--title'>Selecciona un chat para comenzar a enviar mensajes</h2>
        <p className='section_SectionFirstView--content--paragraph'>Cuando selecciones un chat, aparecerán los mensajes y podrás enviar nuevos mensajes a esa persona o grupo.</p>
      </div>
      <div className='section_SectionFirstView--content--buttoms'>
        <div className='section_SectionFirstView--content--senddocuments'>

          <button className='section_SectionFirstView--content--senddocuments--button'>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-file-earmark-arrow-up" viewBox="0 0 16 16">
              <path d="M8.5 11.5a.5.5 0 0 1-1 0V7.707L6.354 8.854a.5.5 0 1 1-.708-.708l2-2a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1-.708.708L8.5 7.707z" />
              <path d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2M9.5 3A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5z" />
            </svg>
          </button>
          <p className='section_SectionFirstView--content--senddocuments--paragraph'>Enviar documento</p>

        </div>
        <div className='section_SectionFirstView--content--addcontact'>

          <button onClick={onAddContact} className='section_SectionFirstView--content--addcontact--button'>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person-plus" viewBox="0 0 16 16">
              <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H1s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C9.516 10.68 8.289 10 6 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z" />
              <path fill-rule="evenodd" d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5" />
            </svg>
          </button>
          <p className='section_SectionFirstView--content--addcontact--paragraph'>Agregar un nuevo contacto</p>

        </div>
      </div>
    </div>
  )
}
