import { createContext, useEffect, useState } from "react";
import { Outlet } from "react-router";
import { getContactList } from "../Service/contactService.js";
import LoadingScreen from "../Components/LoadingScreen/LoadingScreen.jsx";


export const ContactsListContext = createContext()

const ContactsListContextProvider = () => {
    const [contactState, setContactState] = useState([])
    const [loadingContactsState, setLoadingContactState] = useState(true)


    function loadContactList() {
        setLoadingContactState(true)
        setTimeout(
            function () {
                console.log('Cargando la lista de contactos')
                const contact_list = getContactList()
                setContactState(contact_list)
                setLoadingContactState(false)
            },
            2000
        )

    }

    function getContactById(contact_id) {
        for (const contact of contactState)
            if (Number(contact.contact_id) === Number(contact_id)) {
                return contact
            }
    }

    function updateContactById(contact_id, contact_to_update) {
        const new_conta = contactState.map(
            (contact) => {
                if (Number(contact.contact_id) === Number(contact_id)) {
                    return contact_to_update
                }
                return contact
            })
        setContactState(new_conta)
    }


    function addNewContact(contact_name, contact_phone) {
        const newContact = {
            contact_id: Date.now(), // Unique ID based on timestamp
            contact_name: contact_name,
            contact_phone: contact_phone || '',
            contact_avatar: 'https://ui-avatars.com/api/?name=' + contact_name,
            contact_unseen_messages: 0,
            last_message_content: '',
            last_message_state: 'SEEN',
            last_message_created_at: new Date(),
            messages: []
        }
        setContactState([...contactState, newContact])
    }

    function markMessagesAsRead(contact_id) {
        const updatedContacts = contactState.map(
            (contact) => {
                if (Number(contact.contact_id) === Number(contact_id)) {
                    return {
                        ...contact,
                        contact_unseen_messages: 0
                    }
                }
                return contact
            }
        )
        setContactState(updatedContacts)
    }

    useEffect(
        loadContactList,
        []
    )

    const providerValues = {
        contactState,
        loadingContactsState,
        loadContactList,
        addNewContact,
        getContactById,
        updateContactById,
        markMessagesAsRead
    }


    return (
        <ContactsListContext.Provider value={providerValues}>
            {loadingContactsState && <LoadingScreen />}
            <Outlet />
        </ContactsListContext.Provider>

    )
}

export default ContactsListContextProvider
