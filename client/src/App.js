import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Auth0Provider } from "@auth0/auth0-react";
import LoginPage from './pages/LoginPage';
import UserProfile from './pages/UserProfile';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';

function App() {
  return (
    <Auth0Provider
      domain={process.env.REACT_APP_AUTH0_DOMAIN}
      clientId={process.env.REACT_APP_AUTH0_CLIENT_ID}
      redirectUri={process.env.REACT_APP_AUTH0_REDIRECT_URI}
    >
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/profile" element={<UserProfile />} />
        </Routes>
      </div>
    </Auth0Provider>
  );
}

export default App;
