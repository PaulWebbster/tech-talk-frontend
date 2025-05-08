import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ConferenceList from './components/ConferenceList';
import FeedbackForm from './components/FeedbackForm';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<ConferenceList />} />
          <Route path="/feedback" element={<FeedbackForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;