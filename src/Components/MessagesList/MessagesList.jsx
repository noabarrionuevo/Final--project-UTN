
import './MessagesList.css'
import { useContext } from 'react'
import { ContactDetailContext } from '../../Context/ContactDetailContext'

const MessagesList = () => {
    const { contactSelected } = useContext(ContactDetailContext)

    // Helper to format time (moved outside loop)
    const formatTime = (dateInput) => {
        if (!dateInput) return ''
        const date = new Date(dateInput)
        return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true })
    }

    return (
        <div className="messages-list-container">
            {
                contactSelected && contactSelected.messages && contactSelected.messages.map((msg) => {
                    const isSentByMe = msg.message_sent_by_me

                    return (
                        <div key={msg.message_id} className={`message-row ${isSentByMe ? 'sent' : 'received'}`}>
                            <div className="message-bubble">
                                <div className="message-text">{msg.message_content}</div>
                                <div className="message-meta">
                                    <span className="timestamp">{formatTime(msg.message_created_at)}</span>
                                </div>
                            </div>
                        </div>
                    );
                })
            }
        </div>
    )
}

export default MessagesList