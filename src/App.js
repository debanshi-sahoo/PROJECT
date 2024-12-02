import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Main from './components/Main'; // Main includes Home functionality
import Footer from './components/Footer';
import RegistrationPage from './components/RegistrationPage'; // Import RegistrationPage
import LoginPage from './components/LoginPage'; // Import LoginPage
import QuestionPaper from "./components/QuestionPaper";
import Resource from './components/Resource';
import EventPage from "./components/EventPage"; // Import EventPage component
import './App.css'; // Import styles
import FileSharing from './components/FileSharing'; // Import FileSharing Component

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        {/* Default route is Main */}
        <Route path="/" element={<Main />} />
        {/* Other routes */}
        <Route path="/home" element={<Main />} />
        <Route path="/register/login" element={<RegistrationPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/events" element={<EventPage />} />
        <Route path="/file-sharing" element={<FileSharing />} /> {/* Correct route for FileSharing */}
        <Route path="/question-paper" element={<QuestionPaper />} />
        <Route path="/resources" element={<Resource />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
