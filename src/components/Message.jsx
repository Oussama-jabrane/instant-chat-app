import React from 'react'
import { UserAuth } from '../context/AuthContext'

const Message = ({ message, name }) => {
    const { currentUser } = UserAuth();

    return (
        <div>
            <div className={`chat ${message.uid === currentUser.uid ? "chat-end" : "chat-start"}`}>
                <div className="chat-image avatar">
                    <div className="w-10 rounded-full">
                        <img src={message.avatar} />
                    </div>
                </div>
                <div className="chat-header">
                    {name}
                </div>
                <div className={`chat-bubble ${message.uid === currentUser.uid ? "chat-bubble-info" : "chat-bubble-success"}`}>{message.text}</div>
                <div className="chat-footer opacity-50">
                    <time className="text-xs opacity-50"><small>{message.uid === currentUser.uid ? "Delivered" : "Received"}</small></time>
                </div>
            </div>
        </div>
    )
}

export default Message