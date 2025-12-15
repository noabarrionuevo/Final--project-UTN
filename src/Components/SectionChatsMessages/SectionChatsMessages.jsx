import React from 'react'
import { useNavigate } from 'react-router'
import './SectionChatsMessages.css'
import MessagesList from '../MessagesList/MessagesList'
import AddNewMessages from '../AddNewMessages/AddNewMessages'
export default function SectionChatsMessages({ title, avatar }) {
    const navigate = useNavigate();
    const handleButtomClick = () => { //esta funcion es para que al hacer click en el boton de volver, te redirija a la pantalla de chats
        navigate('/');
    };
    return (
        <section className='SectionChatsMessages'>
            <header className='SectionChatsMessages-header'>
                <div className='SectionChatsMessages-header-info'>
                    <div onClick={handleButtomClick} className='SectionChatsMessages-header-actions'>
                        <button className='SectionChatsMessages-header-actions__btn-goback'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-left-short" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5" />
                            </svg>
                        </button>
                    </div>
                    <img
                        src={avatar}
                        alt={title}
                        className='SectionChatsMessages-avatar'
                    />
                    <div className='SectionChatsMessages-text-container'>
                        <h2 className='SectionChatsMessages-title'>{title}</h2>
                        <span className='SectionChatsMessages-status'>En línea</span>
                    </div>
                </div>
                <div className='SectionChatsMessages-header-actions'>
                    <button className='SectionChatsMessages-header-actions-button'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.085.122l3.02 3.02a1 1 0 0 0 1.415-1.414l-3.02-3.02q-.06-.044-.122-.085zM6.5 11a4.5 4.5 0 1 1 0-9 4.5 4.5 0 0 1 0 9" />
                        </svg>
                    </button>
                    <button className='SectionChatsMessages-header-actions-button'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-camera-video" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M0 5a2 2 0 0 1 2-2h7.5a2 2 0 0 1 1.983 1.738l3.11-1.382A1 1 0 0 1 16 4.269v7.462a1 1 0 0 1-1.406.913l-3.111-1.382A2 2 0 0 1 9.5 13H2a2 2 0 0 1-2-2zm11.5 5.175 3.5 1.556V4.269l-3.5 1.556zM2 4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h7.5a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1z" />
                        </svg>
                    </button>
                    <button className='SectionChatsMessages-header-actions-button'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-three-dots-vertical" viewBox="0 0 16 16">
                            <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0" />
                        </svg>
                    </button>

                </div>
            </header>

            <div className='SectionChatsMessages-body'>
                <MessagesList />
            </div>

            <AddNewMessages />
        </section>
    )
}
