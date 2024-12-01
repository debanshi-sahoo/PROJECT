import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Main from './components/Main';
import Footer from './components/Footer';
import RegistrationPage from './components/RegistrationPage'; // Import RegistrationPage
import LoginPage from './components/LoginPage'; // Import LoginPage
import QuestionPaper from "./components/QuestionPaper";
import EventPage from "./components/EventPage"; // Import EventPage component
import './App.css'; // Import styles

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
      <Route path="/home" element={<Home />} /> 
        <Route path="/register/login" element={<RegistrationPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/question-paper" element={<QuestionPaper />} />
        <Route path="/" element={<Main />} />
        <Route path="/events" element={<EventPage />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
