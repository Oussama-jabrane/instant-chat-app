import React, { useState } from 'react'
import { UserAuth } from '../context/AuthContext';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { db } from '../firebase';

const SendMessage = () => {
    const [value, setValue] = useState("");
    const { currentUser } = UserAuth();

    const handleSendMessage = async (e) => {
        e.preventDefault();

        if (value.trim() === "") {
            alert("Please enter a valid message!");
            return;
        }

        try {
            const { uid, displayName, photoURL } = currentUser;
            await addDoc(collection(db, "messages"), {
                text: value,
                name: displayName,
                avatar: photoURL,
                createdAt: serverTimestamp(),
                uid: uid
            })
        } catch (error) {
            console.error(error)
        }

        setValue("");
    }

    return (
        <div className="bg-gray-200 fixed bottom-0 w-full py-10 shadow-lg">
            <form onSubmit={handleSendMessage} className="containerWrap flex">
                <input value={value} onChange={e => setValue(e.target.value)} placeholder='Write a message...' className="input w-full rounded-r-none bg-gray-50 focus:outline-none" type="text" />
                <button type="submit" className="w-auto bg-green-600 text-white font-semibold rounded-r-lg px-5 text-sm hover:bg-green-800">Send</button>
            </form>
        </div>
    )
}

export default SendMessage