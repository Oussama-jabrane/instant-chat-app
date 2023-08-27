import React, { useEffect, useState, useRef } from 'react';
import { collection, query, onSnapshot, orderBy, limit } from "firebase/firestore";
import Message from './Message';
import { db } from "../firebase";

const ChatBox = () => {

    const messagesEndRed = useRef();

    const [messages, setMessages] = useState([])

    const scrollToBottom = () => {
        messagesEndRed.current.scrollIntoView({ behavior: 'smooth' });
    }

    useEffect(scrollToBottom, [messages])

    useEffect(() => {
        const q = query(
            collection(db, "messages"),
            orderBy("createdAt"),
            limit(50)
        );
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            const messages = [];
            querySnapshot.forEach((doc) => {
                messages.push({ ...doc.data(), id: doc.id });
            });
            setMessages(messages)
        });

        return () => unsubscribe();
    }, [])


    return (
        <div className="pb-44 pt-20 containerWrap">
            {messages.map(message => (
                <Message key={message.id} message={message} name={message.name} />
            ))}
            <div ref={messagesEndRed}></div>
        </div>
    )
}

export default ChatBox