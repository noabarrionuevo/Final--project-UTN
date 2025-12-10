import React, { use, useContext, useEffect, useState  } from 'react'
import ContactSidebar from '../../Components/ContactSidebar/ContactSidebar'
import { ContactDetailContext } from '../../Context/ContactDetailContext'
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
                : <h2>ultimo mensaje: {contactSelected.contact_name}</h2>
            }
            
        </div>
    )
}