import React, { useContext } from 'react'
import { ContactsListContext } from '../../Context/ContactsListContext'
import './AddContactForm.css'

export default function AddContactForm({ onCancel }) {

    const { addNewContact } = useContext(ContactsListContext)

    function handleSubmitNewContact(event) {
        event.preventDefault()
        const name = event.target.contactName.value
        const phone = event.target.contactPhone.value
        if (name) {
            addNewContact(name, phone)
            onCancel()
        }
    }
    return (
        <div className='add-contact-form-container'>
            <h3>Nuevo Contacto</h3>
            <form onSubmit={handleSubmitNewContact}>
                <input
                    name="contactName"
                    placeholder="Nombre del contacto"
                    autoFocus
                    autoComplete="off"
                    required
                />
                <input
                    name="contactPhone"
                    placeholder="Numero de telefono"
                    autoComplete="off"
                    type='tel'
                />
                <div className='add-contact-form-buttons'>
                    <button type="button" onClick={onCancel} className='add-contact-btn add-contact-btn-cancel'>
                        Cancelar
                    </button>
                    <button type="submit" className='add-contact-btn add-contact-btn-confirm'>
                        Guardar
                    </button>
                </div>
            </form>
        </div>
    )
}
