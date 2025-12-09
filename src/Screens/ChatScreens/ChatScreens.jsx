import React from 'react'
import ContactSidebar from '../../Components/ContactSidebar/ContactSidebar.jsx'
import HeaderSideBar from '../../Components/HeaderSideBar/HeaderSideBar.jsx'
import SectionFirstView from '../../Components/SectionFirstView/SectionFirstView.jsx'
import './ChatScreen.css'
export default function ChatScreen() {
    return (
        <div >
            <div className='chatScreens_App--container'>
                <ContactSidebar/>
                <SectionFirstView/>
            </div>
        </div>
)
}