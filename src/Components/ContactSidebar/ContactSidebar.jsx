import React, { useEffect, useState } from 'react'
import ContactList from '../ContactList/ContactList'
import ContactSearchForm from '../ContactSearchForm/ContactSearchForm'
import AddContactForm from '../AddContactForm/AddContactForm'
import './ContactSidebar.css'

export default function ContactSidebar() {

    const [isAddingContact, setIsAddingContact] = useState(false)

    const handleToggleAddContact = () => {
        setIsAddingContact(!isAddingContact)
    }

    return (
        <aside className='contactsidebar_App--container'>
            <div className='section_contactsearchform--container'>
                <ContactSearchForm onAddContact={handleToggleAddContact} />
                <div>
                    <div className='section_archived_contactsidebar--icons'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-archive" viewBox="0 0 16 16">
                            <path d="M0 2a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1v7.5a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 1 12.5V5a1 1 0 0 1-1-1zm2 3v7.5A1.5 1.5 0 0 0 3.5 14h9a1.5 1.5 0 0 0 1.5-1.5V5zm13-3H1v2h14zM5 7.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5" />
                        </svg>
                        <div className='section_archived_contactsidebar--content' >
                            <p className='section_archived_contactsidebar--contentText'>Archivados</p>
                            <p className='section_archived_contactsidebar--contentNumber'>1</p>
                        </div>
                    </div>
                </div>
            </div>
            {
                isAddingContact
                    ? <AddContactForm onCancel={handleToggleAddContact} />
                    : <ContactList />
            }
        </aside>
    )
}
