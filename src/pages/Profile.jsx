import React from 'react'
import { UserAuth } from '../context/AuthContext'

const Profile = () => {
    const { currentUser, logout } = UserAuth();


    const handleLogout = async () => {
        try {
            await logout();
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <div className="h-screen flex flex-column items-center justify-center">

            <div className="card h-500 w-250 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <div className="avatar online">
                        <div className="w-24 rounded-full">
                            <img src={currentUser.photoURL} alt="avatar" />
                        </div>
                    </div>
                </figure>
                <div className="card-body items-center text-center">
                    <h4 className="card-title">Name: {currentUser.displayName}</h4>
                    <h4 className="card-title">Email: {currentUser.email}</h4>
                    <h4 className="card-title">Date Joined: {currentUser.metadata.creationTime}</h4>
                    <h4 className="card-title">Last Login: {currentUser.metadata.lastSignInTime}</h4>
                    <h4 className="card-title">UID: {currentUser.uid}</h4>
                    <h4 className="card-title">Provider Data: {currentUser.providerData[0].providerId}</h4>
                    <div className="card-actions mt-5">
                        <button className="btn btn-danger" onClick={() => window.my_modal_1.showModal()}>Log out</button>
                        <dialog id="my_modal_1" className="modal">
                            <form method="dialog" className="modal-box">
                                <h3 className="font-bold text-lg">Confirm Log out!</h3>
                                <p className="py-4">Are you sure you want to leave us and leave your chats friends 😔? We're very sad to see you leave after just joining the conversation. If you gave up the idea of logging out, please click ESC button to quit!</p>
                                <div className="modal-action">
                                    <button className="btn btn-error" onClick={handleLogout}>Log out</button>
                                </div>
                            </form>
                        </dialog>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile