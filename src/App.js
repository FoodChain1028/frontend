import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import UserPage from './pages/UserPage';
// import OperatorPage from './pages/OperatorPage';
// Import other components and pages as needed

function App() {
  return (
    <Router>
      <div>
        {/* You can include Header, Navbar, Footer here if they are common across pages */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          {/* <Route path="/user" element={<UserPage />} /> */}
          {/* <Route path="/operators" element={<OperatorPage />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
