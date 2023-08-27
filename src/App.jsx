import React from 'react';
import Login from './pages/Login';
import ChatRoom from './pages/ChatRoom';
import Profile from './pages/Profile';
import NotFound404 from "./pages/NotFound404";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { PrivateRoute } from './routes/PrivateRoute';
import { Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';

function App() {
  return (
    <AuthProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<><Login /><Footer /></>} />
        <Route path="/chat" element={<PrivateRoute><ChatRoom /></PrivateRoute>} />
        <Route path="/profile" element={<PrivateRoute><Profile /></PrivateRoute>} />
        <Route path="/*" element={<><NotFound404 /><Footer /></>} />
      </Routes>
    </AuthProvider>
  )
}

export default App
