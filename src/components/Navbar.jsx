import React from 'react'
import { Link } from 'react-router-dom'
import { UserAuth } from '../context/AuthContext';

const Navbar = () => {
    const { currentUser, logout } = UserAuth();

    const handleLogout = async () => {
        try {
            await logout();
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <div className="navbar bg-primary text-primary-content">
            <div className="containerWrap flex justify-between">
                <Link to="/" className="btn btn-ghost text-neutral-100 normal-case text-xl">Instant Chat App</Link>
                <div>
                    {currentUser ? <div className="flex justify-between gap-7"><Link to="/profile">Profile</Link><button onClick={handleLogout}>Log out</button></div> : ""}
                </div>
            </div>
        </div>
    )
}

export default Navbar