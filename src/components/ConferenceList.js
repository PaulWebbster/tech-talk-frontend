import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function ConferenceList() {
  const [conferences, setConferences] = useState([]);

  useEffect(() => {
    fetch('https://akhenr2oenza574lweyxuo2c240smjjd.lambda-url.eu-west-1.on.aws/conferences')
      .then(response => response.json())
      .then(data => {
        // Map the response to match the existing structure
        const formattedConferences = data.map(conference => ({
          id: conference.conferenceId,
          name: conference.name,
          date: conference.date,
          keywords: conference.keywords,
          location: 'TBD', // Assuming location is not provided in the response
        }));
        setConferences(formattedConferences);
      })
      .catch(error => console.error('Error fetching conferences:', error));
  }, []);

  return (
    <div className="container mt-4">
      <h2>Conferences</h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Date</th>
            <th>Name</th>
            <th>Keywords</th>
            <th>Location</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {conferences.map((conference) => (
            <tr key={conference.id}>
              <td>{conference.date}</td>
              <td>{conference.name}</td>
              <td>{conference.keywords}</td>
              <td>{conference.location}</td>
              <td>
                <Link to={`/feedback/${conference.id}`} state={{ name: conference.name }} className="btn btn-primary">
                  Rate
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ConferenceList;