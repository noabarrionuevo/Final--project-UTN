import React, { useContext }  from 'react'
import './ContactList.css'
import { Link } from 'react-router'
import { ContactsListContext } from '../../Context/ContactsListContext'

export default function ContactList() {
        const {
        contactState,
        loadingContactsState
    } = useContext(ContactsListContext)

        if(loadingContactsState){
                return (
                    <div>Cargando contactos...</div>
                )
            }

            if(contactState.length === 0){
                return (
                    <div>No hay contactos</div>
                )
            }
return (
    <div className='contactlist_Contacts'>
        {
            contactState.map(
                function (contact){
                    return (
                        <Link className='contact-item' key={contact.contact_id} to={'/chat/' + contact.contact_id + '/messages'}>
                            <div className='contact-info'>
                                <img className='contact-avatar' src={contact.contact_avatar} alt={contact.contact_name} />
                                <div className='name-and-message-container'> 
                                    <h2 className='contact-name'>{contact.contact_name}</h2>
                                    <p className='contact-last-message-content'>{contact.last_message_content}</p>
                                </div>
                            </div>
                            <div className='contact-last-message'>
                                {
                                    contact.contact_unseen_messages > 0 &&
                                    <span className='contact-unseen-messages'>{contact.contact_unseen_messages}</span>
                                }
                            </div>
                        </Link>
                    )
                }
            )
        }
    </div>
)
}