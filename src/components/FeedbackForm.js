import React, { useState, useEffect } from 'react';
import { useParams, useLocation, useNavigate } from 'react-router-dom';

function Feedback() {
  const { conferenceId } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const conferenceName = location.state?.name || 'Conference';

  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');
  const [summaryRating, setSummaryRating] = useState(null);
  const [comments, setComments] = useState([]);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    fetch(`https://akhenr2oenza574lweyxuo2c240smjjd.lambda-url.eu-west-1.on.aws/conferences/${conferenceId}/rating`)
      .then(response => response.json())
      .then(data => {
        setSummaryRating(data);
      })
      .catch(error => console.error('Error fetching summary rating:', error));

    fetch(`https://akhenr2oenza574lweyxuo2c240smjjd.lambda-url.eu-west-1.on.aws/conferences/${conferenceId}/comments`)
      .then(response => response.json())
      .then(data => {
        setComments(data);
      })
      .catch(error => console.error('Error fetching comments:', error));
  }, [conferenceId]);

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
        setSubmitted(true);
        setTimeout(() => {
          navigate('/');
        }, 5000);
      })
      .catch(error => console.error('Error submitting feedback:', error));
  };

  if (submitted) {
    return <div className="container mt-4"><h2>Thanks for your comment!</h2></div>;
  }

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
      {summaryRating !== null && (
        <div className="mt-4">
          <h4>Summary Rating: {summaryRating === 0 ? 'No ratings yet' : summaryRating.toFixed(1)}</h4>
        </div>
      )}
      {comments.length > 0 && (
        <div className="mt-4">
          <h4>User Comments:</h4>
          <ul>
            {comments.map((c, index) => (
              <li key={index}>
                <strong>Rating:</strong> {c.rating} - <strong>Comment:</strong> {c.comment}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Feedback;