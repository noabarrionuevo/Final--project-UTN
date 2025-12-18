import { useEffect, useState, createContext, useContext } from "react"
import { useParams, Outlet } from "react-router"
import { ContactsListContext } from "./ContactsListContext";
export const ContactDetailContext = createContext()

const ContactDetailContextProvider = () => {
    const parametros_url = useParams()
    const contact_id = parametros_url.contact_id
    const { contactState, getContactById, updateContactById, markMessagesAsRead } = useContext(ContactsListContext)
    const contactSelected = getContactById(contact_id)

    useEffect(() => {
        if (contact_id) {
            markMessagesAsRead(contact_id)
        }
    }, [contact_id])

    function addNewMessage(content) {
        const new_message = {
            message_id: contactSelected?.messages?.length + 1,
            message_content: content,
            message_state: 'NOT_SEND',
            message_created_at: new Date(),
            message_sent_by_me: true
        }
        const contactSelectedCloned = { ...contactSelected }

        /* Agregamos al clone de contacto el nuevo mensaje */
        contactSelectedCloned.messages.push(new_message)

        /* Actualizamos el contacto con el nuevo mensaje */
        updateContactById(contactSelectedCloned, contact_id)
    }

    const providerValues = {
        contactSelected,
        addNewMessage
    }
    return (
        <ContactDetailContext.Provider value={providerValues}>
            <Outlet />
        </ContactDetailContext.Provider>
    )
}

export default ContactDetailContextProvider