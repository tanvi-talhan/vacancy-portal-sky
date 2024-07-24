import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './components/Home'
import Vacancy from './Vacancy';
import CandidateForm from './CandidateForm';
import CandidateList from './CandidateList';
import Logout from './Logout';
import Login from './components/Login';
import Register from './components/Register';
import Navbar from './components/Navbar';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Redirect from root to /login */}
        <Route path="/" element={<Navigate to="/login" replace />} />

        {/* Define the /login route */}
        <Route path="/login" element={<Login />} />

        {/* Define the /register route */}
        <Route path="/register" element={<Register />} />

        {/* Define nested routes under /nav */}
        <Route path="/nav" element={<Navbar />}>
          <Route path="home" element={<Home />} />
          <Route path="add-vacancy" element={<Vacancy />} />
          <Route path="add-candidate" element={<CandidateForm />} />
          <Route path="view-candidates" element={<CandidateList />} />
          <Route path="logout" element={<Logout />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
