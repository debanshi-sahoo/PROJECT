import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header'; // Import Header Component
import Main from './components/Main'; // Main includes Home functionality
import Footer from './components/Footer'; // Import Footer Component
import RegistrationPage from './components/RegistrationPage'; // Import RegistrationPage
import LoginPage from './components/LoginPage'; // Import LoginPage
import QuestionPaper from './components/QuestionPaper'; // Import QuestionPaper Component
import Resource from './components/Resource'; // Import Resource Component
import EventPage from './components/EventPage'; // Import EventPage Component
import FileSharing from './components/FileSharing'; // Import FileSharing Component
import './App.css'; // Import global styles

const App = () => {
  return (
    <Router>
      {/* Display the Header across all routes */}
      <Header />
      
      {/* Define routes */}
      <Routes>
        {/* Home route */}
        <Route path="/" element={<Main />} />
        <Route path="/home" element={<Main />} />
        
        {/* Auth routes */}
        <Route path="/register" element={<RegistrationPage />} /> {/* Updated route for Registration */}
        <Route path="/login" element={<LoginPage />} />
        
        {/* Functional routes */}
        <Route path="/events" element={<EventPage />} />
        <Route path="/file-sharing" element={<FileSharing />} />
        <Route path="/question-paper" element={<QuestionPaper />} />
        <Route path="/resources" element={<Resource />} />
      </Routes>
      
      {/* Display the Footer across all routes */}
      <Footer />
    </Router>
  );
};

export default App;
