import React from 'react'
import { Link } from 'react-router-dom'

const NotFound404 = () => {
    return (
        <div>
            <div className="bg-gray-300 hero min-h-screen">
                <div className="hero-content text-center">
                    <div className="max-w-md">
                        <h1 className="text-5xl font-bold">Error 404 ⚠️</h1>
                        <p className="py-6">The page that you're visiting is either archived or don't exist. Return back to the <Link to="/">Home Page</Link> and try to log in or <Link to="/chat">Join the chat</Link>.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NotFound404