import React, { useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';

function Feedback() {
  const { conferenceId } = useParams();
  const location = useLocation();
  const conferenceName = location.state?.name || 'Conference';

  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');

  const handleStarClick = (index) => {
    setRating(index + 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const feedbackData = {
      conferenceId,
      rating,
      comment,
    };

    fetch('https://akhenr2oenza574lweyxuo2c240smjjd.lambda-url.eu-west-1.on.aws/feedback', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(feedbackData),
    })
      .then(response => response.json())
      .then(data => {
        console.log('Feedback submitted:', data);
        // Handle success (e.g., redirect or show a success message)
      })
      .catch(error => console.error('Error submitting feedback:', error));
  };

  return (
    <div className="container mt-4">
      <h2>Submit Feedback</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Conference:</label>
          <input type="text" className="form-control" value={conferenceName} readOnly />
        </div>
        <div className="form-group">
          <label>Rating:</label>
          <div>
            {[...Array(5)].map((star, index) => (
              <span
                key={index}
                onClick={() => handleStarClick(index)}
                style={{
                  cursor: 'pointer',
                  color: index < rating ? 'gold' : 'gray',
                  fontSize: '1.5rem',
                }}
              >
                ★
              </span>
            ))}
          </div>
        </div>
        <div className="form-group">
          <label>Comment:</label>
          <textarea
            className="form-control"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
}

export default Feedback;