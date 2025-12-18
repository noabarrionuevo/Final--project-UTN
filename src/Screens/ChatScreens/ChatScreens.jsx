import React, { useState } from 'react'
import ContactSidebar from '../../Components/ContactSidebar/ContactSidebar.jsx'
import HeaderSideBar from '../../Components/HeaderSideBar/HeaderSideBar.jsx'
import SectionFirstView from '../../Components/SectionFirstView/SectionFirstView.jsx'
import AddContactForm from '../../Components/AddContactForm/AddContactForm.jsx'
import './ChatScreen.css'

export default function ChatScreen() {
    const [isAddingContact, setIsAddingContact] = useState(false)

    const handleToggleAddContact = () => {
        setIsAddingContact(!isAddingContact)
    }

    return (
        <div >
            <div className='chatScreens_App--container'>
                <HeaderSideBar />
                <ContactSidebar />
                {
                    isAddingContact
                        ? <div className='chatScreens_AddContactForm--wrapper'>
                            <AddContactForm onCancel={handleToggleAddContact} />
                        </div>
                        : <SectionFirstView onAddContact={handleToggleAddContact} />
                }
            </div>
        </div>
    )
}