import React from 'react'
import './Modal.css'

export default function Modal({ isOpen, onClose, title, children }) {
    if (!isOpen) return null

    return (
        <div className='modal-overlay'>
            <div className='modal-content'>
                <div className='modal-header'>
                    <h2>{title}</h2>
                    <button onClick={onClose} style={{ background: 'none', border: 'none', color: 'white', cursor: 'pointer', fontSize: '1.2rem' }}>×</button>
                </div>
                <div className='modal-body'>
                    {children}
                </div>
            </div>
        </div>
    )
}
