import { createContext, useEffect, useState } from "react";
import { Outlet } from "react-router";
import { getContactList } from "../Service/contactService.js";


export const ContactsListContext = createContext()

const ContactsListContextProvider = () => {
    const [contactState, setContactState] = useState([])
    const [loadingContactsState, setLoadingContactState] = useState(true)


    function loadContactList (){
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

    useEffect (
        loadContactList,
        []
    )

    const providerValues = {
        contactState,
        loadingContactsState,
        loadContactList,
    }

    return (
        <ContactsListContext.Provider value={providerValues}>
            <Outlet />
        </ContactsListContext.Provider>
    )
}

export default ContactsListContextProvider