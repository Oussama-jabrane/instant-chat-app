import { createContext, useContext, useEffect, useState } from "react";
import { GoogleAuthProvider, signInWithRedirect, signOut } from "firebase/auth";
import { auth } from "../firebase"

// Create context
const AuthContext = createContext();
// Provider context
export const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // Signin with Google
    const signinWithGoogle = () => {
        const provider = new GoogleAuthProvider();
        signInWithRedirect(auth, provider)
    };

    // Logout
    const logout = () => signOut(auth)


    const value = {
        currentUser,
        setCurrentUser,
        signinWithGoogle,
        logout
    }

    // Set currentUser
    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            setCurrentUser(user);
            setLoading(false);
        });

        return unsubscribe;
    }, [])

    return (
        <AuthContext.Provider
            value={value}
        >
            {!loading && children}
        </AuthContext.Provider>
    );
};

export const UserAuth = () => {
    return useContext(AuthContext);
}