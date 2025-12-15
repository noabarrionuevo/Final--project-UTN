import React from 'react'
import './SectionChatsMessages.css'
import MessagesList from '../MessagesList/MessagesList'
import AddNewMessages from '../AddNewMessages/AddNewMessages'
export default function SectionChatsMessages({ title }) {

    return (
        <section className='SectionChatsMessages'>
            <header className='SectionChatsMessages-header'>
                <div className='SectionChatsMessages-header-info'>
                    <img
                        src={`https://ui-avatars.com/api/?name=${title}&background=random`}
                        alt={title}
                        className='SectionChatsMessages-avatar'
                    />
                    <div className='SectionChatsMessages-text-container'>
                        <h2 className='SectionChatsMessages-title'>{title}</h2>
                        <span className='SectionChatsMessages-status'>En línea</span>
                    </div>
                </div>
                <div className='SectionChatsMessages-header-actions'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.085.122l3.02 3.02a1 1 0 0 0 1.415-1.414l-3.02-3.02q-.06-.044-.122-.085zM6.5 11a4.5 4.5 0 1 1 0-9 4.5 4.5 0 0 1 0 9" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-three-dots-vertical" viewBox="0 0 16 16">
                        <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0" />
                    </svg>
                </div>
            </header>

            <div className='SectionChatsMessages-body'>
                <MessagesList />
            </div>

            <AddNewMessages />
        </section>
    )
}
