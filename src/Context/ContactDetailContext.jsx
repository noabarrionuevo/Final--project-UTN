import { useEffect, useState, createContext } from "react"
import { useParams,Outlet  } from "react-router"
import { getContactById } from "../Service/contactService"
export  const ContactDetailContext = createContext()
const ContactDetailContextProvider = () => {
    const parametros_url = useParams()
    const contact_id = parametros_url.contact_id
    const [contactSelected, setContactSelected] = useState(null)
    const [loadingContact, setLoadingContact] = useState(true)
    
    function loadContactById (){
        setLoadingContact(true)
        setTimeout(
            function () {
                const contact = getContactById(contact_id)
                setContactSelected(contact)
                setLoadingContact(false)
            },
            2000
        )
    }

    function addNewMessage (content){
        const new_message = {
            message_id: contactSelected.messages.length + 1,
            message_content: content,
            message_state: 'NOT_SEND',
            message_created_at: new Date(),
            message_sent_by_me: true
        }
        const contactSelectedCloned = { ...contactSelected }
        const messagesCloned = [...contactSelectedCloned.messages]
        messagesCloned.push(new_message)
        contactSelectedCloned.messages = messagesCloned
        setContactSelected(contactSelectedCloned)
    }
    useEffect(
        loadContactById,
        [parametros_url.contact_id]
    )

        const providerValues = {
        contactSelected,
        loadingContact,
        loadContactById,
        addNewMessage
    }
    return (
        <ContactDetailContext.Provider value={providerValues}>
            <Outlet/>
        </ContactDetailContext.Provider>
    )
}

export default ContactDetailContextProvider