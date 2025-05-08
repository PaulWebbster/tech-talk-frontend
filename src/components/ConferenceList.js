import React from 'react';
import { Link } from 'react-router-dom';

function ConferenceList() {
  return (
    <div>
      <h2>Conferences</h2>
      <ul>
        <li>
          <Link to="/feedback">Cloud Conference 1</Link>
        </li>
        <li>
          <Link to="/feedback">Cloud Conference 2</Link>
        </li>
      </ul>
    </div>
  );
}

export default ConferenceList; 