import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ConferenceList from './components/ConferenceList';
import FeedbackForm from './components/FeedbackForm';
import Login from './components/Login';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<ConferenceList />} />
          <Route path="/login" element={<Login />} />
          <Route path="/feedback" element={<FeedbackForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;