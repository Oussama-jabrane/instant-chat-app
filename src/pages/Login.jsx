import React, { useEffect } from 'react'
import { UserAuth } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();

    const { currentUser, signinWithGoogle } = UserAuth();
    console.log(currentUser)

    const handleLogin = async () => {
        try {
            await signinWithGoogle();
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        if (currentUser) {
            navigate("/chat")
        }
    }, [currentUser])

    return (
        <div>
            <div className="bg-gray-300 hero min-h-screen">
                <div className="hero-content text-center">
                    <div className="max-w-md">
                        <h1 className="text-5xl font-bold">Hi there 👋</h1>
                        <p className="py-6">Join the conversation, get the chance to meet new people and friends, and make connections in one room.</p>
                        <button onClick={handleLogin} className="btn btn-outline btn-info">Login With Google</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login