let contact_data = [
    {
        contact_id: 1,
        contact_name: 'Maria',
        contact_avatar: 'https://clipart-library.com/2023/847-8477662_msn-computer-icons-windows-live-messenger-clip-art.png',
        contact_unseen_messages: 1,
        last_message_content: 'Hola amigo',
        last_message_state: 'RECEIVED',/*'NOT_SEND' | 'NOT_RECEIVED' | 'RECEIVED' | 'SEEN'*/
        last_message_created_at: new Date(),
        messages: [
            {
                message_id: 1,
                message_content: 'Hola Maria',
                message_state: 'SEEN',
                message_created_at: new Date(),
                message_sent_by_me: true
            },
            {
                message_id: 2,
                message_content: 'Hola amigo',
                message_state: 'SEEN',
                message_created_at: new Date(),
                message_sent_by_me: false
            }
        ]
    },
    {
        contact_id: 2,
        contact_name: 'Juan',
        contact_avatar: 'https://images.freeimages.com/fic/images/icons/1733/msn_messenger_aqua/256/msn_online.png',
        contact_unseen_messages: 0,
        last_message_content: 'Que tal?',
        last_message_state: 'SEEN',
        last_message_created_at: new Date(),
        messages: [
            {
                message_id: 2,
                message_content: 'Que tal?',
                message_state: 'SEEN',
                message_created_at: new Date(),
                message_sent_by_me: false
            }
        ]
    },
    {
        contact_id: 3,
        contact_name: 'Lucia',
        contact_avatar: 'https://img.freepik.com/free-photo/front-view-business-woman-suit_23-2148603018.jpg?semt=ais_se_enriched&w=740&q=80',
        contact_unseen_messages: 2,
        last_message_content: 'Que bueno',
        last_message_state: 'RECEIVED',
        last_message_created_at: new Date(),
        messages: [
            {
                message_id: 1,
                message_content: 'Muy lindo dia nos toco hoy',
                message_state: 'SEEN',
                message_created_at: new Date(),
                message_sent_by_me: true
            },
            {
                message_id: 2,
                message_content: 'Mejor que el sol',
                message_state: 'SEEN',
                message_created_at: new Date(),
                message_sent_by_me: false
            },
            {
                message_id: 3,
                message_content: 'Que bueno',
                message_state: 'SEEN',
                message_created_at: new Date(),
                message_sent_by_me: false
            }
        ]
    },
    {
        contact_id: 4,
        contact_name: 'Pedro',
        contact_avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRokZZ8C5Gg1WSTOE9EshNSJYdVKe8acfkcyg&s',
        last_message_content: 'Hola amigo',
        last_message_state: 'RECEIVED',
        last_message_created_at: new Date(),
        messages: [
            {
                message_id: 1,
                message_content: 'Hola pedrito',
                message_state: 'SEEN',
                message_created_at: new Date(),
                message_sent_by_me: true
            },
            {
                message_id: 2,
                message_content: 'Hola amigo',
                message_state: 'SEEN',
                message_created_at: new Date(),
                message_sent_by_me: false
            }
        ]
    },
    {
        contact_id: 5,
        contact_name: 'Alan',
        contact_avatar: 'https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg',
        contact_unseen_messages: 1,
        last_message_content: 'Que mal',
        last_message_state: 'RECEIVED',
        last_message_created_at: new Date(),
        messages: [
            {
                message_id: 1,
                message_content: 'Hola Alan, se cancelo la reunion',
                message_state: 'SEEN',
                message_created_at: new Date(),
                message_sent_by_me: true
            },
            {
                message_id: 2,
                message_content: 'Que mal',
                message_state: 'SEEN',
                message_created_at: new Date(),
                message_sent_by_me: false
            }
        ]
    },
    {
        contact_id: 6,
        contact_name: 'Paula',
        contact_avatar: 'https://www.shareicon.net/data/256x256/2016/02/13/293851_msn_256x256.png',
        contact_unseen_messages: 1,
        last_message_content: 'Que bueno',
        last_message_state: 'RECEIVED',
        last_message_created_at: new Date(),
        messages: [
            {
                message_id: 1,
                message_content: 'Hola Paula, consegui el trabajo',
                message_state: 'SEEN',
                message_created_at: new Date(),
                message_sent_by_me: true
            },
            {
                message_id: 2,
                message_content: 'Que bueno',
                message_state: 'SEEN',
                message_created_at: new Date(),
                message_sent_by_me: false
            }
        ]
    },
]

export default contact_data