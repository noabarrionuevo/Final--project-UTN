import React, { use, useContext, useEffect, useStatet } from 'react'
import ContactSidebar from '../../Components/ContactSidebar/ContactSidebar'
import { ContactDetailContext } from '../../Context/ContactDetailContext'
import HeaderSideBar from '../../Components/HeaderSideBar/HeaderSideBar'
import { ContactsListContext } from '../../Context/ContactsListContext'
import SectionChatsMessages from '../../Components/SectionChatsMessages/SectionChatsMessages'
import './MessagesScreen.css'


export default function MessagesScreen() {
    const {
        contactSelected,
    } = useContext(ContactDetailContext)

    const { loadingContactsState } = useContext(ContactsListContext)
    return (
        <div className='MessagesScreens_App--container'>
            <HeaderSideBar />
            <ContactSidebar />
            {
                loadingContactsState
                    ? <h2>Cargando contactos...</h2>
                    : contactSelected
                        ? <div className='MessagesScreens_App--container--section_messages'>
                            <SectionChatsMessages title={contactSelected.contact_name} avatar={contactSelected.contact_avatar} />
                        </div>
                        : <h2>Selecciona un contacto para ver los mensajes</h2>
            }
        </div>
    )
}