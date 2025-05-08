import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ConferenceList from './components/ConferenceList';
import FeedbackForm from './components/FeedbackForm';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ConferenceList />} />
        <Route path="/feedback/:conferenceId" element={<FeedbackForm />} />
      </Routes>
    </Router>
  );
}

export default App;