import React from 'react';
import { Link } from 'react-router-dom';

function ConferenceList() {
  const conferences = [
    {
      id: 1,
      name: 'Cloud Conference 1',
      date: '2023-11-01',
      keywords: 'AWS, Azure, GCP',
    },
    {
      id: 2,
      name: 'Cloud Conference 2',
      date: '2023-12-15',
      keywords: 'Kubernetes, Docker, DevOps',
    },
  ];

  return (
    <div className="container mt-4">
      <h2>Conferences</h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Date</th>
            <th>Name</th>
            <th>Keywords</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {conferences.map((conference) => (
            <tr key={conference.id}>
              <td>{conference.date}</td>
              <td>{conference.name}</td>
              <td>{conference.keywords}</td>
              <td>
                <Link to="/feedback" className="btn btn-primary">
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