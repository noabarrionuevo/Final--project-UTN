import React, { use, useContext, useEffect, useState  } from 'react'
import ContactSidebar from '../../Components/ContactSidebar/ContactSidebar'
import { ContactDetailContext } from '../../Context/ContactDetailContext'
import MessagesList from '../../Components/MessagesList.jsx/MessagesList'
import AddNewMessages from '../../Components/AddNewMessages/AddNewMessages'
import './MassagesScreen.css'


export default function MessagesScreen() {
const {
    contactSelected,
    loadingContact,
    loadContactById
} = useContext(ContactDetailContext)
    return (
        <div className='MassagesScreens_App--container'>
            <ContactSidebar/>
            {
                loadingContact 
                ? <div>Cargando..</div>
                : <div>
                    <h2>{contactSelected.contact_name}</h2>
                    <MessagesList/>
                    <AddNewMessages/>
                </div>
            }
            
        </div>
    )
}