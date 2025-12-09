import React from 'react'
import './HeaderSideBar.css'
export default function HeaderSideBar() {
return (
    <div className='HeaderSideBar--app-container'>
    <div className='header_HeaderSideBar'>
        <div className='header_buttons__container'>
            <button className='header_HeaderSideBar--button_icons'><a href="">ss</a></button>
            <button className='header_HeaderSideBar--button_icons'><a href="">ss</a></button>
            <button className='header_HeaderSideBar--button_icons'><a href="">ss</a></button>
        </div>
        <div>
            <button className='header_HeaderSideBar--button_icons'><a href="">ss</a></button>
            <img src="https://cdn-icons-png.flaticon.com/512/4646/4646084.png" alt="Avatar de usuario" className='header_HeaderSideBar--avatar'/>
        </div>
    </div>
</div>
)
}
